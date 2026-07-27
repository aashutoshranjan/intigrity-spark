# Deployment Guide — Ubuntu 24.04 VPS

Production stack: **Node.js 22+ · Nitro Node server · PM2 · Nginx reverse proxy · Let's Encrypt SSL**.
No platform-specific (Cloudflare / Vercel / Netlify) configuration is used.

---

## 1. Server prerequisites

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y curl git nginx

# Node.js 22 LTS
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
node -v   # v22.x

# PM2
sudo npm install -g pm2
```

## 2. Get the code

```bash
sudo mkdir -p /var/www && cd /var/www
git clone <your-repo-url> intigrityfactor
cd intigrityfactor
```

## 3. Environment variables

```bash
cp .env.example .env
nano .env
```

```env
PORT=3020
HOST=0.0.0.0
SITE_URL=https://yourdomain.com
VITE_SITE_URL=https://yourdomain.com
```

`VITE_SITE_URL` is baked into the client bundle at build time — set it **before** building.
`PORT` / `HOST` / `SITE_URL` are read by the Node server at runtime.

## 4. Install & build

```bash
npm install
npm run build
```

Output: `.output/server/index.mjs` (server) and `.output/public/` (static assets, served by the Node server).

## 5. Start with PM2

```bash
mkdir -p logs
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup      # run the printed command to enable boot persistence
pm2 status
pm2 logs intigrityfactor
```

Verify locally:

```bash
curl -I http://127.0.0.1:3020
```

## 6. Nginx reverse proxy

```bash
sudo cp nginx.conf.example /etc/nginx/sites-available/intigrityfactor
sudo nano /etc/nginx/sites-available/intigrityfactor   # replace yourdomain.com
sudo ln -s /etc/nginx/sites-available/intigrityfactor /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl reload nginx
```

## 7. DNS + SSL (Let's Encrypt)

Point an `A` record for `yourdomain.com` and `www` at your VPS IP, then:

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
sudo systemctl status certbot.timer   # auto-renewal
```

## 8. Firewall

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

---

## Updating the app

```bash
cd /var/www/intigrityfactor
git pull
npm install
npm run build
pm2 restart intigrityfactor
```

## Replacing the payment QR code

Replace the image file — **no code changes needed**:

```bash
cp /path/to/new-qr.png /var/www/intigrityfactor/public/qr-code.png
npm run build && pm2 restart intigrityfactor
```

If the file is missing, the payment page shows a **“QR Code Not Available”** placeholder in the
same size and styling as the QR image. You can also point `VITE_QR_CODE_URL` at a different path.

## Static assets

All public assets (`qr-code.png`, `favicon.ico`, `robots.txt`) live in `public/` and are served from
`.output/public` at the site root using relative paths — they work on any domain.

## Troubleshooting

| Symptom | Fix |
| --- | --- |
| `node .output/server/index.mjs` exits immediately with code 0 | The build produced a serverless (fetch-handler) bundle instead of a Node server. Make sure `NITRO_PRESET` is **unset** (or set to `node-server`), delete `.output`/`dist`, and rebuild. The project pins the `node-server` preset in `vite.config.ts`. |
| `pm2 status` shows `errored` | `pm2 logs intigrityfactor` — usually a missing `npm run build` |
| 502 Bad Gateway | Node app not running or `PORT` mismatch between `.env` and Nginx `proxy_pass` |
| Assets 404 | Rebuild (`npm run build`) so `.output/public` is regenerated |
| Wrong OG/canonical URLs | `VITE_SITE_URL` was not set at build time; set it and rebuild |

A healthy start prints `➜ Listening on: http://0.0.0.0:3020/` and stays in the foreground.

