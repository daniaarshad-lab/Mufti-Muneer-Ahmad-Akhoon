# Code Export and Deployment Plan (Vercel, Netlify, Cloudflare Pages)

This plan provides comprehensive instructions for downloading and exporting the codebase from Google AI Studio, preparing the repository with production-ready routing configurations for modern hosting providers (Vercel, Netlify, Cloudflare Pages), and running the project locally.

---

## 1. How to Download / Export from Google AI Studio

### Method A: Direct AI Studio Export (Recommended)
1. **GitHub Export Button**:
   - In the top-right header of Google AI Studio Build, locate the **Export** / **GitHub** icon button.
   - Click **Export to GitHub** (or **Download ZIP** if available in your interface version).
   - Authorize GitHub if prompted, name your repository (e.g. `mufti-muneer-akhoon-portal`), and confirm export.
   - A new GitHub repository containing the complete, pristine codebase will be created automatically.

### Method B: Git Clone & Local Workflow
If you have connected your GitHub account via AI Studio:
```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```

---

## 2. Proposed Configuration Additions for Smooth Deployment

Because the application is a client-side Single Page Application (SPA) using React Router 7 (`react-router-dom`), direct navigation or page refresh on nested routes (such as `/books`, `/media`, `/contact`, `/duas`) requires hosting-level rewrites to redirect all traffic to `index.html`.

### Proposed Changes:
1. **`vercel.json`**:
   - Add a root configuration file with clean SPA route rewrites:
   ```json
   {
     "rewrites": [
       { "source": "/(.*)", "destination": "/index.html" }
     ]
   }
   ```
2. **`public/_redirects`**:
   - Add the standard rewrite rule file for Netlify and Cloudflare Pages:
   ```text
   /*    /index.html   200
   ```
3. **`README.md` Deployment Guide**:
   - Add complete setup, installation, and deployment instructions tailored for:
     - **Vercel**: Import Git repository, framework preset: *Vite*, root directory: `./`, build command: `npm run build`, output directory: `dist`.
     - **Netlify**: Import repository, build command: `npm run build`, publish directory: `dist`.
     - **Cloudflare Pages**: Connect Git repo, framework preset: *Vite*, build command: `npm run build`, build output: `dist`.
     - **Local Machine**: Steps for `npm install` and `npm run dev`.

---

## 3. Verification & Build Check
- Run compilation and production build check (`npm run build`) to ensure all TypeScript types, assets, and routes bundle cleanly with zero errors before export.
