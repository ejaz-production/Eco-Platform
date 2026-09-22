# Category banner assets

Created with the built-in image generation tool on 2026-09-22. Twelve 1536 × 1024 PNG compositions have genuine transparent alpha, verified before upload. These are illustrative catalog-inspired compositions; the checkout did not include original uploaded product photographs.

The authoritative asset URLs, category copy, alt descriptions and background colours are in `shared/category-banners.json`. Originals are hosted in Cloudinary under `nayvilo/category-banners/2026-09-22/`. No generated banner PNGs are kept in the repository. Homepage carousel, all twelve collection cards, category shop headers and the PC setup feature use these CDN assets.

## Generation prompt set

Common production direction: premium ecommerce product-mockup; photoreal studio product photography; landscape 3:2 PNG with genuinely transparent alpha background; isolated products only; no backdrop, floor, text, brands or watermark; fully visible products with transparent margins; balanced compact arrangement, precise edges and soft studio light.

| Category | Catalog-based subjects used in the prompt |
| --- | --- |
| Smartwatches | Silver square watch with orange sport band; round black mesh-band watch; rose-gold square watch with pink strap; spare silicone bands. |
| Toys | Blue camouflage toy fighter jet quadcopter; red RC racing car and controller; red big-wheel toy tractor; colourful magnetic blocks. |
| Audio | Black RGB wireless headphones; white earbuds in charging case; portable karaoke speaker and microphone; slim RGB soundbar. |
| Mobile Accessories | Folding wireless charging stand; silver phone stand; braided USB-C cable; wall adapter; RGB phone cooler. |
| Car Accessories | Automatic-clamping wireless car charger holder with vent clip; flexible RGB LED pixel panel. |
| Power Solutions | Slim rectangular power bank; silver magnetic power bank; capsule charger; folding wireless pad; short cable. |
| Home Decor | Galaxy projector; faceted ripple lamp; RGB neon rope; programmable LED panel with abstract pixel art. |
| Vlogging Setup | Ring light on short tripod; action camera; wireless lavalier microphones in charging case; handheld microphone handle. |
| Mounts & Stands | Phone tripod; articulated tabletop lifting bracket; folded tripod; motorcycle phone holder. |
| PC & Laptop | RGB keyboard; gaming mouse; laptop cooling pad; four-port USB hub. |
| POS Package | Portable thermal receipt printer with blank receipt; thermal paper rolls. |
| Gadgets | Yellow-and-white mini projector; mint handheld fan; E27 security camera; crystal moon lamp. |

## Hosting and upload behaviour

The backend reads `CLOUDINARY_URL` from its ignored `.env` file. The secret is never part of frontend code or the shared manifest. Admin uploads use Cloudinary when configured; temporary validation files are removed after upload. The legacy local-storage path remains available when Cloudinary is not configured, and existing `/api/media/` references remain supported.

The manual upload script is `backend/scripts/upload-category-banners.mjs`. It reads an ignored local source map at `backend/data/banner-sources.json`, validates alpha, uploads without overwriting existing public IDs, verifies CDN availability and saves each URL to the shared manifest. It skips completed uploads on retry.

Signing follows [Cloudinary's upload signature documentation](https://cloudinary.com/documentation/authentication_signatures).

## Local checkout limitations

The existing catalog references uploaded product photos under `backend/data/media/`, which were not present in this checkout. Cloudinary banner generation does not recreate these original product photos. Restore those original media files or upload replacements through the authenticated admin. Supabase login requires the user's real local environment configuration.
