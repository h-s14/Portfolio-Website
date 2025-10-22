# Portfolio Website (Next.js + TypeScript)

This project is a personal portfolio built with the Next.js App Router, Tailwind CSS, and TypeScript. It showcases featured projects, skills, and a contact form that can forward messages via email when SMTP credentials are provided.

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Building for Production

```bash
pnpm build
pnpm start
```

The `start` command serves the pre-built production bundle.

## Environment Variables

To enable email delivery for the contact form, provide the following environment variables before running `pnpm dev` or `pnpm start`:

- `EMAIL_USER` – the SMTP username (for example, a Gmail address)
- `EMAIL_PASS` – the SMTP password or app password
- `EMAIL_TO` (optional) – recipient email address; defaults to `EMAIL_USER`

## Linting

```bash
pnpm lint
```

Linting uses ESLint’s flat config via `eslint-config-next`.

## Styling

Tailwind CSS powers the design system. Global styles and custom animations live in `src/app/globals.css`.
