// Reasoner core neutralized. Expose a minimal class that returns an inert result.
export interface CoreMessage { role: string; content: string }
export interface CoreResult { id: string; result: string; trace: string[] }

export class ReasonerCore {
  constructor(_seedInput?: string) {}
  analyze(_messages: CoreMessage[]): CoreResult {
    return { id: 'removed', result: 'Reasoner core removed.', trace: [] };
  }
}

export default ReasonerCore;
