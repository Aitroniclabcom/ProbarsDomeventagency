# VPS Deployment Guide - D.O.M. Event Agency

## Prerequisites

- Node.js 20+ installed
- PostgreSQL database (local or remote)
- npm or yarn package manager

## Step 1: Clone and Install

```bash
# Clone the repository
git clone <your-repo-url>
cd dom-event-agency

# Install dependencies
npm install
```

## Step 2: Configure Environment Variables

```bash
# Copy the example environment file
cp .env.example .env

# Edit the .env file with your values
nano .env
```

### Required Environment Variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@localhost:5432/domdb` |
| `ADMIN_PASSWORD` | Password for /admin panel (username: admin) | `YourSecurePassword123` |
| `SESSION_SECRET` | Random string for session encryption | `openssl rand -base64 32` |
| `PORT` | Server port (optional, default 5000) | `5000` |

## Step 3: Setup Database

```bash
# Push the database schema
npm run db:push
```

This will create all necessary tables in your PostgreSQL database.

## Step 4: Build for Production

```bash
# Build the application
npm run build
```

This creates optimized production files in the `dist/` folder.

## Step 5: Start the Server

```bash
# Start in production mode
npm run start
```

The server will run on port 5000 (or your configured PORT).

## Production Setup with PM2

For production, use PM2 to keep the app running:

```bash
# Install PM2 globally
npm install -g pm2

# Start the application
pm2 start npm --name "dom-agency" -- run start

# Save PM2 process list
pm2 save

# Setup PM2 to start on boot
pm2 startup
```

## Nginx Reverse Proxy (Recommended)

Create `/etc/nginx/sites-available/dom-agency`:

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/dom-agency /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## SSL with Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

## Admin Panel Access

After deployment, access the admin panel at:
- URL: `https://yourdomain.com/admin`
- Username: `admin`
- Password: Your `ADMIN_PASSWORD` value

## Troubleshooting

### Database Connection Issues
- Ensure PostgreSQL is running: `sudo systemctl status postgresql`
- Check DATABASE_URL format
- Verify network connectivity to database server

### Port Already in Use
- Change PORT in .env file
- Or stop conflicting service: `sudo lsof -i :5000`

### Build Errors
- Clear node_modules: `rm -rf node_modules && npm install`
- Check Node.js version: `node --version` (need 20+)
