// Scanner utility removed as part of Reasoner cleanup. Keep a no-op implementation for imports.
export interface ScanResult { path: string; issues: string[] }
export function scanSourceForPatterns(_source: string, path: string): ScanResult {
  return { path, issues: [] } as unknown as ScanResult;
}

export default scanSourceForPatterns;
