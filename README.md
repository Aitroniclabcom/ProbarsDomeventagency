# Probars / D.O.M. Event Agency — Next.js + Payload CMS

A full-stack event agency platform with **Next.js 15** App Router, **Payload CMS v3** (integrated), **WooCommerce** shop integration, and **Turborepo** monorepo structure.

---

## Architecture

```
/
├── apps/
│   └── web/              Next.js 15 + Payload CMS v3 (integrated)
│       ├── app/
│       │   ├── (payload)/ admin UI at /admin
│       │   ├── api/      API routes + revalidation webhook
│       │   ├── shop/     WooCommerce product pages
│       │   └── [slug]/   Dynamic CMS pages
│       ├── collections/  Payload collection definitions
│       ├── globals/      Payload global definitions
│       ├── blocks/       Payload block type configs
│       ├── components/   React components
│       ├── lib/          Utilities (Payload API, WooCommerce)
│       └── payload.config.ts
├── packages/
│   └── ui/               Shared shadcn/ui components
├── turbo.json
├── package.json          Root workspace
└── pnpm-workspace.yaml
```

---

## Prerequisites

- **Node.js 18+**
- **pnpm 9+** (`npm i -g pnpm`)
- **MongoDB Atlas** (free tier, used by Payload)
- **WooCommerce store** with REST API keys

---

## Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/Aitroniclabcom/Probars.git
cd Probars
pnpm install
```

### 2. Environment Variables
```bash
cp apps/web/.env.example apps/web/.env.local
```

Edit `apps/web/.env.local` and set:
- `MONGODB_URI` — MongoDB Atlas connection string
- `PAYLOAD_SECRET` — 32+ character random secret
- `WOOCOMMERCE_CONSUMER_KEY` / `WOOCOMMERCE_CONSUMER_SECRET` — From WooCommerce REST API
- `REVALIDATE_SECRET` — Random secret for cache webhooks

### 3. Generate Payload Types
```bash
pnpm payload generate:types
```

### 4. Start Development
```bash
pnpm dev
```

- **Web app**: http://localhost:3000
- **Payload admin**: http://localhost:3000/admin

---

## Key Features

### Payload CMS v3 (Integrated)
- **Pages** — Block-based page builder
- **Blocks** — Hero, RichText, Gallery, CTA, FAQ, Team
- **Navigation** — Global site navigation management
- **Media** — Image uploads with alt text
- **SiteSettings** — Site config, contact info, social links
- **Admin UI** — Built into Next.js at `/admin`

### WooCommerce Store
- **Product Listing** — `/shop` with filtering
- **Product Details** — `/shop/[slug]` individual pages
- **Cart & Checkout** — Full e-commerce flow
- **Store API** — Customer-facing REST endpoints

### Next.js 15
- **App Router** — File-based routing
- **React 19** — Latest features & optimizations
- **ISR** — Incremental Static Regeneration with cache tags
- **Image Optimization** — Next.js `<Image>` component

---

## Usage

### Creating Content in Payload

1. Go to http://localhost:3000/admin
2. Log in with credentials from first setup
3. **Pages** — Create block-based pages with slug (accessed via `/slug`)
4. **Media** — Upload images
5. **Navigation** — Configure site menu
6. **SiteSettings** — Global configuration

### Creating a New Page Block

1. Define block schema in `apps/web/blocks/YourBlock.ts`:
```typescript
import { Block } from 'payload'

