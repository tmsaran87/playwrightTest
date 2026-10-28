# Playwright SDET Portfolio

An interview-focused UI automation framework built with **Playwright Test + TypeScript + Page Object Model + fixtures + GitHub Actions**. The demo target is the public SauceDemo practice storefront.

> Portfolio project, not production testing of a real retailer. Public demo websites can change or be unavailable.

## What this demonstrates

- Page Object Model with focused page classes
- Reusable typed fixtures
- User-visible locators and auto-waiting assertions
- Login positive and negative coverage
- End-to-end cart and checkout flow
- Product sorting and cart badge validation
- Smoke/regression tags
- Chromium, Firefox and WebKit project matrix
- HTML report, JUnit XML, screenshot/video/trace on failure
- GitHub Actions on pushes, pull requests and manual dispatch
- TypeScript strict mode and ESLint

## Prerequisites

- Node.js 22 LTS (or a currently supported Node.js LTS release)
- npm
- Git

## Run locally

```bash
npm install
npx playwright install
cp .env.example .env
npm test
```

Windows PowerShell users can copy the example file with:

```powershell
Copy-Item .env.example .env
```

The config has demo defaults, so `.env` is optional. Do not commit real credentials or secrets.

Useful commands:

```bash
npm run test:smoke
npm run test:regression
npm run test:headed
npm run test:debug
npm run test:ui
npm run typecheck
npm run lint
npm run report
```

Run one browser:

```bash
npx playwright test --project=chromium
```

## Framework architecture

```text
tests/                 Test specs / business scenarios
pages/                 Page Object Model classes
fixtures/              Reusable typed Playwright fixtures
utils/                 Reserved for data, API, and helper utilities
.github/workflows/     CI pipeline
playwright.config.ts   Browser projects, retries, tracing, reporters
```

## Current test coverage

| Area | Example coverage |
|---|---|
| Authentication | Standard login, invalid password, locked-out user, empty credentials |
| Inventory | Product visibility and price sort |
| Cart | Add item and verify badge/cart contents |
| Checkout | Customer details, overview, order completion |
| Diagnostics | HTML report, screenshot, video and trace on failure |
| CI | Browser matrix on push/PR, downloadable artifacts |

## CI/CD workflow

GitHub Actions runs the suite on pushes and pull requests against `main`/`master`. Each browser runs as a separate matrix job. Open **Actions → Playwright UI Tests → a workflow run** to inspect logs and download artifacts. The HTML report is an artifact, not a permanently hosted public report.

## Create your own GitHub repository

1. Create a new **public** repository named `playwright-sdet-portfolio` in your GitHub account. Do not initialize it with a README, since this project already includes one.
2. Extract this project ZIP locally.
3. Open a terminal in the extracted project folder and run:

```bash
npm install
npx playwright install
npm run typecheck
npm run lint
npm test
git init
git add .
git commit -m "Build Playwright SDET portfolio framework"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/playwright-sdet-portfolio.git
git push -u origin main
```

4. Replace `YOUR_GITHUB_USERNAME` with your GitHub username.
5. Open the repository's **Actions** tab and confirm the workflow succeeds. Fix any failures before sharing the repository in your resume.

## Recommended next increments

1. Add API testing using Playwright's `request` fixture and a public test API.
2. Add data-driven scenarios from JSON and environment-based config.
3. Add accessibility checks with `@axe-core/playwright`.
4. Add a Docker execution option.
5. Publish a sanitized report to GitHub Pages only if you are comfortable making test artifacts public.
6. Add a short architecture diagram and a test strategy document.

## Interview walkthrough (2 minutes)

“I built a TypeScript Playwright framework using Page Object Model and typed fixtures to separate test intent from page interaction. The suite covers authentication negative paths, inventory sorting, cart behavior, and an end-to-end checkout. I configured browser projects for Chromium, Firefox, and WebKit, and GitHub Actions runs the suite for pull requests and pushes. On failure, the pipeline preserves traces, screenshots, videos, HTML, and JUnit output for diagnosis. The next stage is API coverage, accessibility checks, and containerized execution.”

Only claim runs, results, or coverage you have personally verified. After pushing, include the actual Actions run or a report screenshot in your portfolio.
