const functions = require('firebase-functions');
const cors = require('cors');
const https = require('https');
require('dotenv').config();

// Helper to make HTTP requests
function makeRequest(options, data) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(body) });
        } catch (e) {
          resolve({ status: res.statusCode, body });
        }
      });
    });
    req.on('error', reject);
    if (data) req.write(data);
    req.end();
  });
}

// StrataMind Reasoner Function
exports.reasoner = functions.https.onRequest((req, res) => {
  // 1. Strict CORS for Earlington Legacy
  const allowedOrigin = process.env.ALLOWED_ORIGIN || 'https://earlingtonlegacy.org.za';
  const corsHandler = cors({ origin: allowedOrigin });

  return corsHandler(req, res, async () => {
    // 2. Health Monitoring
    if (req.method === 'GET' && req.path === '/health') {
      return res.status(200).json({ status: 'ok', runtime: 'firebase-functions' });
    }

    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
      const { messages, prompt } = req.body;
      const userMessages = messages || (prompt ? [{ role: 'user', content: prompt }] : []);
      
      // 3. Environment Verification
      // In Firebase, we can also use functions.config() but dotenv is supported for local dev
      const apiKey = process.env.STRATAMIND_API_KEY || process.env.OPENAI_API_KEY;

      if (!apiKey) {
        console.warn('Backend: No API Key found. Returning simulation.');
        return res.status(200).json({
          result: `[FIREBASE SIMULATION]
Serverless function (reasoner) reached successfully!
However, no STRATAMIND_API_KEY or OPENAI_API_KEY was found in the environment.

To get real AI responses:
1. Set the keys using \`firebase functions:config:set stratamind.key="THE_KEY"\`
2. Or use .env for local emulation.

Received Message: "${userMessages[userMessages.length - 1]?.content}"`
        });
      }

      // 4. Call Upstream AI Provider
      const requestData = JSON.stringify({
        model: 'gpt-3.5-turbo', // Default fallback / StrataMind compatible
        messages: userMessages,
        temperature: 0.7
      });

      const response = await makeRequest({
        hostname: 'api.openai.com',
        path: '/v1/chat/completions',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          'Content-Length': Buffer.byteLength(requestData)
        }
      }, requestData);

      if (response.status !== 200) {
        throw new Error(`Upstream API Error: ${response.status} - ${JSON.stringify(response.body)}`);
      }

      const aiContent = response.body.choices[0].message.content;

      return res.status(200).json({ result: aiContent });

    } catch (error) {
      console.error('Reasoner Error:', error);
      return res.status(500).json({ 
        error: 'Internal Server Error', 
        details: error.message 
      });
    }
  });
});
