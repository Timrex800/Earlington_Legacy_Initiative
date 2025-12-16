import { GoogleGenAI, Chat } from "@google/genai";

let client: GoogleGenAI | null = null;
let chatSession: Chat | null = null;

const getClient = (): GoogleGenAI => {
  if (!client) {
    const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
    if (!apiKey) {
      console.warn("GEMINI_API_KEY not found. Operating in simulation mode.");
    }
    client = new GoogleGenAI({ apiKey: apiKey || 'dummy-key' });
  }
  return client;
};

// Removed Stratamind-specific prompts and functionality.
const SYSTEM_PROMPT = `Removed Stratamind service.`;
You are NOT a frontend website component. You are the engine running on the backend infrastructure.
Your mandate is to manage repository cleanup, enforce policies, and generate execution plans.`;

export const generateReasoningLog = async (stage: string, context: string): Promise<string> => {
  if (!process.env.GEMINI_API_KEY) {
    const mocks: Record<string, string> = {
      'ANALYSIS': 'Backend process started. Scanning filesystem mount.',
      'PLANNING': 'Computing dependency graph and cleanup vector.',
      'EXECUTION': 'Applying cleanup actions and sanitizations.',
      'VERIFICATION': 'Integrity checks complete.'
    };
    return mocks[stage] || `[Reasoner] Processing ${stage}: ${context}`;
  }

  try {
    const ai = getClient();
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      config: { temperature: 0.2 },
      contents: `Current Backend Operation: ${stage}. Context: ${context}. Generate a single precise backend-ops log entry.`
    });
    return response.text || "Log generation failed.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return `[System Failure] Engine connection lost.`;
  }
};

export const generateCleanupReport = async (stats: any): Promise<string> => {
  if (!process.env.GEMINI_API_KEY) {
    return `# Antigravity Console - Backend Audit Report\n\nAgent: Reasoner (neutralized)\nTimestamp: ${new Date().toISOString()}\n\nFiles Removed: ${stats.filesRemoved}\nSpace Saved: ${stats.spaceSaved}`;
  }

  try {
    const ai = getClient();
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      config: { systemInstruction: SYSTEM_PROMPT },
      contents: `Generate a backend engineering report for the repository cleanup. FilesRemoved: ${stats.filesRemoved}, SpaceSaved: ${stats.spaceSaved}`
    });
    return response.text || "Report generation failed.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error generating report.";
  }
};

export const sendChatMessage = async (message: string): Promise<string> => {
  if (!process.env.GEMINI_API_KEY) return `[Reasoner]: Received: "${message}".`;

  try {
    const ai = getClient();
    if (!chatSession) chatSession = ai.chats.create({});
    const response = await chatSession.sendMessage({ message });
    return response.text || "No response.";
  } catch (error) {
    console.error("Chat Error:", error);
    return "[System Error]";
  }
};

export const executeQuickScan = async (target: string): Promise<string> => {
  if (!process.env.GEMINI_API_KEY) return `[Simulation] Quick scan: ${target} clean.`;
  try {
    const ai = getClient();
    const response = await ai.models.generateContent({ model: 'gemini-2.5-flash-lite', config: { temperature: 0.1 }, contents: `Scan: ${target}` });
    return response.text || "Scan failed.";
  } catch (error) {
    console.error(error);
    return "[Error]";
  }
};

export const executeDeepReasoning = async (query: string): Promise<string> => {
  if (!process.env.GEMINI_API_KEY) return `[Simulation] Deep Reasoning: ${query} validated.`;
  try {
    const ai = getClient();
    const response = await ai.models.generateContent({ model: 'gemini-3-pro-preview', contents: `Analyze: ${query}` });
    return response.text || "Analysis failed.";
  } catch (error) {
    console.error(error);
    return "[Error]";
  }
};

export const generateAgentExecutionPlan = async (): Promise<string[]> => {
  if (!process.env.GEMINI_API_KEY) return ['scan --heuristic', 'audit --deep', 'biome migrate --write', 'status --report'];
  try {
    const ai = getClient();
    const response = await ai.models.generateContent({ model: 'gemini-3-pro-preview', contents: 'Return a JSON array of 4 maintenance commands.' });
    const text = response.text || '[]';
    const match = text.match(/\[.*\]/s);
    return match ? JSON.parse(match[0]) : [];
  } catch (e) {
    console.error(e);
    return ['status','scan'];
  }
};
