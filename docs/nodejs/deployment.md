---
title: "Node.js Deployment"
sidebar_position: 39
---

# Node.js Deployment

## Before you deploy

- Use `process.env.PORT` for the port.
- Keep secrets in environment variables.
- Add a start script: `"start": "node app.js"`.
- Add `node_modules` and `.env` to `.gitignore`.

```javascript
const port = process.env.PORT || 3000;
app.listen(port);
```

## Keep it running with PM2

```
npm install -g pm2
pm2 start app.js --name my-app
pm2 list
pm2 logs
pm2 restart my-app
pm2 startup
pm2 save
```

## Where to host

- **Render**, **Railway**, **Fly.io** and **Vercel**: easy for beginners (connect your GitHub repository).
- **A VPS** (DigitalOcean, AWS, Hetzner): more control, more work.

## Basic steps on a VPS

1. Install Node.js.
2. Copy your project (with `git clone`).
3. Run `npm install --production`.
4. Start it with PM2.
5. Put **Nginx** in front, and add free HTTPS with Let's Encrypt.
