# GitHub Actions Deployment Guide for ATUM Analytics

## Setup Instructions

### Option 1: Deploy to GitHub Pages (Free)

1. **Enable GitHub Pages:**
   - Go to Settings → Pages
   - Select "GitHub Actions" as deployment source

2. **Configure next.config.mjs:**
   \`\`\`javascript
   const nextConfig = {
     output: 'export',
     basePath: '/atum-analytics',
     images: { unoptimized: true },
   }
   export default nextConfig
   \`\`\`

3. **Push to main branch** - Workflow runs automatically

### Option 2: Deploy to Vercel (Recommended)

1. **Get Vercel Tokens:**
   - Visit: https://vercel.com/account/tokens
   - Create new token

2. **Add GitHub Secrets:**
   - Go to Settings → Secrets and variables → Actions
   - Add:
     - `VERCEL_TOKEN`: Your Vercel token
     - `VERCEL_ORG_ID`: From Vercel dashboard
     - `VERCEL_PROJECT_ID`: From Vercel dashboard

3. **Push to main branch** - Workflow deploys automatically

## Workflows Included

### 1. deploy-github-pages.yml
- Builds Next.js app
- Exports static site
- Deploys to GitHub Pages
- **Trigger:** Push to main branch

### 2. deploy-vercel.yml
- Builds with Vercel CLI
- Deploys production build
- **Trigger:** Push to main branch
- **Requires:** VERCEL_TOKEN, VERCEL_ORG_ID, VERCEL_PROJECT_ID

### 3. lint-and-test.yml
- Runs ESLint
- Builds app
- Validates code quality
- **Trigger:** Push to main/develop, Pull requests

## Environment Variables

Add to GitHub Secrets:
- `NEXT_PUBLIC_APP_URL`: Your app URL (GitHub Pages only)
- `VERCEL_TOKEN`: Vercel authentication token
- `VERCEL_ORG_ID`: Vercel organization ID
- `VERCEL_PROJECT_ID`: Vercel project ID

## Status Badges

Add to README.md:
\`\`\`markdown
[![Deploy to GitHub Pages](https://github.com/USERNAME/atum-analytics/actions/workflows/deploy-github-pages.yml/badge.svg)](https://github.com/USERNAME/atum-analytics/actions/workflows/deploy-github-pages.yml)

[![Deploy to Vercel](https://github.com/USERNAME/atum-analytics/actions/workflows/deploy-vercel.yml/badge.svg)](https://github.com/USERNAME/atum-analytics/actions/workflows/deploy-vercel.yml)

[![Lint & Build Check](https://github.com/USERNAME/atum-analytics/actions/workflows/lint-and-test.yml/badge.svg)](https://github.com/USERNAME/atum-analytics/actions/workflows/lint-and-test.yml)
\`\`\`

## Troubleshooting

**Build fails with "ENOENT":**
- Run `npm ci` to clean install dependencies

**Pages not updating:**
- Check GitHub Pages settings in repository
- Verify branch is set to main

**Vercel deployment fails:**
- Verify VERCEL_* secrets are correctly set
- Check Vercel project is properly linked

## Local Testing

\`\`\`bash
npm install
npm run build
npm run start
