# SolCoder Landing Page - Deployment Guide

Complete guide to deploying the SolCoder landing page to production.

## 📋 Pre-Deployment Checklist

### 1. Assets ✅

Before deploying, ensure all required assets are in place:

- ⬜ Noise texture (`/public/noise-texture.png`) - See `ASSETS_TODO.md`
- ⬜ Favicons (16x16, 32x32, apple-touch-icon)
- ⬜ OG image (`/public/og-image-terminal.png` - 1200x630px)
- ⬜ Twitter Card image (`/public/twitter-card-gradient.png` - 1200x600px)
- ⬜ Self-hosted fonts (optional but recommended)

**Quick Asset Generation:**

```bash
# Noise texture (requires ImageMagick)
convert -size 200x200 xc: +noise Random -colorspace Gray \
  -separate -threshold 50% -negate \
  -alpha set -channel A -evaluate multiply 0.05 \
  public/noise-texture.png

# Or use placeholder
echo "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==" \
  | base64 -d > public/noise-texture.png
```

### 2. Configuration Updates

Update these values before deployment:

**`astro.config.mjs`:**
```js
export default defineConfig({
  site: 'https://solcoder.dev', // ← Update with your domain
  // ...
});
```

**`netlify.toml`** (if using redirects):
```toml
[[redirects]]
  from = "/discord"
  to = "https://discord.gg/YOUR_ACTUAL_INVITE" # ← Update
  status = 301
```

**All component files:**
Search and replace placeholder URLs:
- `https://github.com/solcoder/SolCoder` → Your actual repo
- `https://discord.gg/solcoder` → Your actual Discord
- `https://twitter.com/solcoder` → Your actual Twitter

### 3. Content Verification

Review and update:
- ✅ Stats in `SocialProof.astro` (developers, deploys, contributors)
- ✅ Testimonials (replace placeholders with real ones)
- ✅ Roadmap progress bars in `VisionSection.astro`
- ✅ Award badges (if any are placeholder)

### 4. SEO Metadata

Verify SEO is correctly configured:

**`src/layouts/Layout.astro`:**
- ✅ Title tag
- ✅ Meta description
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ JSON-LD structured data
- ✅ Canonical URL

---

## 🚀 Deployment Options

### Option 1: Netlify (Recommended)

**Why Netlify?**
- Zero-config deployment (reads `netlify.toml`)
- Edge Functions support
- Automatic HTTPS
- Form handling
- Split testing
- Analytics

**Steps:**

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: SolCoder landing page"
   git remote add origin https://github.com/YOUR_USERNAME/solcoder-www.git
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to https://app.netlify.com/
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and authorize
   - Select your repository
   - Build settings are auto-detected from `netlify.toml`
   - Click "Deploy site"

