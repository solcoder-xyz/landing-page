# Assets TODO

This file lists assets that need to be created/added before launch.

## 🎨 Required Assets

### 1. Noise Texture (`/public/noise-texture.png`)

**Size**: 200x200px
**Format**: PNG with transparency
**Purpose**: Subtle background texture overlay

**Options to create:**

#### Option A: Using ImageMagick
```bash
convert -size 200x200 xc: +noise Random -colorspace Gray \
  -separate -threshold 50% -negate \
  -alpha set -channel A -evaluate multiply 0.05 \
  public/noise-texture.png
```

#### Option B: Online Generator
1. Visit https://www.noisetexturegenerator.com/
2. Set size to 200x200px
3. Choose "Film Grain" or "Perlin Noise"
4. Set opacity to ~5%
5. Download and save to `public/noise-texture.png`

#### Option C: Photoshop/GIMP
1. Create 200x200px image
2. Fill with 50% gray
3. Add Filter → Noise → Add Noise (10%, Monochromatic)
4. Set layer opacity to 5%
5. Export as PNG

---

### 2. Favicons

**Tool**: https://realfavicongenerator.net/

**Steps:**
1. Upload the `public/favicon.svg` file (or create a 512x512px PNG version)
2. Configure options:
   - iOS: Use solid color background (#0E0E0E)
   - Android: Use solid color background (#0E0E0E)
   - Windows: Use solid color background (#0E0E0E)
3. Download the favicon package
4. Extract to `/public/`:
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png`

**Already created:**
- ✅ `favicon.svg` (basic placeholder)
- ✅ `site.webmanifest`

**TODO:**
- ⬜ `favicon-16x16.png`
- ⬜ `favicon-32x32.png`
- ⬜ `apple-touch-icon.png`

---

### 3. Open Graph Image (`/public/og-image-terminal.png`)

**Size**: 1200x630px
**Format**: PNG or JPG
**Purpose**: Social media preview (Facebook, LinkedIn, Discord)

**Design Requirements:**
- Background: Deep space (#0E0E0E) with noise texture
- Include ASCII "SOLCODER" logo (gradient purple to green)
- Headline: "From Idea to Devnet in 60 Seconds"
- Subheadline: "AI-Powered Solana Development"
- Terminal window mockup (optional)
- Solana gradient accent (purple #9945FF → green #14F195)

**Tools:**
- Figma template: https://www.figma.com/community (search "OG image template")
- Canva: https://www.canva.com/ (create custom 1200x630px design)
- Photoshop/GIMP: Use provided dimensions

**TODO:**
- ⬜ Create `og-image-terminal.png` (1200x630px)

---

### 4. Twitter Card Image (`/public/twitter-card-gradient.png`)

**Size**: 1200x600px
**Format**: PNG or JPG
**Purpose**: Twitter/X preview

**Design Requirements:**
- Similar to OG image but 1200x600px
- Can be the same design, just resized
- Ensure text is readable at smaller sizes

**TODO:**
- ⬜ Create `twitter-card-gradient.png` (1200x600px)

---

### 5. Fonts (Self-hosted) - `/public/fonts/`

**Why self-host?** Faster load times, no external requests, better privacy.

**Fonts to download:**

#### Fira Code
- URL: https://github.com/tonsky/FiraCode/releases
- Download: FiraCode-VF.woff2 (variable font) or individual weights
- Files needed:
  - `FiraCode-Regular.woff2`
  - `FiraCode-Medium.woff2`
  - `FiraCode-Bold.woff2`

#### Space Grotesk
- URL: https://fonts.google.com/specimen/Space+Grotesk
- Download via: https://google-webfonts-helper.herokuapp.com/fonts/space-grotesk
- Files needed:
  - `SpaceGrotesk-Regular.woff2`
  - `SpaceGrotesk-Medium.woff2`
  - `SpaceGrotesk-Bold.woff2`

#### Press Start 2P
- URL: https://fonts.google.com/specimen/Press+Start+2P
- Download via: https://google-webfonts-helper.herokuapp.com/fonts/press-start-2p
- Files needed:
  - `PressStart2P-Regular.woff2`

**TODO:**
- ⬜ Download fonts
- ⬜ Place in `/public/fonts/`
- ⬜ Update font-face declarations in CSS (currently using Google Fonts)

---

### 6. Demo Video (Optional) - `/public/videos/demo.mp4`

**Size**: Max 10MB
**Format**: MP4 (H.264 codec)
**Duration**: 30-120 seconds
**Purpose**: Hero section background video or demo section

**Content Ideas:**
- Screen recording of SolCoder CLI in action
- Terminal typing animation
- Full workflow: prompt → scaffold → deploy → Explorer

**Tools:**
- Screen recording: QuickTime (macOS), OBS Studio (cross-platform)
- Editing: DaVinci Resolve (free), iMovie, Shotcut
- Compression: HandBrake (to reduce file size)

**TODO:**
- ⬜ Optional: Record demo video
- ⬜ Optional: Add to `/public/videos/`

---

## 📝 Quick Checklist

Before deploying to production:

**Critical (must have):**
- ⬜ Noise texture (`noise-texture.png`)
- ⬜ Favicon set (16x16, 32x32, apple-touch-icon)
- ⬜ Open Graph image (`og-image-terminal.png`)
- ⬜ Twitter Card image (`twitter-card-gradient.png`)

**Recommended (better performance):**
- ⬜ Self-hosted fonts in `/public/fonts/`

**Optional (nice to have):**
- ⬜ Demo video

---

## 🎨 Design Guidelines

When creating images:

**Colors:**
- Primary: Solana Purple (#9945FF), Solana Green (#14F195)
- Background: Deep Space (#0E0E0E)
- Text: Slate Primary (#E6FFFA)

**Typography:**
- Headings: Fira Code, Space Grotesk (bold)
- Body: Space Grotesk (regular/medium)
- Code: Fira Code (monospace)

**Style:**
- Retro terminal aesthetic
- CRT scanline effects (optional)
- Gradient overlays (purple → green, 45deg)
- High contrast for readability
- Minimal, clean, technical

---

## 🚀 After Adding Assets

Once assets are added:

1. Test image loading:
   ```bash
   npm run dev
   ```
   Check browser console for 404 errors

2. Validate OG images:
   - Facebook Debugger: https://developers.facebook.com/tools/debug/
   - Twitter Card Validator: https://cards-dev.twitter.com/validator
   - LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

3. Test fonts:
   - Check if fonts load correctly
   - Test on different browsers
   - Verify no CORS errors in console

4. Performance check:
   - Run Lighthouse audit
   - Ensure images are optimized (<200KB each)
   - Check total asset size

---

**Questions?** See the main README.md for more details.
