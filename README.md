# Therapinc Website

Official marketing website for **Therapinc** — showcasing AI-powered therapy solutions, practice workflow automation, platform features, and contact inquiries.

---

## 🚀 Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Forms & Email**: [Resend](https://resend.com)
- **Testing**: [Vitest](https://vitest.dev/) + React Testing Library
- **Code Quality**: ESLint flat config + Prettier + Husky + lint-staged
- **Analytics**: Vercel Analytics
- **Hosting / Deployments**: Vercel (primary), Render, Railway

---

## 🛠️ Quick Start & Setup

### Prerequisites

- Node.js `^22.18.0`
- npm `^10.9.0`

### Installation

Run the automated setup command to install dependencies and configure Git hooks:

```bash
npm run setup
# or with Makefile
make setup
```

### Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Fill in your `RESEND_API_KEY` and notification recipient email in `.env.local`.

---

## 💻 Development & Building

### Run Development Server

```bash
npm run dev
# or
make dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Production Build

```bash
npm run build
# or
make build
```

### Start Production Server

```bash
npm run start
```

---

## 🧪 Testing & Code Quality

### Run Unit & Smoke Tests

```bash
npm run test
# or
make test
```

### Run Type Checker

```bash
npm run type-check
```

### Run Linter & Formatter

```bash
npm run lint
npm run format
```

---

## 🚢 Deployment

### Vercel (Recommended)

Zero-configuration deployment. Connect your GitHub repository to Vercel and add `RESEND_API_KEY` and `CONTACT_NOTIFICATION_EMAIL` under Project Settings -> Environment Variables.

### Alternative Deployments

- **Render**: Blueprint defined in [`render.yaml`](file:///c:/Users/renis/OneDrive/sree/sree%202.0/deploy%20sree/therapinc-website/render.yaml)
- **Railway**: Configured via [`railway.toml`](file:///c:/Users/renis/OneDrive/sree/sree%202.0/deploy%20sree/therapinc-website/railway.toml)

---


