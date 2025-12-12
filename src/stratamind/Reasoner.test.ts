import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { callReasoner } from './Reasoner';

describe('callReasoner', () => {
  let originalFetch: any;

  beforeEach(() => {
    originalFetch = globalThis.fetch;
  });

  afterEach(() => {
    globalThis.fetch = originalFetch;
    vi.resetAllMocks();
  });

  it('returns backend response when server returns JSON', async () => {
    globalThis.fetch = vi.fn(() => Promise.resolve({
      ok: true,
      headers: { get: () => 'application/json' },
      json: () => Promise.resolve({ result: 'OK from server' }),
    })) as any;

    const res = await callReasoner({ prompt: 'Test' });
    expect(res).toEqual({ result: 'OK from server' });
  });

  it('falls back to simulation when fetch rejects', async () => {
    globalThis.fetch = vi.fn(() => Promise.reject(new Error('Network')));

    const res = await callReasoner({ prompt: 'hello' });
    expect(res.result).toContain('Hello! I am StrataMind');
    // Simulation includes deterministic metadata for auditing
    expect(res.meta).toBeDefined();
    expect(typeof res.meta?.id).toBe('string');
  });
});
