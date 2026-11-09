# Abeni Codes: Portfolio

Abenezer Alebachew's personal portfolio site, a single-page React + TypeScript app. The code lives in `client/`.

## Features

- Sticky navbar with smooth scrolling to the Home, Experience, Projects and Contact sections, plus a link to download the resume PDF
- Hero section with a short introduction
- Professional experience timeline
- Projects grid with descriptions and GitHub / demo links for each project
- Contact section with links to GitHub, LinkedIn, Telegram, WhatsApp, X and email
- Footer with social links and a back-to-top button
- Scroll-triggered animations

## Built with

- React 18 and TypeScript
- Vite
- Tailwind CSS (with PostCSS and Autoprefixer)
- Framer Motion and react-intersection-observer
- Lucide icons

## Run it

```sh
cd client
npm install
npm run dev
```

Other scripts: `npm run build`, `npm run preview`, `npm run lint`.

## Deployment

`client/netlify.toml` configures Netlify to run `npm run build`, publish `dist`, and rewrite all routes to `index.html`.
