# Skill-Path-AI — Shiksha Setu

SIH 2026 prototype for **SIH26101: AI-Driven Competency Gap Assessment & Personalized Learning Path Recommendation for Government Employees**.

The prototype demonstrates an assessment-led learner journey: concept starter → assessment → explainable gap analysis → mistake review → targeted learning → re-assessment → competency or recovery path. A first-attempt perfect score unlocks a separate advanced challenge.

## What is included

- `index.html`, `style.css`, `script.js` — browser-based learner interface, local demo question banks, gap explanation, guided learning, recovery flow, advanced assessment, confidence reflection, and theme preference.
- `server/server.js` — optional local Node.js HTTP API and SQLite persistence for learner profiles and attempts.
- `package.json` — backend start command.

This is a **prototype**. Its recommendations use predefined demo logic and question banks. It does not connect to a live AI model or iGOT Karmayogi API. Live Server mode stores demo progress in browser storage; the optional backend stores learner and attempt records in a local SQLite database.

## Run the browser prototype

1. Open this folder in VS Code.
2. Open `index.html` with the Live Server extension.

## Run with the optional local backend

Requires Node.js 22.5 or newer.

```powershell
npm.cmd start
```

Then open `http://localhost:3000`. Keep the terminal running while you use the app. Stop the server with `Ctrl+C`.

The SQLite file is generated at `server/data/skillpath.sqlite` when the backend starts. It is intentionally excluded from version control.
