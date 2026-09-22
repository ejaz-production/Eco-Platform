# Nayvilo — Good tech. Great days.

A Pakistan-focused ecommerce demo built with Next.js App Router, React, TypeScript and a separate Node.js/Express API. A tech-focused storefront with neutral surfaces, native system typography, compact mobile navigation, responsive product cards and skeleton loading states.

## Run locally

Requires Node.js 22+.

```sh
npm install
# Copy backend/.env.example to backend/.env
# Copy frontend/.env.example to frontend/.env.local
# Fill in your Supabase project URL and publishable key.
npm run dev
```

This workspace already has local environment files populated with the supplied public project configuration. The masked secret key was deliberately not treated as a usable credential. Environment files are ignored by Git.

- Store: http://localhost:3100
- User preview: http://localhost:3100/account?demo=1
- Admin preview: http://localhost:3100/admin
- Login/signup: http://localhost:3100/login
- API: http://localhost:4100/api/health

Ports 3100/4100 avoid existing applications on 3000/4000. Next.js proxies `/api/*` to Express, so browser API calls stay on the same origin.

## Included

- Homepage with editable multi-slide hero, category collections, featured products and editorial sections.
- Search, categories, sorting, budget filtering, product details, local wishlist and persistent shopping bag.
- PKR prices, Rs. 250 shipping below Rs. 5,000, Pakistani mobile validation and COD checkout.
- Supabase email signup/login, password recovery and Google OAuth client flow.
- User orders with delivery timeline, order-derived addresses and profile editing.
- Admin overview, order status editing, product name/price/stock editing, banner editing and customer list derived from orders.
- Public demo dashboards, clearly marked as previews. Demo admin edits only affect the current in-memory browser preview; they never call privileged endpoints.
- Server-verified JWTs using `@supabase/server`, fresh Supabase user checks and authorization from **app_metadata.role**, never user-editable profile metadata.
- Local WebP demo photography with responsive Next Image optimization and native Apple/Windows system fonts.

## Google sign-in (configured)

Google OAuth is enabled in Supabase project `vbclzqtgqqxjnixejxoc`. Google Cloud project `just-sunrise-509317-r8` (Ejaz Store) contains the Web application client `Store Web - Supabase`. Its secret is stored in Supabase provider configuration, not in this repository.

- Google redirect URI: `https://vbclzqtgqqxjnixejxoc.supabase.co/auth/v1/callback`.
- JavaScript origin: `http://localhost:3100`.
- Supabase Site URL: `http://localhost:3100`.
- Supabase redirect allowlist: callback paths (including query strings) and password reset paths on `http://localhost:3100` and `http://192.168.100.213:3100`.
- Google app remains in Testing mode; the owner business account is added as a test user. Complete branding and production publishing before public launch.
- End-to-end verified on 2026-09-21: Continue with Google → account selection/consent → authenticated `/account` dashboard. Public auth settings also report Google enabled.
- For launch, add the actual HTTPS application URLs, update branding, and remove development URLs when no longer needed. Update LAN redirect URLs if the computer's IP changes.

Reference: https://supabase.com/docs/guides/auth/social-login/auth-google
## Real administrator access

Only users with `app_metadata.role = "admin"` may call `/api/admin/*`. Assign this using a trusted Supabase administrator context (dashboard or server-side Admin API), never through user metadata or browser code. No administrator is automatically created. Sign in again after a role change. The supplied secret key was redacted; no Supabase Admin API credentials are stored in this project.

## Demo storage and limits

The catalog is seeded from `backend/src/catalog.js`. Orders and real admin edits persist atomically in `backend/data/store.json`. A serialized write queue protects same-process stock updates. Supabase is used for identity; **commerce tables have not been created in Supabase**. This is intentional for the requested dummy-data phase. The local store is for one API process, not a production database or horizontally scaled deployment.

Live checkout requires an actual authenticated user. It creates a local demo order only: no money is collected, no courier is booked, no notification is sent and nothing is shipped. Admin preview sample orders are separate from actual local demo orders. Wishlist/cart stay in the browser; addresses are derived from past orders rather than a standalone address book.

