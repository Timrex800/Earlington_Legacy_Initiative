const https = require('https');

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

exports.handler = async (event, context) => {
  // CORS Headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method Not Allowed' }) };
  }

  try {
    const { messages, prompt } = JSON.parse(event.body);
    const userMessages = messages || (prompt ? [{ role: 'user', content: prompt }] : []);
    
    // Check for API Key
    const apiKey = process.env.STRATAMIND_API_KEY || process.env.OPENAI_API_KEY;

    if (!apiKey) {
      // Return a simulation if no key is present (Development Mode)
      console.warn('Backend: No API Key found. Returning simulation.');
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          result: `[BACKEND SIMULATION]
Serverless function reached successfully!
However, no STRATAMIND_API_KEY or OPENAI_API_KEY was found in the server environment.

To get real AI responses:
1. Add your API key to the environment variables.
2. Redeploy or restart the server.

Received Message: "${userMessages[userMessages.length - 1]?.content}"`
        })
      };
    }

    // Call OpenAI (compatible with StrataMind if proxied, or direct OpenAI)
    // Assuming StrataMind uses OpenAI-compatible schema
    const requestData = JSON.stringify({
      model: 'gpt-3.5-turbo', // Default fallback
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

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ result: aiContent })
    };

  } catch (error) {
    console.error('Reasoner Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Internal Server Error', 
        details: error.message 
      })
    };
  }
};
