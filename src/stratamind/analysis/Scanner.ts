// Simple static code analysis helper for StrataMind
export interface ScanResult {
  path: string;
  issues: string[];
}

export function scanSourceForPatterns(source: string, path: string): ScanResult {
  const issues: string[] = [];
  if (source.includes('eval(')) {
    issues.push('Use of eval(): dangerous and non-deterministic.');
  }
  if (source.includes('console.log(')) {
    issues.push('Console logging found: consider structured logging.');
  }
  if (source.length > 10000) {
    issues.push('Large file: consider splitting for maintainability.');
  }
  return { path, issues };
}

export default scanSourceForPatterns;
