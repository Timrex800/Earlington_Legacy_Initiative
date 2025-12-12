// Centralized prompt templates for StrataMind Reasoner. Keep free of secrets.
export const SAFE_ANALYSIS_PROMPT = `You are a deterministic code analysis agent. Explain findings and suggest refactors.`;
export const SECURITY_REVIEW_PROMPT = `Check for dangerous patterns, secrets in code, and insecure ops.`;

export default { SAFE_ANALYSIS_PROMPT, SECURITY_REVIEW_PROMPT };
