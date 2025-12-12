// Minimal deterministic generator to output code snippets or instructions.
export function generateFixSuggestion(issue: string): string {
  // Deterministic mapping based on issue content
  if (issue.includes('eval')) return 'Replace eval() with a safe parser or explicit functions.';
  if (issue.includes('Console logging')) return 'Switch to structured logger using a centralized logger module.';
  if (issue.includes('Large file')) return 'Refactor into smaller modules and add clear public interfaces.';
  return 'No automated suggestion available; request human review.';
}

export default generateFixSuggestion;
