# Frontend Setup Guide

## Purpose

This frontend is a Next.js application for the UAMC website experience.

## What Is Already Prepared

- Next.js App Router structure
- Tailwind CSS setup
- shared component folder
- shared frontend data folder
- static asset folder under `public/`
- isolated frontend dependency management inside `frontend/`

## Main Areas

- `app/`: route pages, layout, and global styles
- `components/`: reusable UI components
- `lib/`: shared frontend constants and data
- `public/`: static images and assets

## Recommended Development Order

1. Install frontend dependencies.
2. Start the local development server.
3. Build feature-specific components in separate files.
4. Mount those components into route pages cleanly.
5. Add page-by-page refinements and responsive behavior.
6. Run production builds regularly to catch integration issues early.

## Run

From the `frontend/` folder:

```bash
npm install
npm run dev
```

The `dev` command runs a preparation step before `next dev` that clears stale `.next` output and temporary dev logs. This is intended to prevent recurring missing-manifest errors such as missing `routes-manifest.json`, `pages-manifest.json`, or `app-paths-manifest.json`.

## Manual Reset

If you need to clear generated frontend development artifacts without starting the server:

```bash
npm run reset
```

## Suggested Next Steps

- modularize large landing page sections into dedicated components
- align shared header/footer usage across routes
- replace placeholder content on secondary pages
- introduce feature-level page sections for better maintainability
