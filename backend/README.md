# Backend Application

This folder contains the modular backend scaffold for the UAMC platform.

## Stack

- Node.js
- Express
- MongoDB with Mongoose
- TypeScript

## Structure

```text
backend/
├── src/
│   ├── app.ts
│   ├── server.ts
│   ├── common/
│   ├── config/
│   ├── modules/
│   └── routes/
├── .env.example
├── package.json
└── tsconfig.json
```

## Module Strategy

Each feature should get its own module folder with:

- route file
- controller file
- service file

This keeps features isolated while allowing a single mother router to mount all module routers centrally.

## Run

From inside this folder:

```bash
npm install
npm run dev
```

## Environment

Copy `.env.example` to `.env` and set:

- `PORT`
- `CLIENT_ORIGIN`
- `MONGODB_URI`

## Documentation

Backend documentation is kept in the root [docs](D:/Xtra/UAMC/docs) folder for centralized access.
See [docs/backend-setup.md](D:/Xtra/UAMC/docs/backend-setup.md:1) and [docs/architecture.md](D:/Xtra/UAMC/docs/architecture.md:1).
