export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface ReasonerRequest {
  prompt?: string;
  messages?: Message[];
}

export interface ReasonerResponse {
  result: string;
}

export async function callReasoner(request: ReasonerRequest): Promise<ReasonerResponse> {
  const messages = request.messages || (request.prompt ? [{ role: 'user', content: request.prompt }] : []);
  const lastUserMessage = messages.filter(m => m.role === 'user').pop()?.content || '';
  const apiKey = import.meta.env.VITE_STRATAMIND_API_KEY;

  // 1. Try to call the Serverless Backend (if running in an environment that supports it)
  // We skip this if we know we are in a purely static dev mode without proxy, 
  // but for "Backend works" request, we attempt it.
  try {
    // Only attempt backend fetch if we aren't explicitly avoiding it or if we have an API key that implies external service
    // However, for this fix, we try the local function endpoint first.
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000); // 3s timeout for backend check

    const response = await fetch('/.netlify/functions/reasoner', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey || ''}`,
      },
      body: JSON.stringify({ messages }),
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);

    const contentType = response.headers.get('content-type');
    if (response.ok && contentType && contentType.includes('application/json')) {
      const data = await response.json();
      return data;
    }
  } catch (err) {
    // Backend failed or doesn't exist (common in 'npm run dev' without Netlify)
    // Silently fall through to simulation
    console.log('Backend unreachable, using local StrataMind simulation.');
  }

  // 2. Client-Side Simulation (Fallback)
  console.warn('Stratamind Reasoner: Running in Local Simulation Mode.');
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate think time

  // Advanced Keyword Matching for Simulation
  let mockResponse = '';
  const lowerMsg = lastUserMessage.toLowerCase();

  if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) {
    mockResponse = "Hello! I am StrataMind, running locally in your browser. I can help visualize how the Reasoner integrates with your project.";
  } else if (lowerMsg.includes('code') || lowerMsg.includes('react')) {
    mockResponse = "I can analyze your React components. Since I am in simulation mode, I can tell you that `ReasonerPanel.tsx` handles this chat interface and `Reasoner.ts` manages the logic.";
  } else if (lowerMsg.includes('backend') || lowerMsg.includes('server')) {
    mockResponse = "I am currently using the Client-Side fallback engine. To enable the real Serverless Backend:\n1. Ensure `serverless/reasoner.js` is deployed to Netlify/AWS.\n2. Or run `netlify dev` locally.\n3. Add `STRATAMIND_API_KEY` to your environment variables.";
  } else if (lowerMsg.includes('deploy')) {
    mockResponse = "To deploy this project:\n1. Commit your changes.\n2. Push to GitHub.\n3. Verify GitHub Pages or Netlify settings are active.\n4. Run `npm run build` to check for build errors.";
  } else {
    mockResponse = `[LOCAL STRATAMIND]
I processed your request: "${lastUserMessage}"

I am operating in **Local Mode** because the backend function was unreachable. 
This confirms the UI is working perfectly!

To connect a real intelligence:
- Ensure the serverless function is running.
- Provide a valid API Key.`;
  }

  return { result: mockResponse };
}
