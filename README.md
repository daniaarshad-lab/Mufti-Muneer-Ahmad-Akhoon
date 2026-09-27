# Hazrat Maulana Mufti Muneer Ahmad Akhoon — Official Web Portal

A high-performance, responsive web application and digital archive dedicated to the life, scholarly publications, lectures, and guidance of Hazrat Maulana Mufti Muneer Ahmad Akhoon (Founder of Jamia Zakariyya New York).

Built with **React 19**, **Vite 6**, **Tailwind CSS v4**, **React Router 7**, and **Motion**.

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
