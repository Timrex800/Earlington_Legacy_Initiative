// Centralized configuration for StrataMind client integration.
// Keep only non-sensitive flags here; never store secrets on the client.
export const STRATAMIND_ENDPOINT = (import.meta.env.VITE_STRATAMIND_ENDPOINT as string) || '/.netlify/functions/reasoner';
export const STRATAMIND_ENDPOINT_PROVIDED = Boolean(import.meta.env.VITE_STRATAMIND_ENDPOINT);
export const STRATAMIND_ENABLED = (import.meta.env.VITE_STRATAMIND_ENABLED === 'true') || STRATAMIND_ENDPOINT_PROVIDED;

// Default timeout used when contacting the serverless function (ms)
export const STRATAMIND_REQUEST_TIMEOUT = Number(import.meta.env.VITE_STRATAMIND_TIMEOUT) || 3000;
