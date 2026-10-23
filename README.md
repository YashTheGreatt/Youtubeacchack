# THE DARKNESS — Roblox Scripts

A responsive black-and-white landing page concept built with Next.js App Router, React, TypeScript, and CSS animations.

## Features
- Cinematic intro reveal
- Animated trust counter from 100 down to 0
- Responsive mobile navigation
- Script library, about, and community sections
- Monochrome visual system, grid texture, subtle grain, hover transitions
- Reduced-motion accessibility support
- No API keys or environment variables required

## Run locally

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel
1. Create a GitHub repository and upload these project files.
2. In Vercel, choose **Add New → Project** and import that repository.
3. Keep the detected framework as **Next.js** and deploy.
4. In Project Settings → Domains, use `roblox-scripts.vercel.app` if it is available, or choose another available domain.

## Customize
- Main page content: `app/page.tsx`
- Theme, layout, responsive styles: `app/globals.css`
- SEO metadata: `app/layout.tsx`

The “trust level” is a decorative intro animation, not a real trust or security measurement. This is an unofficial community concept and is not affiliated with Roblox Corporation.
