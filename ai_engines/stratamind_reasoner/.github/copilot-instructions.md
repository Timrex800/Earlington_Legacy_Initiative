Purpose: Guide AI coding agents for productive contributions to the Stratamind Reasoner engine.

# Quick Orientation
- Language: Python 3.11+ (check pyproject.toml / requirements.txt). Use virtual environments or Poetry.
- Top-level layout: core (runtime), analysis (inspectors), generation (code + tests), workspace (context & memory), prompting, api (server), integrations (IDE/CLI), models, config, logs, tests, docs.

# Big Picture Architecture
- `core/` contains the runtime HRM (Human Resource Manager) controller, reasoning pipeline and model loader. This is where inference and orchestration live (`core/hrm_controller.py`, `core/reasoning_pipeline.py`).
- `analysis/` contains repository and architecture analyzers used to produce structured insights about code, dependencies and security traits (`analysis/architecture_analyzer.py`).
- `generation/` contains code generation and refactoring engines (scaffolders, API interface builders) that emit or modify repository artifacts.
- `workspace/` handles session memory, context, and code indexing to maintain state across agent interactions; key files are `context_manager.py` and `project_intel_extractor.py`.
- `prompting/` contains canonical prompts and templates used by agents and the reasoning pipeline (include `system_prompt.md` and `coding_prompt_templates.md`). Always use these templates for reproducibility.
- `api/` provides a programmatic server surface (`server.py`, `routes.py`) and auth/sanitization layers to prevent unsafe input reaching the engine.
- `integrations/` contains IDE connectors, CLI tooling and devtools bridges that enable running the agent in alternate environments (e.g., `integrations/vscode/agent_manifest.json`).
- `models/` contains model binaries and vector/embedding data. These are usually large — prefer storing externally and adding pointers in `service_identity.json` or `engine_config.yaml`.

# Developer Workflows & Commands
- Create a virtualenv and install dependencies (choose poetry if `pyproject.toml` exists):
  - Python venv recipe:
    ```bash
    python -m venv .venv
    source .venv/bin/activate  # macOS/Linux
    .venv\Scripts\Activate     # Windows (PowerShell)
    pip install -r requirements.txt
    ```
  - Poetry:
    ```bash
    poetry install
    ```
- Run the API server (uvicorn recommended if server is ASGI), run from `ai_engines/stratamind_reasoner`:
  - `uvicorn api.server:app --reload --host localhost --port 8000`
  - Or: `python -m api.server` if packaged as a module
- Tests: `pytest -q` from the repo root or the subproject folder. Use `--maxfail=1 -q` for quick loops.
- Formatting & linting: check `pyproject.toml` for tools (black, ruff, isort). Prefer to run `black . && ruff check .`.

# Project-Specific Conventions & Patterns
- Use the `prompting/` templates: Always source prompt formats from `prompting/` files for system/coding/refactor tasks to ensure consistent responses and auditability.
- The engine supports a simulation mode: `core` should gracefully fallback if models or API keys aren't available — prefer this behavior in local dev for safe testing.
- Models are binary artifacts: Do not commit large model weights to Git — add references instead and use `models/*.json` pointers or an S3/GCS path in `engine_config.yaml`.
- Logging: All runtime actions must be logged under `logs/` with structured entries. Use subfolders for `audit/`, `decisions/`, `sessions/`, and `errors/`.
- Config: All runtime configuration is driven by `engine_config.yaml`, `service_identity.json`, and `security_policies.yaml`. Avoid storing runtime secrets in code or config files in source control.

# Integration Points & External Dependencies
- External AI backends / inference hosts: ensure upstream provider endpoints are configurable through `engine_config.yaml` or environment variables.
- Auth & CORS: `api/auth_middleware.py` defines how clients authenticate. Ensure local dev uses minimal auth to run emulators but never mirror production keys.
- VS Code integration: `integrations/vscode/agent_manifest.json` maps capabilities to the manifest and should be kept in sync when adding API endpoints.
- CLI: `integrations/command_line/stratamind_cli.py` is the local-facing entry for automations and should mirror API behavior used by the UI.

# Security & Safety
- `security_policies.yaml` contains rules enforced in runtime and CI. Follow them when adding routes or expanding capabilities.
- `auth_middleware.py` and `request_sanitizer.py` must validate inputs and rate limit potentially abusive operations. Prefer whitelisting for allowed actions.
- `service_identity.json` contains pointers to secrets or service accounts. Do not commit real credentials — only pointers or examples.
- Use `logs/audit/` for high-sensitivity events (e.g., model weights loads, config changes, or privilege escalations).

# Testing & CI Guidance
- Unit tests under `tests/` use pytest. Use test doubles for model loading paths and stub network calls (e.g., mock `model_loader` or upstream inference endpoints).
- For integration tests exercise `api/routes.py` using a real ASGI server instance or test client (`starlette.testclient` / `requests`/`httpx` with `uvicorn` running in a fixture).
- Security tests: `tests/test_security.py` must cover validation and sanitization paths. Add new tests whenever you add a route or a new input shape.

# Common Tasks for Agents
- Add or modify a reasoning feature: change `core/reasoning_pipeline.py`, update `core/inference_manager.py`, add a model pointer and a `models/` entry, and add unit tests.
- Add a new analysis step: extend `analysis/pattern_detector.py` and expose a `analysis/optimization_engine.py` hook.
- Add a new generator or refactor path: update `generation/*` and `prompting/coding_prompt_templates.md`, then add end-to-end tests in `tests/`.
- Add a new integration (VSCode / CLI): follow patterns in `integrations/vscode/` or `integrations/command_line/` and add docs to `docs/integration_guide.md`.

# Files to Inspect First
- Runtime: `core/hrm_controller.py`, `core/reasoning_pipeline.py`, `core/inference_manager.py`.
- API surface: `api/server.py`, `api/routes.py`, `api/auth_middleware.py`.
- Prompting & generation: `prompting/system_prompt.md`, `prompting/coding_prompt_templates.md`.
- Tests & docs: `tests/*`, `docs/*`.

# Additions & Contributors Checklist
- Run full test suite: `pytest -q`.
- Lint & format: `black . && ruff check .` or `poetry run ruff check .` depending on tooling in `pyproject.toml`.
- Update `docs/changelog.md` with brief details for any behavioural change.
- If you change models or model pointers: update `models/*` index JSON and add CI checks or a `models/README.md` describing staging vs production model sources.

# Contact & Maintenance Questions
- Confirm: preferred runtime (uvicorn/ASGI) and deployment path (Kubernetes, Lambda, or internal host).
- Preferred storage for model weights: S3/GCS/internal artifact registry?
- Any required pre-commit hooks or CI checks not present in `pyproject.toml` or `requirements.txt`?

Keep content concise and stick to the templates in `prompting/` for reproducible interactions.
