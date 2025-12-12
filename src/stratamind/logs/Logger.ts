// Minimal logger for StrataMind - audits and non-sensitive events only.
export function auditEvent(event: string, data?: Record<string, unknown>) {
  // Keep this simple and deterministic for local dev. Do not log secrets.
  const ts = new Date().toISOString();
  const payload = { ts, event, data: data || null };
  // For local testing, use console.info. In production, wire this to centralized logger.
  console.info('[StrataMind Audit]', JSON.stringify(payload));
}

export default { auditEvent };
