# D.O.M. Event Agency Website

## Overview

This is a premium event agency website for D.O.M. Event Agency based in Latvia. The application features a multilingual marketing website with an integrated e-commerce shop for merchandise and gift cards. The site showcases the agency's services, team, and portfolio while providing administrative capabilities for product and order management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: React Context API for language and cart state, TanStack Query for server state
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS v4 with custom theme configuration
- **Animations**: Framer Motion for page transitions and micro-interactions
- **Build Tool**: Vite with custom plugins for Replit integration

### Backend Architecture

- **Runtime**: Node.js with Express.js
- **Language**: TypeScript compiled with tsx for development
- **API Design**: RESTful endpoints under `/api/` prefix
- **Authentication**: Basic auth for admin panel (password-based via environment variable)
- **Build System**: esbuild for production bundling with selective dependency inlining

### Data Storage

- **Database**: PostgreSQL (works with any PostgreSQL 14+ server)
- **ORM**: Drizzle ORM with type-safe schema definitions
- **Schema Location**: `shared/schema.ts` contains all table definitions
- **Migrations**: Drizzle Kit for schema synchronization (`db:push` command)
- **Driver**: node-postgres (pg) for standard PostgreSQL connections

### Key Data Models

- **Users**: Admin authentication
- **Products**: Merchandise with multilingual support (LV/RU/EN), digital product capabilities
- **Delivery Options**: Shipping methods with multilingual names
- **Orders & OrderItems**: E-commerce order tracking

### Internationalization

- Three languages supported: Latvian (lv), Russian (ru), English (en)
- Translation system in `client/src/i18n/translations.ts`
- Language context provides `t()` helper function for string lookup
- Products have separate fields for each language variant

### Project Structure

```
├── client/           # Frontend React application
│   ├── src/
│   │   ├── components/   # UI components
│   │   ├── context/      # React contexts (Language, Cart)
│   │   ├── pages/        # Route pages (Home, Shop, Admin)
│   │   ├── i18n/         # Translation files
│   │   └── lib/          # Utilities and query client
├── server/           # Backend Express application
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Database operations
│   └── db.ts         # Database connection
├── shared/           # Shared code between client/server
│   └── schema.ts     # Drizzle database schema
└── migrations/       # Database migrations
```

## External Dependencies

### Database
- **Neon PostgreSQL**: Serverless Postgres database
- **Connection**: Via `DATABASE_URL` environment variable
- **Driver**: `@neondatabase/serverless` for HTTP-based queries

### Authentication
- **Admin Access**: Protected by `ADMIN_PASSWORD` environment variable
- **Method**: HTTP Basic Authentication for admin routes

### UI/UX Libraries
- **Radix UI**: Accessible component primitives
- **Framer Motion**: Animation library
- **Embla Carousel**: Carousel functionality
- **Lucide React**: Icon library

### Development Tools
- **Vite**: Development server with HMR
- **Replit Plugins**: Dev banner, cartographer, runtime error overlay
- **Drizzle Kit**: Database schema management

## Recent Changes (January 2026)

### Admin Panel Implementation
- Full CRUD operations for products (including digital products with file URLs)
- Delivery options management with multilingual support
- Orders management with status updates (pending, paid, shipped, delivered, cancelled)
- Basic Auth security with ADMIN_PASSWORD environment variable (required)
- Session-based password storage (sessionStorage for security)
- Zod validation on all API routes including PATCH operations

### Shop Integration
- Shop page now fetches real products from database
- Multilingual product names and descriptions (LV/RU/EN)
- Discount pricing support with original/sale price display
- Digital product indicators and handling
- Cart integration with proper language-aware product names

### Stripe Integration Placeholders
- `/api/stripe/webhook` - Placeholder for webhook handling
- `/api/stripe/create-checkout-session` - Placeholder for checkout session creation
- Ready for user to implement their own Stripe API calls

## VPS Deployment

The project is configured for self-hosting on VPS servers. See `DEPLOY.md` for full instructions.

### Quick Start
```bash
cp .env.example .env   # Copy and edit environment variables
npm install            # Install dependencies
npm run db:push        # Setup database tables
npm run build          # Build for production
npm run start          # Start server
```

### Required Environment Variables
- `DATABASE_URL` - PostgreSQL connection string
- `ADMIN_PASSWORD` - Admin panel password
- `SESSION_SECRET` - Session encryption key

### Docker Deployment
```bash
docker-compose up -d
```

## Admin Access

Access admin panel at `/admin`. Requires `ADMIN_PASSWORD` environment variable to be set.
- Username: `admin`
- Password: Value of `ADMIN_PASSWORD` env var

## API Endpoints

### Public
- `GET /api/products` - Active products
- `GET /api/products/:id` - Single product
- `GET /api/delivery-options` - Active delivery options
- `POST /api/orders` - Create order
- `GET /api/orders/:id` - Get order details

### Admin (requires Basic Auth)
- `GET /api/admin/auth` - Verify authentication
- `GET/POST/PATCH/DELETE /api/admin/products` - Product management
- `GET/POST/PATCH/DELETE /api/admin/delivery-options` - Delivery option management
- `GET/PATCH /api/admin/orders` - Order management