# AI Token Dashboard

Static dashboard for local AI coding-assistant token usage. It is designed to be forked or used as a GitHub template, then hosted as a static site after you generate and commit your own `data/usage.json` and `data/usage.js` bundle.

The dashboard is intended for Codex and Claude Code local usage data. It is a local estimate from local assistant logs, not provider billing truth.

## Privacy and Data Policy

This repository serves whatever is committed under `data/`.

- A private live repo can hold your real generated `data/usage.*` bundle.
- A public template repo should ship only sample or sanitized data. Do not publish someone else's private generated bundle.
- Static hosting serves the committed `data/usage.json` and `data/usage.js` files.
- Render and other cloud static-site builds do not read your laptop logs. The build only checks that the committed data bundle exists.
- Running the updater locally is the step that reads local Codex or Claude Code logs and regenerates the committed bundle.

If you make your fork public, inspect `data/usage.json` before pushing.

## Quickstart

1. Create your copy from the GitHub template or fork this repository.
2. Clone your copy locally.

   ```bash
   git clone git@github.com:YOUR_USER/ai-token-dashboard.git
   cd ai-token-dashboard
   ```

3. Generate your dashboard data.

   ```bash
   tools/update_dashboard.sh
   ```

4. Commit and push the generated bundle if the updater did not do it for you.

   ```bash
   git add data/usage.json data/usage.js
   git commit -m "Update token dashboard data"
   git push
   ```

5. Create a Render static site from your repo. The included `render.yaml` keeps the site static and serves the committed bundle.

## Install the Shortcut

Install or update the local `dashboard` command from this checkout:

```bash
tools/install_dashboard_shortcut.sh
```

The installer creates `~/.local/bin/dashboard`, pointing at this checkout's `tools/update_dashboard.sh`.

Make sure `~/.local/bin` is on your `PATH`, then refresh and publish from anywhere:

```bash
dashboard
dashboard --no-push
dashboard --no-commit
```

Re-run `tools/install_dashboard_shortcut.sh` after moving the checkout.

## Updating Data

Run from the dashboard checkout:

```bash
tools/update_dashboard.sh
```

The command regenerates `data/usage.json` and `data/usage.js`, validates the importer syntax, commits only those bundled data files when this directory is a Git worktree, and pushes the current branch to the configured remote.

Useful options:

```bash
tools/update_dashboard.sh --no-commit
tools/update_dashboard.sh --no-push
tools/update_dashboard.sh --remote origin
tools/update_dashboard.sh --message "Update dashboard data"
```

If the directory is not a Git worktree, or the configured remote does not exist, the command refreshes local files and reports that publishing was skipped.

## Configuration

The importer/update tooling can be configured with environment variables:

- `DASHBOARD_CODEX_DIRS`: comma-separated Codex transcript directories to scan. Defaults should cover the normal local Codex session locations.
- `DASHBOARD_CLAUDE_PROJECTS_DIR`: Claude Code projects directory to scan. Use this when Claude Code data lives outside the default location.
- `DASHBOARD_TIMEZONE`: IANA timezone used for daily grouping, such as `America/New_York`.
- `DASHBOARD_REMOTE`: Git remote used by the updater when pushing. Defaults to `origin`.
- `DASHBOARD_COMMIT_MESSAGE`: commit message used for generated data updates.

Example:

```bash
DASHBOARD_TIMEZONE=America/Los_Angeles dashboard --no-push
```

## Render Hosting

`render.yaml` is configured as a Render static site. Its build command checks that `data/usage.json` and `data/usage.js` are present, then Render serves the repository root as static files.

To deploy:

1. Push a repo that contains committed `data/usage.json` and `data/usage.js`.
2. In Render, create a new Blueprint or static site from that repo.
3. Keep the service private if the committed data is private to you.

The cloud build does not run the local importer and does not read `~/.codex`, Claude Code project logs, or any other local machine files.

## Local Viewing

Open `index.html` directly in a browser, or serve the directory with any static file server.

## Publishing a Template

Before publishing a template repo:

- Replace real `data/usage.json` and `data/usage.js` with sample or sanitized data.
- Remove personal live-site links from documentation.
- Keep `render.yaml` fork-neutral so each user connects their own repo in Render.

## Scope

This dashboard summarizes local transcript usage events. It is useful for personal trend tracking, model mix review, and rough assistant-usage visibility. It is not OpenAI, Anthropic, or Render billing truth.
