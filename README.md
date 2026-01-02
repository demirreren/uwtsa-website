# TSA UW - Turkish Students Association Website

A bold, creative one-page website for the Turkish Students Association at the University of Waterloo. Features Y2K-inspired aesthetics, scroll-triggered animations, and expressive typography.

## 🎨 Design Features

- **Y2K Aesthetic** - Layered borders, outlined text, retro grid backgrounds
- **Bold Typography** - Syne, Bebas Neue, and Space Mono fonts
- **Scroll Animations** - Parallax effects, floating elements, colliding photos
- **Dark Theme** - High contrast with TSA red accents

## 📁 Project Structure

```
uwtsa-website/
├── assets/
│   ├── originals/         # Original source images (not used in build)
│   └── README.md          # Asset documentation
├── public/
│   ├── logo.png           # TSA logo
│   ├── photos/            # Website images (descriptive names)
│   │   ├── event-*.jpg    # Major events
│   │   ├── social-*.jpg   # Social gatherings
│   │   └── collab-*.jpg   # Collaboration events
│   └── sponsors/          # Sponsor logos
├── src/
│   ├── app/
│   │   ├── globals.css    # Global styles + Y2K effects
│   │   ├── layout.tsx     # Root layout with fonts
│   │   └── page.tsx       # Main page
│   ├── components/        # All UI components
│   ├── config.ts          # Site configuration
│   └── data/              # Data files (highlights, sponsors, FAQ)
└── package.json
```

## 🖼️ Image Naming Convention

Images use descriptive names: `{type}-{description}.{ext}`

| Prefix | Use |
|--------|-----|
| `event-` | Major events (Turkish Night, Kebab Night) |
| `social-` | Casual gatherings (tea time, movie night) |
| `collab-` | Collaborations with other clubs |

## ⚙️ Configuration

Edit `/src/config.ts`:

```typescript
export const WHATSAPP_COMMUNITY_URL = 'https://chat.whatsapp.com/YOUR_LINK';
export const INSTAGRAM_URL = 'https://instagram.com/uwtsa';
export const TSA_EMAIL = 'your-email@uwaterloo.ca';
```

## 📝 Updating Content

### Add New Event Photos

1. Save original to `/assets/originals/`
2. Optimize and copy to `/public/photos/` with descriptive name
3. Add entry to `/src/data/highlights.ts`

### Update FAQ

Edit `/src/data/faq.ts`

### Add Sponsors

Edit `/src/data/sponsors.ts`

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## 🚀 Deploy

Ready for Vercel - just connect your repo!

## 🎨 Brand Colors

| Color | Hex | Use |
|-------|-----|-----|
| TSA Red | `#D00000` | Primary accent |
| Dark | `#0A0A0A` | Background |
| White | `#FFFFFF` | Text, borders |
| Cream | `#FDF6E3` | Section backgrounds |

---

Made with ❤️ by TSA UW
