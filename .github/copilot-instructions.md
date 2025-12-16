Purpose: Guide AI coding agents for productive contributions to this repo.

# Quick Orientation
- Web: Single Page App in `src/` built with React + TypeScript + Vite + Tailwind.
- Serverless/backends: `serverless/` (Netlify functions) and `functions/` (Firebase Functions). One or the other is used during deployment and local development emulation.
- Mobile: `mobile-app/` (Expo/React Native) — independent codebase and pipelines.
- Agent and tools: `agents/reasoner-agent/` contains supporting agent code; `src/reasoner/` contains the client-side Reasoner logic.
- Note: There is a duplicated nested folder `Earlington_Legacy_Initiative/` inside the repo. Use the root-level paths for development unless you explicitly need to work on the duplicate copy.

# Big Picture Architecture
- Client (SPA): `src/` — UI components in `src/components` and the `ReasonerPanel` in `src/components/ReasonerPanel.tsx`.
- Client logic for AI: `src/reasoner/Reasoner.ts` + `src/reasoner/config.ts` (environment-driven feature flags) + `src/reasoner/Reasoner.test.ts`.
- Backend: either `serverless/reasoner.js` (Netlify-style function) or `functions/index.js` (Firebase Function). Both call OpenAI-style APIs and simulate when no secret is available.
- Build & deploy: GitHub Actions build uses `npm ci` + `npm run build` and deploys to GitHub Pages; this is defined in `.github/workflows/deploy.yml`.

# Developer Workflows & Commands
- Install deps: `npm ci` (root). For functions: `cd functions && npm ci`.
- Run the site locally (Vite): `npm run dev` from repo root.
- Build for production: `npm run build` (runs TypeScript compile + `vite build`). Use `npm run preview` to inspect production output locally.
- Lint: `npm run lint`.
-- Tests: `npm run test` (Vitest). Key tests: `src/reasoner/Reasoner.test.ts` demonstrates mocking `fetch` using `vi`.
- Functions local dev:
  - Firebase: `cd functions && npm run serve` (emulator) or `firebase emulators:start --only functions`.
  - Netlify: `npx netlify dev` while `npm run dev` runs Vite (if using Netlify CLI — not a repo script).

# Secrets and Env Patterns
- Client-side env vars follow Vite prefix `VITE_`. DO NOT put secrets in `VITE_*` (they are baked into builds).
  - `VITE_REASONER_ENDPOINT`: override endpoint (defaults to `/.netlify/functions/reasoner`).
  - `VITE_REASONER_ENABLED`: `true` or `false` toggles simulation vs. endpoint lookup.
  - `VITE_REASONER_TIMEOUT`: timeout for backend call (ms).
  - `VITE_*` title/logo/og values: `VITE_APP_TITLE`, `VITE_APP_OG_IMAGE`, `VITE_PUBLIC_URL` (injected through `vite.config.ts`).
- Server side secrets should be stored as environment variables in the hosting provider:
  - `REASONER_API_KEY` or `OPENAI_API_KEY` for real AI responses.
  - `ALLOWED_ORIGIN` used by functions/index.js to restrict CORS in Firebase.

# Key Conventions & Patterns to Preserve
- Client-only: No sensitive values must ever appear in `import.meta.env.*` without a `VITE_` prefix.
- Client-server boundary: `src/reasoner/Reasoner.ts` will attempt a POST to `VITE_REASONER_ENDPOINT` first, and then fall back to a local simulation. When testing features, prefer to run the local function or deploy the simple serverless function.
- Simulation: The repo intentionally provides safe, deterministic simulation responses to enable offline UI development (see `callReasoner` in `src/reasoner/Reasoner.ts`). Tests expect the simulation to match a few phrases.
- File aliasing: `@` resolves to `src/` (see `vite.config.ts`). Prefer imports like `@/components/sections/About` for consistent paths.
- Styling: Tailwind + PostCSS. Keep the atomic Tailwind pattern; component classes often use `clsx` + `tailwind-merge` helpers.
- Tests: Use `vitest` and `vi` for mocks. Example: `vi.fn()` to mock `fetch`, as in `Reasoner.test.ts`.

# Integration Points & Observability
- GitHub Pages via `.github/workflows/deploy.yml`. Validate `npm run build` before merging.
- Firebase functions: `functions/index.js` — supports CORS and has a simulation fallback when `REASONER_API_KEY` is missing.
- Netlify functions: `serverless/reasoner.js` — structurally similar to the Firebase function.
- Optional: `openai` call in server code uses `api.openai.com/v1/chat/completions` — adapt model parameter, headers, and request shape cautiously.

# Common Tasks for Agents
- Add or modify Reasoner behaviors: update `src/reasoner/Reasoner.ts` and tests in `src/reasoner/Reasoner.test.ts`. Mocking fetch in tests is the canonical method for verifying behaviors.
- Add UI changes: update `src/components/*`, use `@` aliases and Tailwind utilities. Add unit tests for new behaviors.
- Add a new function: copy patterns from `serverless/reasoner.js` and `functions/index.js`. Document env vars in `.env.example` if adding new envs.
- Before opening PRs: run `npm run lint`, `npm run test`, and `npm run build` to avoid CI breakages.

# Safety & Security
- Never hardcode API keys. If a secret is needed for validation, the CI/CD or host environment must inject it.
- The code intentionally simulates AI responses when keys are not present — keep this behaviour as-is for local dev and CI.

# Files to Inspect First
- Project root: `package.json`, `vite.config.ts`, `tailwind.config.js`, `postcss.config.js`.
- Client: `src/`, with primary components `src/App.tsx`, `src/components/ReasonerPanel.tsx` and `src/reasoner/*`.
- Serverless: `serverless/reasoner.js` and `functions/index.js`.
- Tests: `src/reasoner/Reasoner.test.ts`.

# What to Ask the Maintainers
- Which backend is preferred in production: `Netlify Functions` (`serverless/`) vs `Firebase Functions` (`functions/`)?
- Does the project have any hidden deployment steps or environment secrets that should be documented? (e.g. `GH_PAGES` custom domain settings)

# Closing Note
Keep changes minimal and consistent with existing patterns. When adding server-side changes, ensure the client remains secure by not leaking secrets through `VITE_*` envs.
