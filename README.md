# Hazrat Maulana Mufti Muneer Ahmad Akhoon — Official Web Portal

A high-performance, responsive web application and digital archive dedicated to the life, scholarly publications, lectures, and guidance of Hazrat Maulana Mufti Muneer Ahmad Akhoon (Founder of Jamia Zakariyya New York).

Built with **React 19**, **Vite 6**, **Tailwind CSS v4**, **React Router 7**, and **Motion**.

---

## 📥 How to Download or Export this Code from Google AI Studio

You can export this entire codebase directly from the Google AI Studio interface:

### Option 1: Export to GitHub (Recommended)
1. In the **top-right navigation bar** of Google AI Studio Build, look for the **Export** or **GitHub** button.
2. Click **Export to GitHub**.
3. Choose your GitHub account and specify a repository name (e.g., `mufti-muneer-akhoon-portal`).
4. Click **Confirm Export**. All files, commit history, and configurations will be pushed to your new GitHub repository.

### Option 2: Download as ZIP
1. If your interface provides a **Download ZIP** button in the header or project menu (three dots `⋮` / settings), click **Download ZIP**.
2. Unpack the ZIP archive on your local computer.

---

## 🚀 One-Click Deployment Guides

This project is pre-configured with SPA route rewriting for modern hosting providers so that direct URL navigation (e.g. `/books`, `/media`, `/contact`, `/duas`) works seamlessly without 404 errors.

### 1. Deploy to Vercel (Recommended)
`vercel.json` is already included in the root directory.
1. Sign in to [Vercel](https://vercel.com).
2. Click **Add New** → **Project**.
3. Import your GitHub repository.
4. Vercel automatically detects **Vite**:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Your site will be live on a fast global edge network with automatic SSL.

### 2. Deploy to Netlify
`public/_redirects` is already included to handle client-side routing.
1. Sign in to [Netlify](https://www.netlify.com).
2. Click **Add new site** → **Import an existing project**.
3. Select your GitHub repository.
4. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **Deploy Site**.

### 3. Deploy to Cloudflare Pages
`public/_redirects` is also recognized by Cloudflare Pages.
1. Sign in to the [Cloudflare Dashboard](https://dash.cloudflare.com/) and go to **Workers & Pages**.
2. Click **Create Application** → **Pages** → **Connect to Git**.
3. Select your repository.
4. Set build settings:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Click **Save and Deploy**.

---

## 💻 Running Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or 20+ recommended)
- `npm` or `bun`

### Setup Steps
```bash
# 1. Clone your repository (if using GitHub)
git clone https://github.com/<your-username>/mufti-muneer-akhoon-portal.git
cd mufti-muneer-akhoon-portal

# 2. Install dependencies
npm install

# 3. Start the local development server
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

### Building for Production Locally
```bash
# Test the production build
npm run build

# Preview the production build locally
npm run preview
```

---

## 📁 Key Files & Architecture

- `src/App.tsx`: Main application router and root layout.
- `src/components/SiteIntroAnimation.tsx`: Sacred opening sequence featuring Bismillah, illuminated Durood Sharif (Durood-e-Ibrahimi), countdown timer, and replay controls.
- `src/pages/`: Page views (Home, Books, Media, Schedule, Duas, Jamia Zakariyya, Biography, Contact).
- `vercel.json`: SPA routing rewrite rule for Vercel.
- `public/_redirects`: SPA routing rewrite rule for Netlify and Cloudflare Pages.
- `src/index.css`: Tailwind CSS v4 design system, typography tokens, and sacred animations.
