# UAMC Monorepo

This repository is now organized as a monorepo with clear application boundaries:

- `frontend/`: the existing Next.js application, moved without changing the contents of its current code files
- `backend/`: a new modular Express + MongoDB-ready API scaffold

## Repository Structure

```text
.
├── backend/
├── frontend/
├── .gitignore
├── package.json
└── README.md
```

## Workspace Commands

Run commands from the repository root:

```bash
npm run dev:frontend
npm run build:frontend
npm run lint:frontend

npm run dev:backend
npm run build:backend
npm run start:backend
npm run check:backend
```

## Architecture

- The frontend remains isolated as a presentation application.
- The backend is isolated as an API application.
- Each backend feature lives in its own module and is mounted through a central router.
- Shared backend concerns such as config, database, middleware, and utilities live in dedicated common folders.

See [docs/architecture.md](docs/architecture.md) for detailed structure and conventions.
