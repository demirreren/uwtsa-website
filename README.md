# TSA UW - Turkish Students Association Website

A modern, one-page scrollable website for the Turkish Students Association at the University of Waterloo.

## 🚀 Features

- **One-page scroll design** - All content on a single page with smooth navigation
- **Mobile-first** - Responsive design that looks great on all devices
- **Accessible** - Good contrast, keyboard navigation, semantic HTML
- **Fast** - Optimized images, minimal bundle size
- **Easy updates** - Data-driven content for highlights and sponsors
- **Modern stack** - Next.js 14, TypeScript, Tailwind CSS, Framer Motion

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles with Tailwind
│   ├── layout.tsx       # Root layout with fonts & SEO
│   └── page.tsx         # Main page component
├── components/
│   ├── Navigation.tsx   # Sticky nav with smooth scroll
│   ├── Hero.tsx         # Hero section with CTAs
│   ├── About.tsx        # About cards
│   ├── Highlights.tsx   # Photo grid + Instagram
│   ├── Collabs.tsx      # Partner marquee
│   ├── Sponsors.tsx     # Sponsor grid
│   ├── FAQ.tsx          # Accordion FAQ
│   ├── CTABand.tsx      # Mid-page CTA
│   ├── Contact.tsx      # Contact cards
│   ├── Footer.tsx       # Footer with social links
│   └── ...              # Reusable UI components
├── data/
│   ├── highlights.ts    # Event highlights data
│   ├── sponsors.ts      # Sponsors & collabs data
│   └── faq.ts           # FAQ questions & answers
└── config.ts            # Site configuration
```

## ⚙️ Configuration

Update `src/config.ts` with your actual values:

```typescript
export const WHATSAPP_COMMUNITY_URL = 'https://chat.whatsapp.com/YOUR_LINK';
export const INSTAGRAM_URL = 'https://instagram.com/uwtsa';
export const TSA_EMAIL = 'tsa@uwaterloo.ca';
```

## 🖼️ Adding Images

1. Place photos in `/public/photos/`
2. Update `src/data/highlights.ts` with photo paths
3. For sponsors, add logos to `/public/sponsors/`

## 📝 Updating Content

### Highlights (Events)
Edit `src/data/highlights.ts`:
```typescript
{
  id: 'unique-id',
  title: 'Event Name',
  caption: 'Short description',
  photoPath: '/photos/your-image.jpg',
  tag: 'Food' | 'Dance' | 'Social' | 'Sports' | 'Culture' | 'Collab',
  dateLabel: 'Fall 2024' // optional
}
```

### Sponsors
Edit `src/data/sponsors.ts`:
```typescript
{
  id: 'sponsor-id',
  name: 'Sponsor Name',
  logoPath: '/sponsors/logo.png', // optional
  role: 'Sponsor' | 'Venue' | 'Caterer' | 'Partner'
}
```

### FAQ
Edit `src/data/faq.ts` to add/update questions.

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🚀 Deployment

This project is ready to deploy on Vercel:

1. Push to GitHub
2. Import to Vercel
3. Deploy!

Or run `vercel` CLI directly.

## 🎨 Brand Colors

- **TSA Red**: `#D00000`
- **White**: `#FFFFFF`
- **Charcoal**: `#1F1F1F`
- **Warm background**: `#FAF8F5`

## 📄 License

Made with ❤️ by TSA UW
