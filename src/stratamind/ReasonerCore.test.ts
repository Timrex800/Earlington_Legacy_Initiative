import { describe, it, expect } from 'vitest';
import ReasonerCore from './core/ReasonerCore';
import scanSourceForPatterns from './analysis/Scanner';
import generateFixSuggestion from './generation/Generator';

describe('ReasonerCore deterministic behavior', () => {
  it('generates deterministic id and trace', () => {
    const core = new ReasonerCore('test-seed');
    const res1 = core.analyze([{ role: 'user', content: 'Hello there' }]);
    const res2 = core.analyze([{ role: 'user', content: 'Hello there' }]);
    expect(res1.id).toBe(res2.id);
    expect(res1.trace).toEqual(res2.trace);
  });

  it('responds to analyze intent deterministically', () => {
    const core = new ReasonerCore('test-seed');
    const res = core.analyze([{ role: 'user', content: 'Please analyze my code' }]);
    expect(res.result).toContain('Deterministic analysis');
  });
});

describe('Scanner and Generator basic flow', () => {
  it('finds issues and suggests fixes', () => {
    const source = `console.log('hello'); eval('2+2');`;
    const scan = scanSourceForPatterns(source, 'fake/path.ts');
    expect(scan.issues.length).toBeGreaterThanOrEqual(1);
    const suggestion = generateFixSuggestion(scan.issues[0]);
    expect(typeof suggestion).toBe('string');
  });
});
