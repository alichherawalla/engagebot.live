# Copilot/AI agent instructions for engagebot.live

Purpose: Enable AI coding agents to be productive quickly in this repo by following the established patterns, build/run workflows, and conventions.

## Big picture
- Monorepo split by concern:
  - `client/` React + TypeScript app (Vite, Tailwind). Built into `dist/public`.
  - `server/` Express + TypeScript API and web server. Bundled to `dist/index.js` (ESM via esbuild). Serves both API and SPA.
  - `shared/` Type-safe schemas and types for both sides (Drizzle ORM + Zod).
- Single runtime process serves everything on `PORT` (default 5000). Dev uses Vite middleware HMR via the Express server; prod serves prebuilt assets.
- Data: PostgreSQL via Neon serverless; Drizzle ORM models live in `shared/schema.ts`.

## How things talk to each other
- API routes: `server/routes.ts` uses Zod schemas from `@shared/schema` to validate, then calls `storage` (`server/storage.ts`) which abstracts persistence.
- Persistence: `DatabaseStorage` (default) uses Drizzle (`server/db.ts`). `MemStorage` exists for dev/tests but is not wired by default.
- Frontend calls REST endpoints under `/api/...` (see `server/routes.ts`). SPA routing is client-side (Wouter).
- SEO: HTML responses pass through meta tag injection:
  - `server/index.ts` sets `(req as any).metaData = await generateMetaTags(url, storage)`.
  - `server/vite-meta.ts` injects tags in dev; `serveStaticWithMeta()` injects in prod.

## Build, run, and DB
- Dev: `npm run dev` (tsx runs `server/index.ts`; Vite middleware serves client).
- Typecheck: `npm run check`.
- Production build: `npm run build` → outputs `dist/index.js` and `dist/public/`. Start with `npm start`.
- Optional static copy: `./build-production.sh` copies `server/public/{robots.txt,sitemap.xml,llms.txt,images/}` into `dist/public` if present.
- Drizzle migrations: `drizzle.config.ts` points to `shared/schema.ts`. Push schema with `npm run db:push` (requires `DATABASE_URL`).

## Environment and ports
- Required: `DATABASE_URL` (Neon Postgres). Missing var throws in `server/db.ts`.
- `PORT` is respected; defaults to 5000; binds `0.0.0.0`.
- WebSocket polyfill for Neon: `neonConfig.webSocketConstructor = ws` in `server/db.ts`.

## Conventions and patterns
- Path aliases (see `vite.config.ts` and `tsconfig.json`): `@` → `client/src`, `@shared` → `shared`, `@assets` → `attached_assets`.
- Validation-first: Use Zod schemas from `@shared/schema` in routes; return 400 with `error.errors` on `ZodError` (see blog/trial routes).
- Storage contract: Prefer calling methods on `storage` interface (e.g., `getPublishedBlogPosts`, `createTrialRequest`). Keep all DB details inside `DatabaseStorage`.
- Logging: `server/index.ts` times `/api/*` and logs JSON bodies (truncated). Use `log()` from `server/vite.ts`/`vite-meta.ts`.
- Meta tags: Extend `generateMetaTags()` to customize page-specific SEO. It detects `/blog/:slug`, `/blog`, `/pricing`, `/features`.

## Adding features (copy these patterns)
- New API route:
  1) Define/extend schema in `shared/schema.ts` (Drizzle + Zod). 2) In `server/storage.ts`, add methods on `IStorage` and implement in `DatabaseStorage`. 3) In `server/routes.ts`, `schema.parse(req.body|query)`, call `storage`, handle `ZodError` → 400; otherwise 5xx on unexpected.
- New client page: Create under `client/src/pages`, wire with Wouter, fetch from `/api/...` using TanStack Query, and style with Tailwind/shadcn.
- New SEO rules: Update `generateMetaTags()`; injection is automatic for HTML (non-`/api`, no file extension) requests.

## Gotchas
- Without `DATABASE_URL`, server fails on boot. For local no-DB prototyping, temporarily export `storage = new MemStorage()` in `server/storage.ts` (revert before commit if DB is required).
- Vite dev always reloads `client/index.html` from disk and appends a cache-busting param for `/src/main.tsx`.
- Static assets live in `client/public` at runtime (dist/public). If using `server/public`, ensure `build-production.sh` copies them.

## Key files
- `server/index.ts` (app init, error handling, SEO middleware, dev/prod serving)
- `server/routes.ts` (REST endpoints for blog + trial requests)
- `server/storage.ts` (IStorage, MemStorage, DatabaseStorage, exported `storage`)
- `server/db.ts` (Neon/Drizzle setup)
- `server/vite-meta.ts` (Vite middleware + SEO injection; prod static serving)
- `shared/schema.ts` (Drizzle tables + Zod schemas/types)
- `vite.config.ts`, `tsconfig.json` (aliases, build output)

Feedback wanted: If any workflow (tests, deploy target, static asset location) differs in your environment, or you want MemStorage toggling via env, tell me and I’ll update this doc and wire it up.
