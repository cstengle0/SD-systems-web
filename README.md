# SD Systems — Static Site (GitHub Pages ready)

This repository contains the SD Systems marketing site. It runs as plain static files (no build step) and is ideal for GitHub Pages.

## Quick deploy
1. Create a new GitHub repo (e.g., `sd-systems-site`) under `cstengle0`.
2. Upload all files in this folder at the repo root.
3. GitHub → **Settings → Pages** → Source: **Deploy from a branch**, Branch: **main** (root).

## Custom domain
- The `CNAME` file is set to `sd2.systems`.
- In **Cloudflare DNS** for `sd2.systems` (Registrar: Cloudflare):
  - `CNAME` **@** → `cstengle0.github.io`  (Cloudflare will flatten at apex)
  - `CNAME` **www** → `cstengle0.github.io`
- If HTTPS validation stalls, temporarily set those records to **DNS-only**, wait for the certificate in GitHub Pages, then re-enable proxy (orange cloud).

## Editing content
Update the content in `script.js` inside the functions:
- `renderHome()` / `renderAbout()` / `renderProducts()` / `renderPeople()` / `renderContact()`
You can edit these directly in GitHub’s web editor and the site will redeploy automatically.

## Email
Site links use `hello@sd2.systems`. Set up an inbox (e.g., Fastmail/Zoho/GWS) or use Cloudflare Email Routing to forward to your preferred address.
