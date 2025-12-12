// Core deterministic Reasoner module for StrataMind
// This module provides deterministic, auditable reasoning flows suitable for local testing and integration.
export interface CoreMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface CoreResult {
  id: string; // deterministic id for this reasoning trace
  result: string;
  trace: string[]; // steps taken deterministically
}

function stableHash(input: string): number {
  // FNV-1a 32-bit hash - deterministic and fast
  let h = 2166136261 >>> 0;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h >>> 0;
}

export class ReasonerCore {
  readonly seed: number;

  constructor(seedInput?: string) {
    this.seed = stableHash(seedInput ?? 'stratamind-seed');
  }

  // Deterministic analyze: produces predictable output and a trace for auditing
  analyze(messages: CoreMessage[]): CoreResult {
    const lastUser = messages.filter(m => m.role === 'user').pop()?.content || '';
    const id = `core-${stableHash(lastUser + String(this.seed))}`;
    const trace: string[] = [];

    trace.push('Normalize input');
    const normalized = lastUser.trim().replace(/\s+/g, ' ');

    trace.push('Classify intent');
    const intent = this.classifyIntent(normalized);
    trace.push(`Intent: ${intent}`);

    trace.push('Compose deterministic response');
    const result = this.composeResponse(intent, normalized);

    trace.push('Finish');
    return { id, result, trace };
  }

  private classifyIntent(input: string): string {
    const lower = input.toLowerCase();
    if (!input) return 'EMPTY';
    if (lower.includes('analyze') || lower.includes('scan')) return 'ANALYZE_CODE';
    if (lower.includes('explain') || lower.includes('help')) return 'EXPLAIN';
    if (lower.includes('hello') || lower.includes('hi')) return 'GREETING';
    return 'GENERAL';
  }

  private composeResponse(intent: string, input: string): string {
    // Deterministically construct a message based on intent
    switch (intent) {
      case 'EMPTY':
        return 'No user input detected.';
      case 'ANALYZE_CODE':
        return `Deterministic analysis: found ${this.seed % 5 + 1} potential areas to inspect for input "${input}".`;
      case 'EXPLAIN':
        return `I can provide a step-by-step explanation. Deterministic trace id: ${this.seed}.`;
      case 'GREETING':
        return 'Hello from StrataMind Core (deterministic). How can I assist?';
      default:
        return `Processed request: "${input}"`;
    }
  }
}

export default ReasonerCore;
