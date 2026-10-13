# Injamam — Software & AI Portfolio

A responsive, resume-based portfolio with a lavender panel layout, sticky profile and navigation, three project showcases, skills, hackathon leadership, education, certifications, and contact options.

## Run locally

Use Node.js 22.13 or newer and the package-manager version pinned in `package.json`.

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev:next
```

Open `http://localhost:3000`. Standard Next.js is provided for local use and Vercel; the existing Vinext/Vite stack is retained for Sites hosting.

```sh
pnpm typecheck
pnpm build:vercel
pnpm start:next
```

## Deploy to Vercel

Push this project to your Git repository, then import it into Vercel. Select **Next.js**, use this folder as the root, set the install command to `pnpm install --frozen-lockfile`, and override the build command to `pnpm build:vercel`. Keep the default Next.js output settings. No environment variables are required. The separate `pnpm build` command creates the Sites Worker build rather than the Vercel build.

## Content and contact

- Edit project descriptions, skills, repository links, and certifications in `lib/portfolio.ts`.
- Edit biography, leadership, education, and contact information in `app/page.tsx`.
- Replace `public/Injamam-Resume.pdf` to update the downloadable resume.
- Contact submission validates required fields and opens a `mailto:` draft. The visitor must send it in their email client. There is no server delivery or success claim. Direct email and phone links are also available.
- The project visuals are illustrative CSS graphics, not screenshots of the applications.
- No employment history is claimed; the experience section documents the hackathon leadership in the resume.
- Typography is served locally. Font license notices are in `public/fonts/LICENSE.txt`.

## Verification

Production checks and any environment limitations are recorded in `VERIFICATION.md`.


## Sites runtime

`pnpm dev` runs the existing Vinext development stack. `pnpm build` produces the Cloudflare Worker in `dist/server`. Sites source synchronization and deployment use the project identity in `.openai/hosting.json`. No database, uploads, authentication, or external API credentials are needed by the portfolio.
