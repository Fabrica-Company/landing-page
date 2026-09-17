# FabricaLabs

Marketing site for FabricaLabs — a design and development studio that designs
new websites, modernizes dated ones, and builds web and mobile apps.

Built with React 19, TypeScript, Tailwind CSS and Vite.

## Pages

| Route             | Nav icon | Contents                                                              |
| ----------------- | -------- | --------------------------------------------------------------------- |
| `/`               | Home     | Agency landing: hero, services, featured work, process, testimonials  |
| `/websites`       | Code     | Client website work, filterable by type, plus client feedback         |
| `/websites/:id`   | —        | Case study: metrics, screens, challenge, what we did, client quote    |
| `/apps`           | Phone    | Web and mobile apps, filterable by type                               |
| `/apps/:id`       | —        | App detail: store stats, screens, key features, stack                 |
| `/contact`        | —        | Project enquiry form (reached from the header CTA)                    |

## Quick start

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Editing content

Everything the site renders lives in `constants.ts`:

- `COMPANY_INFO` — name, hero copy, email, location, timezone, office hours
- `COMPANY_STATS` — the four headline numbers under the hero
- `SERVICES` — the four service cards on the home page
- `PROCESS_STEPS` — the "how we work" steps
- `WEBSITE_PROJECTS` — client website work, each with an optional `testimonial`
- `APP_PROJECTS` — web and mobile apps, with optional `storeStats`
- `TESTIMONIALS` — derived from the testimonials attached to website projects
- `SOCIAL_LINKS` — footer profile links
- `WEB3FORMS_ACCESS_KEY` — required for the contact form to send

> The client work, apps and testimonials shipped in `constants.ts` are **sample
> content** so the layout can be reviewed. Replace every entry marked `TODO`
> with real work before launching.

## Images

No images are bundled. Anywhere artwork is expected, the UI renders a labelled
placeholder via `components/ImagePlaceholder.tsx`. To add real images, drop
files into `assets/` and set the matching field in `constants.ts`:

```ts
import northwindPreview from "./assets/northwind-preview.webp";

// then, on the project:
cardImageUrl: northwindPreview,
```

The fields that accept images are `cardImageUrl`, `logoImageUrl` and `images`
on website projects, `cardImageUrl` and `images` on apps, and `logoImageUrl` on
testimonials. A favicon still needs to be added and linked in `index.html`.

## Contact form

The enquiry form posts to [Web3Forms](https://web3forms.com). Add your free
access key to `WEB3FORMS_ACCESS_KEY` in `constants.ts`; until then the form
reports that it isn't connected instead of silently failing.

## Visitor counter

The hero shows a static visitor number from `VISITOR_STATS` in `constants.ts`.
Live counting through your own Firebase project is optional — see
`VISITOR_COUNTER_SETUP.md`.

## Scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run dev`     | Local development            |
| `npm run build`   | Production build → `dist/`   |
| `npm run preview` | Preview the production build |

## Deploy

Run `npm run build` and host `dist/` on any static host (Vercel, Netlify,
Firebase Hosting, Cloudflare Pages). The app uses client-side routing, so
configure the host to rewrite unknown paths to `index.html`.
