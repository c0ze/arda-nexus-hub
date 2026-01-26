# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project Overview

Personal portfolio hub at arda.tr - a landing page featuring links to various sites (AI chatbot, blog, band, resume) and showcasing games and developer tools.

## Architecture

- **Framework**: Vite 5 + React 18 + TypeScript
- **Styling**: TailwindCSS + shadcn/ui components
- **Theme Management**: next-themes with 7 Dracula Pro themes
- **Routing**: React Router DOM
- **State**: TanStack React Query
- **Deployment**: GitHub Pages

## Project Structure

```
.
├── src/
│   ├── App.tsx              # Main app with providers
│   ├── main.tsx             # Entry point
│   ├── index.css            # Global styles and theme CSS variables (HSL)
│   ├── components/
│   │   ├── Hero.tsx         # Hero section with CTAs
│   │   ├── About.tsx        # About section with highlights
│   │   ├── Portfolio.tsx    # Games and tools showcase
│   │   ├── Footer.tsx       # Social links footer
│   │   ├── ThemeToggle.tsx  # Theme switcher (7 Dracula Pro themes)
│   │   └── ui/              # shadcn/ui components
│   ├── pages/
│   │   ├── Index.tsx        # Main landing page
│   │   └── NotFound.tsx     # 404 page
│   ├── hooks/               # Custom React hooks
│   └── lib/                 # Utility functions
├── public/                  # Static assets (game images, favicon)
├── scripts/                 # Build scripts (sitemap generator)
├── tailwind.config.ts       # Tailwind configuration
├── dracula-pro*.json        # Theme color definitions
└── index.html               # HTML template with SEO meta tags
```

## Common Commands

```bash
# Development server
npm run dev

# Production build (includes sitemap generation)
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

## Key Implementation Details

### Theming

- 7 Dracula Pro themes: Pro (default), Alucard, Blade, Buffy, Lincoln, Morbius, Van Helsing
- CSS variables defined in `src/index.css` using HSL format
- Tailwind configured to use CSS variables via `tailwind.config.ts`
- `next-themes` package for theme switching
- `darkMode: ["class"]` configured in Tailwind
- Theme names stored in localStorage

### Design Style

- Anthropic-inspired minimal design
- Clean typography with generous spacing
- Subtle backgrounds and soft shadows
- Smooth transitions on interactions

### Sections

1. **Hero**: Name, title, location, CTA buttons (Resume, Blog, AI Chat)
2. **About**: Bio and professional highlights cards
3. **Portfolio**: Games (Domino, Hackerman, Commando) and Tools (Git Roast)
4. **Footer**: Social links (GitHub, LinkedIn, Email, Pagan)

### SEO

- JSON-LD structured data (Person schema)
- OpenGraph and Twitter card meta tags
- Semantic HTML5 tags
- Sitemap auto-generated at build time
