# Variable Products (Multiple Price Options) — Design

**Date:** 2026-06-17
**Repo:** Aitroniclabcom/ProbarsDomeventagency (Next.js 16 + Payload, headless WooCommerce)
**Status:** Design — pending user review before planning

## Problem

The storefront only renders WooCommerce **simple** products. The gift card
("Dāvanu karte") currently exists as a single simple product (`id 41`, €25, one
image); the €50/€100 options were removed because there was no way to offer
multiple price options on one product card. We need the frontend to support
**variable products**: one product card where the customer selects a price
option (gift card €25/€50/€100), each option with its own price and optional
image.

The WooCommerce data model is **likely** variable but is pending confirmation
with the client. Therefore this work ships the **frontend capability** first; it
must degrade cleanly to today's behavior for simple products (no regression),
and "go live" the moment a variable product exists in WooCommerce.

## Goals / Non-goals

**Goals**
- Render variable products with a price-option selector on the product page.
- Support per-variation images (even if not all variations have one yet) plus
  the shared product gallery.
- Carry the selected variation through cart → checkout so WooCommerce charges
  the correct price.
- Zero behavior change for existing simple products.

**Non-goals**
- Customer-entered custom amounts (would need a WC add-on plugin).
- Multi-attribute variations (e.g. size × color). Initial support targets a
  single attribute (the amount); the model should not preclude more later but we
  won't build a full attribute matrix UI now.
- Converting the live €25 gift card. A **separate** variable gift card product is
  created for build-out and testing; the client decides if/when the live catalog
  changes.

## Current architecture (as found)

- **Fetch:** `lib/woocommerce/store-api.ts` → `fetchProductBySlug` uses the WC
  Store API, falling back to REST v3 (`rest-v3-products.ts`, authed with
  `WOOCOMMERCE_CONSUMER_KEY/SECRET`, multi-root + HTML-detection).
- **Map:** `mappers.ts` `mapWCProductToFrontend` → `FrontendProduct`
  (`type: "simple"` is implicit; price is a single number).
- **Product page:** `app/(frontend)/shop/[slug]/page.tsx` — client component,
  react-query, fixed price + gallery thumbnails, qty stepper, add-to-cart.
- **Cart:** `context/CartContext.tsx` — client-only, localStorage, keyed by
  `product.id` for dedup/remove/update. `components/CartDrawer.tsx` renders by
  `item.id`.
- **Checkout:** `app/(frontend)/checkout/page.tsx` builds
  `lineItems: [{ id, quantity }]` → POST `/api/checkout` →
  `app/api/checkout/route.ts` maps to `{ product_id, quantity }` and creates a
  WC REST order (no variation/price passed).

## Design

### 1. Types & mapper — `lib/woocommerce/mappers.ts`
- Extend `WCStoreProduct`: `type?: "simple" | "variable"`, `variations?` (Store
  API variation refs).
- New `FrontendVariation`:
  `{ id: string; label: string; attributes: Record<string,string>; price: number; regularPrice: number; salePrice: number | null; image: string | null; stockStatus: FrontendProduct["stockStatus"] }`.
- Extend `FrontendProduct`:
  - `type: "simple" | "variable"` (default `"simple"`).
  - `priceRange: { min: number; max: number } | null` (null for simple).
  - `variations: FrontendVariation[]` (empty for simple).
  - Keep `price` as the "from"/min price for variable products so existing
    price displays keep working.
- Add `mapWCVariationToFrontend(raw)` (handles minor-unit and flat REST v3 price
  shapes, same as the product mapper). `label` derived from the variation's
  attribute value (e.g. "50 €").

### 2. Data layer — `rest-v3-products.ts` + `store-api.ts`
- Add `fetchVariationsViaWooRestV3(parentId)` → `GET /wc/v3/products/{id}/variations`
  reusing the existing key/secret, `getWooCommerceStoreRootCandidates()`, and
  HTML/non-JSON guards.
- In `fetchProductBySlug`: after mapping the parent, if
  `type === "variable"` (or variations are referenced), fetch + attach mapped
  `variations` and compute `priceRange`.
- Shop grid (`fetchProducts` / `/api/products`) stays light — no per-product
  variation fetch; the card shows the "from" price / range only.

### 3. Product detail page — `app/(frontend)/shop/[slug]/page.tsx`
- Detect `product.type === "variable"`.
- Render an option selector: one button per `variation` (label = amount).
  Selecting a variation sets active price, swaps the main image to the
  variation image when present (else keeps gallery selection), and sets stock.
- Price header shows the range ("From €25") until an option is selected.
- "Add to cart" disabled until a variation is selected; on add, pass
  `variationId` + `variationLabel` into the cart product.
- Simple-product path unchanged.

### 4. Cart — `context/CartContext.tsx` + `components/CartDrawer.tsx`
- Add optional `variationId?: string` and `variationLabel?: string` to `Product`.
- Introduce a composite line key:
  `lineId = variationId ? \`${id}:${variationId}\` : id`.
  Switch `addToCart` dedup, `removeFromCart`, `updateQuantity`, drawer `key`s and
  `data-testid`s from `id` to `lineId`.
- Drawer shows `variationLabel` under the product name.

### 5. Checkout — `checkout/page.tsx` + `app/api/checkout/route.ts`
- Checkout page: include `variationId` in each `lineItem`.
- Route: map to `{ product_id: Number(id), quantity, ...(variationId ? { variation_id: Number(variationId) } : {}) }`.
  WooCommerce then prices the line from the variation.

### 6. WooCommerce setup (separate variable gift card)
- Create a **new** variable gift card product (not the live €25 one): attribute
  "Vērtība" with values 25/50/100 €, three variations with prices, optional
  per-variation image + product gallery.
- Done via **WP admin driven by Playwright Chrome** (preferred over WP-CLI for
  this). Kept in the catalog for testing; client decides on live rollout.

## Error handling / edge cases
- Variation fetch failure → product still renders; selector shows a soft error
  and add-to-cart stays disabled (no crash, no wrong price).
- Variable product with zero variations → treated like out-of-stock/unavailable
  for purchase.
- Out-of-stock individual variation → its button disabled.
- Mixed cart (simple + variation lines) → composite key keeps them distinct;
  totals unaffected.
- Legacy carts in localStorage (no `variationId`) keep working — `lineId` falls
  back to `id`.

## Testing
- `next build` / typecheck passes.
- Playwright (Chrome) drives WP admin to create the variable gift card, then the
  storefront: selector renders 3 options, image swaps per variation, two
  different amounts produce two distinct cart lines, checkout creates a WC order
  whose line item carries the correct `variation_id` and price.

## Sequencing / git
1. **Merge PR #1** (`fix/shop-images-gallery`, verified live) — user approved.
2. Locally: `git checkout main && git pull`; create feature branch
   `feat/variable-products`.
3. Commit this spec on the feature branch (kept out of PR #1).
4. Implement per plan; open PR #2.
5. Deploy per the standard manual VPS flow after review.

## Open items
- Confirm with the client whether the live gift card becomes variable (drives
  whether step 6's product replaces `id 41` or stays separate).
