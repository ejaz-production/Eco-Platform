# Free-host deployment

Target: Netlify Next.js frontend + Render Node/Express Free + existing Supabase + Cloudinary.
Vercel Hobby is restricted to non-commercial personal projects; use Vercel Pro if choosing Vercel for this store. Netlify Free permits commercial projects, but monthly credits can pause the site when exhausted.

## 1. Database
Run `backend/migrations/001_durable_state.sql` in the existing Supabase project. RLS and revoked anon/authenticated grants keep commerce data backend-only. Put the existing Supabase secret/service-role key only in Render's `SUPABASE_SECRET_KEY`.

The initial low-volume persistence adapter uses two JSONB snapshots, one for catalog/orders and one for bounded analytics. Revision-based compare-and-swap protects concurrent inventory updates across processes. This is durable but not a normalized, high-volume commerce schema; split tables and transactional RPCs before scaling.

The hosted catalog seeds only when the database is empty. Existing local orders/uploads are not automatically published. Review and migrate local data separately before accepting real orders. Never deploy private customer JSON in Git.

## 2. Render
Import this repository using `render.yaml` (repository root, main branch). Select Free, no paid resources. Set the prompted environment variables. `FRONTEND_URL` must be the exact Netlify HTTPS origin. Cloudinary credentials must refer to the existing p76rvfxz media account. The server intentionally refuses production startup without durable storage and cloud uploads.

Render supplies PORT. Startup does not require an uploaded `.env` file. Check `/api/health` and `/api/products` after deploy. The former confirms process health; products additionally verifies database access.

## 3. Netlify
Import repository, main branch. Base directory: repository root. Package directory: `frontend`. Build: `npm run build -w frontend`. Publish: `frontend/.next`. Use Node 22.16+. The native Next.js adapter handles server rendering; do not use a static export.

Environment variables:
- `API_URL=https://ACTUAL-API.onrender.com` (server-side API + rewrites)
- `NEXT_PUBLIC_API_URL=https://ACTUAL-API.onrender.com` (direct admin uploads)
- `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` (existing project public values)

Never add SUPABASE_SECRET_KEY or CLOUDINARY_URL to Netlify/frontend. Redeploy frontend after changing build-time variables.

## 4. Authentication and launch checks
Set Supabase Site URL to actual frontend HTTPS origin; allow exact `/auth/callback**` and `/auth/reset` URLs. Add the frontend origin in Google's OAuth client; keep the Supabase callback URI unchanged. Review/publish Google's testing app for public sign-in when ready.

Verify public catalog, real admin login, product/banner edits surviving API restart, Cloudinary upload, customer sign-in, checkout server pricing, orders and events permissions. Existing catalog and policies remain illustrative until replaced by the owner. A live deployment is not evidence of fulfilled shipping or real product stock.

## 5. Sleep mitigation
Optional workflow template `docs/workflows/api-health.yml`: copy to `.github/workflows/api-health.yml` once GitHub workflow write access is available, then set repository variable `RENDER_HEALTH_URL=https://ACTUAL-API.onrender.com/api/health`, enable Actions, and run it once. It checks every ten minutes and can reduce idle spin-down; scheduled Actions may be delayed or disabled and consume private-repository minutes. It is not an uptime guarantee. Free Render still restarts, has usage limits and can cold-start. No paid service is created.

Public catalog fetch timeout tolerates up to 65 seconds of API cold-start; frontend host request limits can still apply. For dependable fast commercial checkout use an always-on paid API when budget permits.
