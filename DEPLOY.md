# VPS Deployment Guide — D.O.M. Event Agency

## Server Requirements
- Ubuntu 20.04+
- Node.js 20+
- PM2
- Nginx
- Certbot (Let's Encrypt)

## Initial Server Setup

### 1. Install Node.js 20
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 2. Install PM2
```bash
sudo npm install -g pm2
```

### 3. Install Nginx
```bash
sudo apt update
sudo apt install nginx
```

### 4. Install Certbot
```bash
sudo apt install certbot python3-certbot-nginx
```

### 5. Clone repository
```bash
sudo mkdir -p /var/www/domeventagency
sudo chown $USER:$USER /var/www/domeventagency
git clone https://github.com/YOUR_REPO /var/www/domeventagency
cd /var/www/domeventagency
```

### 6. Create .env.local
```bash
cp .env.example .env.local
nano .env.local
# Fill in all values
```

### 7. Install dependencies
```bash
npm install --legacy-peer-deps
```

### 8. Run migrations
```bash
export PATH="$(pwd)/node_modules/.bin:$PATH"
export PAYLOAD_CONFIG_PATH=payload.config.ts
cross-env NODE_OPTIONS=--no-deprecation npx tsx node_modules/payload/bin.js migrate
```

### 9. Build
```bash
npm run build
```

### 10. Start with PM2
```bash
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup
# Run the command that PM2 outputs
```

### 11. Configure Nginx
```bash
sudo cp nginx/domeventagency.conf /etc/nginx/sites-available/domeventagency
sudo ln -s /etc/nginx/sites-available/domeventagency /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 12. SSL Certificate
```bash
sudo certbot --nginx -d domeventagency.com -d www.domeventagency.com
```

## Updating (after initial setup)
```bash
cd /var/www/domeventagency
bash scripts/deploy.sh
```

## Useful Commands
```bash
pm2 status              # Check app status
pm2 logs domeventagency # View logs
pm2 restart domeventagency # Restart app
sudo nginx -t           # Test nginx config
sudo systemctl reload nginx # Reload nginx
```
