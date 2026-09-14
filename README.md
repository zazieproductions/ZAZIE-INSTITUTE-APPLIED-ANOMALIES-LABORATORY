# Zazie Institute of Applied Anomalies (ZIAA)

Independent laboratory archive for experimental audio technologies, speculative patents, perceptual interfaces, signal archaeology, and public listening infrastructure. R&D Division of Zazie Productions LLC.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 7** (bundler / dev server)
- **Tailwind CSS 4** (styling)
- **React Router 7** (client-side routing)
- **Framer Motion** (animations)
- **Lucide React** (icons)

## Development

```bash
npm install
npm run dev        # start Vite dev server
npm run build      # type-check + production build into ./dist
npm run preview    # preview the production build locally
npm run lint       # run ESLint
```

## Deployment — Cloudflare Pages

This repo is structured for zero-config deployment to **Cloudflare Pages**.

### Option A — Connect via the Cloudflare Dashboard (Git integration)

1. Push this repo to GitHub/GitLab.
2. In Cloudflare → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Select the repository and configure the build:
   - **Framework preset**: *Vite*
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Environment variables** (if needed): `NODE_VERSION=20`
4. Click **Save and Deploy**. Cloudflare will build and deploy on every push.

The project includes the necessary Cloudflare Pages files out of the box:

| File | Purpose |
|---|---|
| `public/_redirects` | SPA fallback — rewrites every unknown path to `/index.html` so React Router handles deep links (e.g. `/prototypes/x1`, `/papers`) correctly. |
| `public/_headers` | Security headers (`X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, etc.) and immutable cache policy for hashed assets under `/assets/*`. |
| `public/robots.txt` | Permissive crawler policy. |
| `wrangler.toml` | Declares the build output dir for Wrangler CLI deploys. |

### Option B — Deploy from the CLI with Wrangler

```bash
# one-time
npm install -g wrangler
wrangler login

# build and deploy
npm run deploy       # runs `npm run build && wrangler pages deploy dist`
```

For a local preview that mimics the Cloudflare Pages runtime:

```bash
npm run build
npm run pages:dev    # wrangler pages dev dist
```

### Custom domains

Once deployed, add a custom domain under **Pages → Your project → Custom domains**. No code changes are required.

## Project Structure

```
.
├── index.html              # HTML entry
├── public/                 # Static assets served at / (copied verbatim to dist/)
│   ├── _redirects          # Cloudflare Pages SPA rewrites
│   ├── _headers            # Cloudflare Pages response headers
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── main.tsx            # React bootstrap
│   ├── App.tsx             # Router + layout
│   ├── index.css           # Tailwind entry + global styles
│   ├── components/         # Header, Footer, SearchModal, ...
│   ├── pages/              # Route-level views
│   ├── data/               # Static content (prototypes, papers, people, ...)
│   ├── lib/                # audioEngine, utilities
│   └── types/              # Shared TypeScript types
├── vite.config.ts
├── tsconfig*.json
├── wrangler.toml           # Cloudflare Pages build config
└── package.json
```