3. **Configure Custom Domain:**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter your domain (e.g., `solcoder.dev`)
   - Follow DNS configuration instructions:
     ```
     Type: A
     Name: @
     Value: 75.2.60.5 (Netlify's IP)

     Type: CNAME
     Name: www
     Value: your-site.netlify.app
     ```
   - Enable HTTPS (automatic with Let's Encrypt)

4. **Environment Variables (if needed):**
   - Go to Site settings → Build & deploy → Environment
   - Add any required variables
   - Trigger redeploy

**Build Command:** (configured in `netlify.toml`)
```toml
[build]
  command = "npm run build"
  publish = "dist"
```

---

### Option 2: Vercel

**Why Vercel?**
- Optimized for Next.js/Astro
- Edge Functions
- Analytics
- Preview deployments

**Steps:**

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow prompts:**
   - Set up and deploy: Yes
   - Which scope: Your account
   - Link to existing project: No
   - Project name: solcoder-www
   - Directory: ./
   - Override build command: No
   - Framework: Astro (auto-detected)

4. **Production deployment:**
   ```bash
   vercel --prod
   ```

5. **Custom domain:**
   ```bash
   vercel domains add solcoder.dev
   ```

**Configuration file (optional):**
Create `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "astro"
}
```

---

### Option 3: Cloudflare Pages

**Why Cloudflare Pages?**
- Fastest global CDN
- Free unlimited bandwidth
- Zero cold starts
- Pages Functions (edge compute)

**Steps:**

1. **Push to GitHub** (see Netlify step 1)

2. **Deploy to Cloudflare Pages:**
   - Go to https://dash.cloudflare.com/
   - Navigate to "Workers & Pages"
   - Click "Create application" → "Pages"
   - Connect to GitHub and select repository
   - Configure build settings:
     ```
     Build command: npm run build
     Build output: dist
     Framework preset: Astro
     ```
   - Click "Save and Deploy"

3. **Custom Domain:**
   - Go to Custom domains
   - Add `solcoder.dev`
   - Configure DNS (if domain is on Cloudflare, it's automatic)

---

### Option 4: GitHub Pages

**Why GitHub Pages?**
- Free hosting for public repos
- Simple deployment
- Good for documentation sites

**Steps:**

1. **Update `astro.config.mjs`:**
   ```js
   export default defineConfig({
     site: 'https://yourusername.github.io',
     base: '/solcoder-www', // Repo name
     // ...
   });
   ```

2. **Add GitHub Actions workflow:**
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: 18
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

3. **Enable GitHub Pages:**
   - Go to repo Settings → Pages
   - Source: Deploy from branch
   - Branch: `gh-pages` (created by workflow)
   - Save

---

## 🧪 Pre-Deployment Testing

### 1. Local Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

Open http://localhost:4321 and test:
- ✅ All pages load correctly
- ✅ Links work
- ✅ Images load (no 404s in console)
- ✅ Fonts load correctly
- ✅ Animations work
- ✅ Interactive demo functions
- ✅ Mobile responsive

### 2. Lighthouse Audit

1. Build and preview (see above)
2. Open Chrome DevTools (F12)
3. Go to "Lighthouse" tab
4. Select:
   - ✅ Performance
   - ✅ Accessibility
   - ✅ Best Practices
   - ✅ SEO
5. Click "Analyze page load"
6. Target scores: **95+** on all metrics

**Common issues:**
- Low performance → Optimize images, reduce JS
- Accessibility issues → Add ARIA labels, check contrast
- SEO problems → Verify meta tags, headings structure

### 3. Cross-Browser Testing

Test on:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile Safari (iOS)
- ✅ Chrome Mobile (Android)

### 4. Validate SEO

**Open Graph Debugger:**
```
https://developers.facebook.com/tools/debug/
```
Enter your URL and check preview

**Twitter Card Validator:**
```
https://cards-dev.twitter.com/validator
```
Enter your URL and check preview

**LinkedIn Post Inspector:**
```
https://www.linkedin.com/post-inspector/
```
Validate LinkedIn preview

---

## 📊 Post-Deployment Monitoring

### Analytics Setup

**Netlify Analytics** (recommended):
- Go to Site settings → Analytics
- Enable Netlify Analytics ($9/month)
- No code changes required

**Google Analytics 4** (free alternative):
Add to `src/layouts/Layout.astro` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Performance Monitoring

**Vercel Analytics:**
```bash
npm install @vercel/analytics
```

Add to layout:
```astro
---
import { Analytics } from '@vercel/analytics';
---
<Analytics />
```

**Cloudflare Web Analytics:**
- Dashboard → Analytics → Web Analytics
- Add site
- Copy snippet to layout

---

## 🔄 Continuous Deployment

All platforms support automatic deployments:

### Netlify/Vercel/Cloudflare:
- Push to `main` branch → Auto-deploy to production
- Push to feature branch → Auto-deploy preview URL
- Pull request → Auto-deploy preview comment

### Manual Redeploy:

**Netlify:**
```bash
netlify deploy --prod
```

**Vercel:**
```bash
vercel --prod
```

**Cloudflare Pages:**
- Use dashboard or `wrangler pages publish dist`

---

## 🐛 Troubleshooting

### Build Fails

**Error: "Module not found"**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Error: "Astro check failed"**
```bash
# Check TypeScript errors
npm run astro check
# Fix errors, then rebuild
```

### Fonts Not Loading

**Issue:** CORS errors or 404s

**Fix:**
1. Ensure fonts are in `/public/fonts/`
2. Update `tailwind.config.cjs`:
   ```js
   fontFamily: {
     mono: ['"Fira Code"', 'monospace'],
   }
   ```
3. Verify font-face declarations in CSS

### Images 404

**Issue:** OG images or noise texture not found

**Fix:**
1. Check file exists in `/public/`
2. Verify path in code (no leading `/public/`)
   ```astro
   <!-- Correct -->
   <img src="/noise-texture.png" />

   <!-- Incorrect -->
   <img src="/public/noise-texture.png" />
   ```

### Slow Load Times

**Fix:**
1. Optimize images (use WebP, compress)
2. Self-host fonts (already configured)
3. Enable CDN caching (automatic on Netlify/Vercel/Cloudflare)
4. Lazy load images below fold

---

## ✅ Deployment Checklist

Before going live:

- ⬜ All assets in place (noise texture, favicons, OG images)
- ⬜ Configuration updated (site URL, social links)
- ⬜ Content reviewed (stats, testimonials, roadmap)
- ⬜ SEO metadata verified
- ⬜ Local production build tested
- ⬜ Lighthouse audit passed (95+ scores)
- ⬜ Cross-browser tested
- ⬜ Mobile responsive verified
- ⬜ OG/Twitter cards validated
- ⬜ Custom domain configured (if applicable)
- ⬜ HTTPS enabled
- ⬜ Analytics setup (optional)
- ⬜ 404 page works
- ⬜ Sitemap accessible (`/sitemap-index.xml`)

---

## 🎉 Post-Launch

After deployment:

1. **Announce on social media:**
   - Twitter: Share with #Solana hashtag
   - Discord: Announce in community
   - Reddit: Post to r/solana

2. **Submit to directories:**
   - Product Hunt: https://www.producthunt.com/
   - Hacker News: https://news.ycombinator.com/

3. **Monitor analytics:**
   - Track visitor count
   - Check bounce rate (<40% target)
   - Monitor page load times

4. **Collect feedback:**
   - Create feedback form
   - Monitor Discord for user comments
   - Iterate based on data

---

**Questions?** See the main [README.md](README.md) for more details.

**Need help?** Open an issue on GitHub or ask in Discord.
