# Open Frontier Website

A multi-page `Next.js + Tailwind` marketing site inspired by frontier AI product storytelling, designed to run locally with `docker compose` and be exposed through Cloudflare Tunnel.

## Pages

- `/`
- `/platform`
- `/research`
- `/news`
- `/about`

All pages are content-driven from `content/site/*.json`.

## Local Development

### Option A: npm

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

### Option B: docker compose

```bash
docker compose up --build web
```

Open `http://localhost:3000`.

## Cloudflare Tunnel

### 1) Quick temporary public URL (`trycloudflare`)

```bash
docker compose --profile quick up --build -d web tunnel-quick
```

Get the temporary URL:

```bash
docker compose logs --tail=200 tunnel-quick
```

Stop:

```bash
docker compose --profile quick down
```

### 2) Named tunnel for `openanthropic.com`

Prerequisites:

- Domain DNS is managed in Cloudflare.
- You have permission to create tunnels and DNS routes.

Setup credentials (host machine):

```bash
cloudflared tunnel login
cloudflared tunnel create openanthropic-web
cloudflared tunnel route dns openanthropic-web openanthropic.com
```

Then copy generated credential JSON to `./cloudflared/` and update `cloudflared/config.yml`:

- `tunnel: <your-tunnel-id>`
- `credentials-file: /etc/cloudflared/<your-tunnel-id>.json`

Run named tunnel profile:

```bash
docker compose --profile named up --build -d web tunnel
```

Verify:

- `https://openanthropic.com` should resolve to your local site through tunnel.

## Content Editing

- Navigation: `content/site/nav.json`
- Page content: `content/site/home.json`, `platform.json`, `research.json`, `news.json`, `about.json`

## Build checks

```bash
npm run typecheck
npm run build
```

## Notes

- This implementation intentionally uses original placeholder copy and brand tokens (not direct source-content duplication).
- Replace placeholder links and copy before production use.
- This project is independent and not affiliated with Anthropic PBC or OpenAI.
