# UAMC Repository

This repository contains two fully isolated applications:

- `frontend/`: the Next.js frontend
- `backend/`: the Express + MongoDB backend

Each application manages its own dependencies, lockfile, and runtime commands inside its own folder.
All documentation is centralized in the root `docs/` folder.

## Repository Structure

```text
.
├── backend/
├── docs/
├── frontend/
├── .gitignore
├── LICENSE
└── README.md
```

## How To Run

Frontend:

```bash
cd frontend
npm install
npm run dev
```

Backend:

```bash
cd backend
npm install
npm run dev
```

## Architecture

- The frontend and backend are intentionally isolated from each other.
- There is no root workspace package manager layer.
- Backend features are organized as modules and mounted through a central API router.

See [docs/architecture.md](docs/architecture.md) for detailed structure and conventions.
