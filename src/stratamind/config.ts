// Reasoner feature fully removed. Expose safe defaults to avoid accidental network calls.
export const REASONER_ENDPOINT = process.env.VITE_REASONER_ENDPOINT || '';
export const REASONER_ENDPOINT_PROVIDED = Boolean(process.env.VITE_REASONER_ENDPOINT);
export const REASONER_ENABLED = process.env.VITE_REASONER_ENABLED === 'true' || true;
export const REASONER_REQUEST_TIMEOUT = Number(process.env.VITE_REASONER_TIMEOUT || 5000);
export const REASONER_DEFAULT_MODEL = process.env.VITE_REASONER_DEFAULT_MODEL || 'claude-haiku-4.5';
