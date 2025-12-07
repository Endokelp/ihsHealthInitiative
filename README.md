# Interlake Health Initiative Website

A professional React + Vite website for the Interlake Health Initiative, a nonprofit bringing health awareness, kits, mentorship, and hands‑on experiences to families and future healthcare professionals.

## Tech Stack
- React (TypeScript, Vite)
- CSS (custom design system using CSS variables)
- Lucide React (icons)

## Features
- Responsive layout with consistent spacing & typography hierarchy
- Design system (colors, typography scale, spacing, shadows, radii)
- Reusable components: `Button`, `Card`, `Section`
- Sections: Hero, About, Programs, Contact/Get Involved
- Smooth in‑page navigation & mobile menu

## Getting Started
```bash
npm install
npm run dev
```
Open http://localhost:5173

## Project Structure
```

  components/    # Reusable UI components
  sections/      # Page section modules
  assets/        # Static assets (logos etc.)
  index.css      # Global design system & base styles
  App.tsx        # Main layout & section composition
```

## Commands
```bash
npm run dev      # Start local dev server
npm run build    # Production build (to dist/)
npm run preview  # Preview built site
```

## Contributing
1. Fork & clone
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m "Describe feature"`
4. Open a pull request

## Deployment
After `npm run build`, deploy contents of `dist/` to your static host (GitHub Pages, Netlify, Vercel, etc.).

## License
(Choose a license, e.g. MIT, when ready.)

## Next Steps
- Add analytics (privacy‑respecting)
- Add forms for volunteer signup
- Add blog / updates section
- Integrate CMS for dynamic content (optional)

---
Made with care for community health.
      // Enable lint rules for React
