# Deployment Guide

## Overview
This project is a static React application built with Vite. It is designed to be hosted on GitHub Pages or any static site hosting provider (Netlify, Vercel, etc.).

## Prerequisites
- Node.js (v18+)
- npm

## Local Development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview production build:
   ```bash
   npm run preview
   ```

## GitHub Pages Deployment
This repository is configured with a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys the site to GitHub Pages on every push to the `main` branch.

### Configuration
1. Go to Repository Settings > Pages.
2. Ensure "Source" is set to "GitHub Actions".
3. The workflow will handle the rest.

## Environment Variables
The application uses the following environment variables. For local development, create a `.env` file. For production (GitHub Actions), set these as Repository Secrets/Variables.

- `VITE_APP_TITLE`: Site title
- `VITE_PUBLIC_URL`: The full URL where the site is hosted
- `VITE_UMAMI_ENDPOINT`: (Optional) Umami analytics endpoint
- `VITE_UMAMI_SITE_ID`: (Optional) Umami site ID
- `VITE_DONATION_WEBHOOK_URL`: (Optional) URL for the donation intent webhook

- `VITE_REASONER_ENABLED`: (Optional) `true` to enable client Reasoner features (default: `true` when present)
- `VITE_REASONER_DEFAULT_MODEL`: (Optional) Default AI model name for the Reasoner (e.g. `claude-haiku-4.5`)
- `VITE_REASONER_ENDPOINT`: (Optional) Backend endpoint for Reasoner requests (e.g. `/.netlify/functions/reasoner`)

**Note:** Do not commit `.env` files containing secrets to the repository.
