// Logger neutralized: Reasoner removed. No-op audit function to preserve import surface.
export function auditEvent(_event: string, _data?: Record<string, unknown>) {
  return;
}

export default { auditEvent };
