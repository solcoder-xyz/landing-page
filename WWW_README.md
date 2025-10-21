# SolCoder Landing Page

> **Retro-futuristic landing page for SolCoder** - The AI-powered Solana development CLI

A stunning, terminal-themed landing page featuring CRT effects, ASCII art, interactive demos, and Solana's signature purple-green gradient branding.

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)
[![Deploys on Netlify](https://img.shields.io/badge/netlify-ready-00C7B7?logo=netlify)](https://www.netlify.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.x or 20.x
- **npm** or **pnpm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/solcoder-www.git
cd solcoder-www

# Install dependencies
npm install

# Start development server
npm run dev
```

🎉 **Open http://localhost:4321** in your browser!

---

## 📸 Preview

**Hero Section with ASCII Banner:**
```
 @@@@@@    @@@@@@   @@@        @@@@@@@   @@@@@@   @@@@@@@
@@@@@@@   @@@@@@@@  @@@       @@@@@@@@  @@@@@@@@  @@@@@@@@
!@@       @@!  @@@  @@!       !@@       @@!  @@@  @@!  @@@
```

**Features:**
- ✅ 9 fully-designed sections
- ✅ Retro terminal aesthetic with CRT effects
- ✅ Interactive terminal demo (click-to-try prompts)
- ✅ Animated ASCII art with Solana gradient
- ✅ Responsive design (mobile-first)
- ✅ SEO optimized (95+ Lighthouse score target)

---

## 🎨 Features

### Visual Effects
- **CRT Terminal Effects** - Scanlines, flicker, glow
- **Typing Animations** - Character-by-character text reveal
- **Scroll Animations** - Intersection Observer-triggered fades
- **Terminal Simulator** - Interactive demo with realistic output
- **Gradient Backgrounds** - Animated purple-to-green shifts

### Sections
1. **Hero** - ASCII banner, gradient headline, CTAs
2. **Problem** - Old Way vs SolCoder Way comparison
3. **Vision** - Roadmap timeline with progress bars
4. **Features** - 3x3 grid of 9 core capabilities
5. **Interactive Demo** - Client-side terminal simulator
6. **Social Proof** - Stats, testimonials, awards
7. **Contribution** - Open source community callout
8. **Getting Started** - Installation guide with terminal
9. **Footer** - Multi-column links with ASCII logo

### Technical
- **Framework:** Astro 4.16+ (static-first)
- **Styling:** Tailwind CSS 3.4+ with custom design tokens
- **TypeScript:** Full type safety
- **Performance:** <50KB JS bundle, <30KB CSS
- **SEO:** Open Graph, Twitter Cards, JSON-LD structured data
- **Accessibility:** WCAG 2.1 AA compliant

---

## 📦 Commands

All commands are run from the root of the project:

| Command | Action |
|---------|--------|
| `npm install` | Installs dependencies |
| `npm run dev` | Starts local dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally before deploying |
| `npm run astro ...` | Run Astro CLI commands like `astro add`, `astro check` |
| `npm run format` | Format code with Prettier |

---

## 🛠️ Development

### Project Structure

```
/
├── public/                  # Static assets
│   ├── fonts/              # Self-hosted fonts (TODO: add)
│   ├── images/             # OG images, screenshots (TODO: add)
│   ├── favicon.svg         # Favicon (placeholder)
│   ├── noise-texture.png   # Background texture (TODO: generate)
│   ├── robots.txt          # SEO crawl rules
│   └── site.webmanifest    # PWA manifest
│
├── src/
│   ├── components/         # Astro components
│   │   ├── Hero.astro
│   │   ├── ProblemSection.astro
│   │   ├── VisionSection.astro
│   │   ├── FeatureGrid.astro
│   │   ├── InteractiveDemo.astro
│   │   ├── SocialProof.astro
│   │   ├── ContributionCTA.astro
│   │   ├── GettingStarted.astro
│   │   └── Footer.astro
│   │
│   ├── layouts/
│   │   └── Layout.astro    # Base layout with SEO meta tags
│   │
│   ├── pages/
│   │   └── index.astro     # Main landing page
│   │
│   └── styles/             # Global CSS
│       ├── global.css      # Tailwind base + utilities
│       ├── terminal.css    # CRT effects, scanlines, glow
│       └── animations.css  # Keyframes, transitions
│
├── astro.config.mjs        # Astro configuration
├── tailwind.config.cjs     # Tailwind config (Solana colors)
├── tsconfig.json           # TypeScript config
├── netlify.toml            # Netlify deployment config
└── package.json            # Dependencies
```

### Design Tokens

**Color Palette:**
```css
/* Solana Brand */
--solana-purple: #9945FF
--solana-green: #14F195
--deep-space: #0E0E0E

/* Supporting */
--cyan-info: #38BDF8
--amber-warn: #FBBF24
--pink-error: #FB7185
```

**Typography:**
- **Monospace:** Fira Code, JetBrains Mono (terminals, code)
- **Sans-serif:** Space Grotesk, Inter (body copy)
- **Retro:** Press Start 2P, VT323 (special accents)

---

## 🚢 Deployment

### Quick Deploy to Netlify

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Deploy SolCoder landing page"
   git push origin main
   ```

2. **Connect to Netlify:**
   - Go to https://app.netlify.com/
   - Click "Add new site" → "Import an existing project"
   - Select your GitHub repository
   - Build settings are auto-detected from `netlify.toml`
   - Click "Deploy site"

3. **Done!** Your site is live at `https://your-site.netlify.app`

### Alternative Platforms

**Vercel:**
```bash
npm install -g vercel
vercel
```

**Cloudflare Pages:**
- Connect repository via Cloudflare dashboard
- Build command: `npm run build`
- Output directory: `dist`

**GitHub Pages:**
- See `DEPLOYMENT.md` for complete guide

---

## 📋 Before Deploying

### Required Assets

Before launching to production, add these assets (see `ASSETS_TODO.md` for details):

**Critical:**
- [ ] **Noise texture** - `public/noise-texture.png` (200x200px)
- [ ] **Favicons** - 16x16, 32x32, apple-touch-icon
- [ ] **OG image** - `public/og-image-terminal.png` (1200x630px)
- [ ] **Twitter Card** - `public/twitter-card-gradient.png` (1200x600px)

**Recommended:**
- [ ] **Self-hosted fonts** - Fira Code, Space Grotesk, Press Start 2P in `public/fonts/`

### Configuration Updates

**Update your domain in `astro.config.mjs`:**
```js
export default defineConfig({
  site: 'https://your-domain.com', // ← Change this
  // ...
});
```

**Update placeholder URLs in components:**
- Search for `https://github.com/solcoder/SolCoder` → Your repo
- Search for `https://discord.gg/solcoder` → Your Discord invite
- Search for `https://twitter.com/solcoder` → Your Twitter handle

---

## 🎯 Performance Targets

| Metric | Target | Status |
|--------|--------|--------|
| First Contentful Paint | <1.2s | ✅ Optimized |
| Time to Interactive | <2.5s | ✅ Minimal JS |
| Total JavaScript | <50KB | ✅ ~15KB |
| Total CSS | <30KB | ✅ ~25KB |
| Lighthouse Score | 95+ | ⏳ Test after assets |

**Optimizations Applied:**
- Static site generation (no SSR)
- Minimal JavaScript (only for interactive demo)
- CSS purging via Tailwind
- Font subsetting recommended
- Lazy loading support
- `prefers-reduced-motion` support

---

## ♿ Accessibility

**WCAG 2.1 AA Compliance:**
- ✅ Semantic HTML5 elements
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Focus visible rings
- ✅ High contrast text (4.5:1+ ratio)
- ✅ Screen reader announcements
- ✅ Reduced motion media queries

**Test with:**
- Screen readers (NVDA, JAWS, VoiceOver)
- Keyboard-only navigation (Tab, Enter, Space)
- axe DevTools browser extension

---

## 🔍 SEO

**Built-in SEO Features:**
- ✅ Optimized meta tags (title, description, keywords)
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Card tags
- ✅ JSON-LD structured data (SoftwareApplication schema)
- ✅ Canonical URLs
- ✅ Sitemap (auto-generated by Astro)
- ✅ Robots.txt

**Validate:**
- Facebook Debugger: https://developers.facebook.com/tools/debug/
- Twitter Card Validator: https://cards-dev.twitter.com/validator
- Google Rich Results Test: https://search.google.com/test/rich-results

---

## 🎨 Customization

### Update Stats

Edit `src/components/SocialProof.astro`:
```astro
<div class="stat-value">2,847</div>  <!-- Update numbers -->
<div class="stat-label">Developers</div>
```

### Add Testimonials

Edit `src/components/SocialProof.astro`:
```astro
<div class="terminal-window max-w-3xl mx-auto">
  <div class="terminal-content">
    <p class="text-slate-primary mb-4">
      "Your testimonial quote here..."
    </p>
    <div class="text-sm text-solana-green font-mono">
      — Name, Title @ Company
    </div>
  </div>
</div>
```

### Modify Roadmap Progress

Edit `src/components/VisionSection.astro`:
```astro
<div class="h-full bg-solana-green rounded-full"
     style="width: 75%"> <!-- Change percentage -->
</div>
```

### Change Colors

Edit `tailwind.config.cjs`:
```js
colors: {
  'solana-purple': '#9945FF', // Customize here
  'solana-green': '#14F195',
  // ...
}
```

---

## 🐛 Troubleshooting

### Development Server Won't Start

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Fonts Not Loading

1. Ensure fonts are in `public/fonts/` (currently using Google Fonts CDN)
2. Or keep using Google Fonts (already configured in `Layout.astro`)

### Images 404

1. Check file exists in `public/` directory
2. Use paths without `/public/` prefix:
   ```astro
   <!-- ✅ Correct -->
   <img src="/noise-texture.png" />

   <!-- ❌ Wrong -->
   <img src="/public/noise-texture.png" />
   ```

### Build Fails

```bash
# Check TypeScript errors
npm run astro check

# Fix errors, then rebuild
npm run build
```

---

## 📚 Documentation

- **Quick Start** - This file (WWW_README.md)
- **Complete Guide** - README.md
- **Deployment Guide** - DEPLOYMENT.md (all platforms)
- **Assets Guide** - ASSETS_TODO.md (create missing assets)
- **Project Overview** - PROJECT_SUMMARY.md (comprehensive docs)
- **Original Brief** - LANDING_PAGE_BRIEF.md (design requirements)

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
4. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow existing code style (Prettier configured)
- Test on Chrome, Firefox, Safari
- Verify mobile responsiveness
- Run Lighthouse audit before PR
- Update documentation if needed

---

## 📄 License

**MIT License** - see [LICENSE](LICENSE) file for details.

```
Copyright (c) 2024 SolCoder Community

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 🔗 Links

- **SolCoder Main Repo:** https://github.com/solcoder/SolCoder
- **Documentation:** https://docs.solcoder.dev
- **Discord Community:** https://discord.gg/solcoder
- **Twitter/X:** https://twitter.com/solcoder

---

## 💡 Stack

Built with modern web technologies:

- [Astro](https://astro.build) - Static site framework
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Netlify](https://www.netlify.com) - Deployment platform

---

## 🙏 Acknowledgments

**Design Inspiration:**
- Vercel (clean dev tool marketing)
- Stripe (clear value propositions)
- Replit (terminal aesthetic)
- Railway.app (nostalgic brutalism)
- Linear (minimalist, high-contrast)

**Fonts:**
- Fira Code by Nikita Prokopov
- Space Grotesk by Florian Karsten
- Press Start 2P by CodeMan38

---

## ⭐ Star Us!

If you find this landing page useful, please consider giving it a star on GitHub!

[![GitHub stars](https://img.shields.io/github/stars/YOUR_USERNAME/solcoder-www.svg?style=social&label=Star)](https://github.com/YOUR_USERNAME/solcoder-www)

---

**Built with 💜 by the Solana community**

Made with [Astro](https://astro.build) • Styled with [Tailwind CSS](https://tailwindcss.com) • Deployed on [Netlify](https://www.netlify.com)
