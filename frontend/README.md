# Frontend Application

This folder contains the original Next.js frontend application.

## Important Note

The existing frontend code files were reorganized by location only. Their contents were not changed as part of this monorepo conversion.

## Main Areas

- `app/`: route pages and layout
- `components/`: shared UI pieces
- `lib/`: static/shared frontend data
- `public/`: images and static assets

## Run

From inside this folder:

```bash
npm install
npm run dev
```

The dev script now does two things before starting Next:
- prevents multiple frontend dev servers from running against the same `frontend/.next` directory
- clears stale `.next` output only when no active dev server is using it

This is the permanent safeguard against recurring manifest-related `500` errors caused by deleting or corrupting `.next` while another dev process is still running.

## Reset

If you want to manually clear frontend-generated development artifacts without starting the dev server:

```bash
npm run reset
```

If a frontend dev server is already running, `reset` will refuse to run until that process is stopped.

## Documentation

Frontend documentation is kept in the root [docs](D:/Xtra/UAMC/docs) folder for centralized access.
See [docs/frontend-setup.md](D:/Xtra/UAMC/docs/frontend-setup.md:1) and [docs/architecture.md](D:/Xtra/UAMC/docs/architecture.md:1).
