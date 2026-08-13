# Architecture Notes

## Goals

- Keep frontend and backend isolated at the repository root.
- Make each backend feature independently maintainable.
- Centralize infrastructure concerns such as environment validation, database bootstrapping, error handling, and route mounting.
- Avoid mixing feature logic with framework bootstrapping.
- Keep dependency management local to each application folder.

## Repository Layout

```text
.
|-- backend
|   |-- src
|   |   |-- app.ts
|   |   |-- server.ts
|   |   |-- config
|   |   |-- common
|   |   |-- modules
|   |   `-- routes
|   |-- package.json
|   |-- package-lock.json
|   `-- tsconfig.json
|-- frontend
|   |-- app
|   |-- components
|   |-- lib
|   |-- public
|   |-- package.json
|   `-- package-lock.json
|-- docs
|   |-- architecture.md
|   |-- backend-setup.md
|   `-- frontend-setup.md
`-- README.md
```

## Frontend

- The frontend contains the original Next.js app.
- Existing frontend code file contents were not modified during the reorganization.
- Future frontend work should continue feature-by-feature inside `frontend/app` and `frontend/components`.
- Frontend dependencies are installed and managed from `frontend/`.

## Backend

### Design Rules

- `src/app.ts` owns Express composition only.
- `src/server.ts` owns process startup only.
- `src/config/*` owns environment parsing and database connection concerns.
- `src/common/*` owns cross-cutting infrastructure such as middleware and helpers.
- `src/modules/<feature>` owns feature-specific route, controller, and service code.
- `src/routes/index.ts` is the mother router that mounts all feature routers in one place.
- Backend dependencies are installed and managed from `backend/`.

### Module Pattern

Each feature module follows this pattern:

```text
modules/
`-- feature-name/
    |-- feature-name.route.ts
    |-- feature-name.controller.ts
    `-- feature-name.service.ts
```

This keeps request handling, business logic, and route wiring separated and scalable.

## Security Baseline

The backend scaffold includes:

- `helmet` for common HTTP hardening
- `cors` for controlled cross-origin behavior
- `express-rate-limit` for basic request throttling
- `zod` for environment validation
- centralized error and not-found middleware
- request body size limits

## Next Steps

- Add real domain modules such as `auth`, `users`, `departments`, `admissions`, and `notices`
- Add schema validation per route
- Add MongoDB models and repositories module-by-module
- Add tests and CI once runtime dependencies are installed cleanly