Before launch: migrate commerce storage to PostgreSQL with transactional inventory updates and RLS, add payment/courier integrations, finalized returns/support policies, production monitoring, and a real product catalog. Product variants, product deletion and payment gateways are not implemented. Authenticated administrators can create/edit products and upload images/videos. Uploaded media is stored under backend/data/media and must be retained with store.json on deployment. Images are checked and converted to WebP (up to 1920px); supported videos are served with byte-range support and lazy playback. Videos are not transcoded; use browser-compatible H.264 MP4 or VP8/VP9 WebM. This single-server storage is not a production CDN.

## Validation

```sh
npm run typecheck
npm test
npm run build
```

Backend tests cover trusted catalog pricing, shipping thresholds, duplicate-line stock checks, unknown products and invalid checkout data. Production frontend: run `npm run start -w frontend` after build, with `npm run start -w backend` in another terminal.

## Assets

Category banners now use twelve transparent PNG product collages hosted on Cloudinary. The homepage includes every catalog category, and filtered shop pages display the corresponding banner. CDN URLs and banner copy live in `shared/category-banners.json`; generation details are in `docs/category-banner-assets.md`. The desktop and mobile carousel has one slide per category plus two desktop side posters (26 banners total; admin limit 30).

Set the server-only `CLOUDINARY_URL` in `backend/.env` to send new authenticated admin image/video uploads to Cloudinary. Never add it to frontend environment variables. With Cloudinary configured, upload validation uses temporary files that are removed after completion; original media is not retained in the project. Existing local media URLs remain supported. This checkout did not include the previously uploaded product photographs or real Supabase environment files; restore those separately to enable the existing product photography and login.

Demo product/editorial photos originate from Unsplash, with original photo IDs retained in filenames and seed data. They are illustrative and must be replaced with actual catalog photography before launch. Font licenses are in `frontend/public/fonts/`.

Mobile storefront uses its own vertically composed poster, compact category grid and native system typography. Brand: Nayvilo. Hostinger showed nayvilo.com available on 2026-09-21; it has not been purchased or reserved.

## Commerce UX update

- Sticky desktop/mobile header; mobile navigation includes a protected /orders page with login return.
- Buy Now goes directly to /checkout?buy=PRODUCT_ID&qty=N without adding to or clearing the existing cart. The server remains authoritative for stock and pricing.
- Separate mobile and desktop banner lists; desktop has a main carousel and two independently editable side posters. Slides support upload, order, activation, text and internal links.
- Admin product creation includes up to 12 images/videos, cover ordering, alt descriptions and a gallery preview. Uploads require an authenticated administrator, enforce file size/type checks, and never grant admin rights from user metadata.
- Hero cutouts are generated illustrative assets in frontend/public/images/hero-*.png; product photographs remain illustrative.
- Validation: build/typecheck, 8 backend tests, desktop/mobile overflow and sticky header, Buy Now cart preservation/login return, Orders sign-in gate, demo product creation, banner targeting, lazy video playback and stop-on-gallery-switch.

### Admin workspace and activity
Admin sections have direct URLs under `/admin`: orders, products, content, customers, events. Storefront chrome is excluded. Desktop navigation stays fixed; mobile uses a menu and product/order/customer cards. Existing Supabase `app_metadata.role=admin` authorization protects all private endpoints; the UI remains a demo until an authorized account is provisioned.

Public shopping activity is sent to POST `/api/events`; GET `/api/admin/events?days=7` requires admin authentication. Records use server timestamps and retain up to 20,000 events / 30 days in `backend/data/events.json`. Metrics include views, control clicks, browser-tab sessions, active time, device, and browser time zone. Time zone is not verified city geolocation. No form values, query strings, IP addresses or private account/checkout/admin routes are tracked. DNT is respected. This first-party local analytics is approximate and public ingestion can include bots; production scale needs durable analytics storage and stronger abuse handling. Data begins at installation; no historical traffic is fabricated.