export const YourBlock: Block = {
  slug: 'yourBlock',
  fields: [
    { name: 'title', type: 'text', required: true },
    // ... more fields
  ],
}
```

2. Create component in `apps/web/components/blocks/YourBlock.tsx`:
```typescript
export function YourBlock({ title, ...props }) {
  return <section>{title}</section>
}
```

3. Add to `payload.config.ts`:
```typescript
blocks: [HeroBlock, RichTextBlock, ..., YourBlock]
```

4. Restart dev server — block appears in Payload editor

### WooCommerce Integration

Products are fetched via `/lib/woocommerce/client.ts`. To add WooCommerce features:

1. Verify `WOOCOMMERCE_CONSUMER_KEY` and `WOOCOMMERCE_CONSUMER_SECRET` are set
2. Call WooCommerce API in `/shop` pages via `getProducts()`, `getProduct()`
3. Cart state managed via React Context (`contexts/CartContext.tsx`)

---

## Environment Variables

| Variable | Purpose | Required |
|---|---|---|
| `MONGODB_URI` | Payload CMS database | Yes |
| `PAYLOAD_SECRET` | CMS encryption key | Yes |
| `WOOCOMMERCE_URL` | WooCommerce site | Yes |
| `WOOCOMMERCE_CONSUMER_KEY` | WooCommerce API key | Yes |
| `WOOCOMMERCE_CONSUMER_SECRET` | WooCommerce API secret | Yes |
| `NEXT_PUBLIC_WOOCOMMERCE_URL` | Public WooCommerce URL | Yes |
| `REVALIDATE_SECRET` | ISR webhook secret | Yes |
| `NEXT_PUBLIC_SITE_URL` | Site domain | Yes |

---

## Deployment

### Vercel (Web App)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Vercel Dashboard:**
1. Connect GitHub repo
2. Set Root Directory to `apps/web` (or rely on `vercel.json`)
3. Add environment variables:
   - `MONGODB_URI`
   - `PAYLOAD_SECRET`
   - `WOOCOMMERCE_CONSUMER_KEY`
   - `WOOCOMMERCE_CONSUMER_SECRET`
   - `REVALIDATE_SECRET`
   - `NEXT_PUBLIC_WOOCOMMERCE_URL`
   - `NEXT_PUBLIC_SITE_URL`

### MongoDB Atlas

1. Create free cluster on [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create database user with read/write permissions
3. Whitelist IP range (use `0.0.0.0/0` for development)
4. Copy connection string → `MONGODB_URI`

---

## TypeScript

All code is fully typed. Payload types are auto-generated:

```bash
pnpm payload generate:types
```

Generated `/payload-types.ts` used for collections, globals, and blocks.

---

## Performance Optimizations

- **ISR with Cache Tags** — Pages revalidated on content changes
- **Image Optimization** — Next.js Image component with srcset
- **Database Indexes** — MongoDB indexes on frequently queried fields
- **CDN** — All static assets cached on Vercel Edge Network

---

## Troubleshooting

### "Cannot find module '@payload-types'"
```bash
pnpm payload generate:types
```

### Payload admin not loading
- Check `PAYLOAD_SECRET` is set
- Verify `MONGODB_URI` is valid and accessible
- Ensure MongoDB whitelist includes your IP

### WooCommerce products not showing
- Verify `WOOCOMMERCE_CONSUMER_KEY` and `WOOCOMMERCE_CONSUMER_SECRET`
- Ensure WooCommerce REST API is enabled
- Check products are published in WooCommerce admin

### Build fails with TypeScript errors
```bash
# Regenerate types and clear cache
pnpm payload generate:types
pnpm clean
pnpm build
```

---

## Development Tips

### Working with Cursor
- Open repo root in Cursor
- Each app has path aliases configured in `tsconfig.json`
- Type hints available for all Payload collections via `@payload-types`

### Local Testing
```bash
# Full build (as Vercel would do)
pnpm build

# Start production server
pnpm start
```

### Adding Environment Variables
1. Update `apps/web/.env.example` with new variable
2. Add to `apps/web/.env.local`
3. If it should be public (browser), prefix with `NEXT_PUBLIC_`

---

## File Structure

```
apps/web/
├── app/
│   ├── (payload)/admin/[[...segments]]/  Payload admin UI
│   ├── api/revalidate/                   ISR webhook
│   ├── shop/                             WooCommerce
│   ├── [slug]/page.tsx                   Dynamic CMS pages
│   ├── layout.tsx                        Root layout
│   └── globals.css                       Global styles
├── components/
│   ├── blocks/                           Content block components
│   ├── Navigation.tsx                    Header
│   ├── Footer.tsx                        Footer
│   └── ...
├── collections/                          Payload collection schemas
├── globals/                              Payload global schemas
├── blocks/                               Payload block configs
├── lib/
│   ├── payload.ts                        Payload API client
│   └── woocommerce/                      WooCommerce integration
├── public/                               Static assets
├── payload.config.ts                     Payload CMS config
├── next.config.ts                        Next.js config
├── tsconfig.json                         TypeScript config
└── .env.example                          Environment template
```

---

## Support & Resources

- [Payload Docs](https://payloadcms.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [WooCommerce REST API](https://woocommerce.com/document/woocommerce-rest-api/)
- [Turborepo](https://turbo.build)

---

## License

Proprietary — D.O.M. Event Agency
