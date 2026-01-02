# TSA UW Assets

This folder contains the original source images for the website.

## Folder Structure

```
assets/
├── originals/           # Original unprocessed images
│   ├── DSC_0020 (1).JPG
│   ├── DSC_0129.JPG
│   ├── IMG_0370.JPG
│   ├── IMG_0879.JPG
│   ├── IMG_5596.JPG
│   ├── IMG_7756 (1).JPG
│   └── TSA 2025 Logo.png
└── README.md

public/
├── logo.png              # TSA logo (from TSA 2025 Logo.png)
├── photos/               # Optimized website images
│   ├── event-turkish-night-dance.jpg
│   ├── event-kebab-night.jpg
│   ├── event-culture-fest.jpg
│   ├── event-watch-party.jpg
│   ├── social-tea-time.jpg
│   ├── social-movie-night.jpg
│   ├── social-welcome-week.jpg
│   ├── collab-joint-event.jpg
│   └── instagram-preview.png
└── sponsors/             # Sponsor logos (add as needed)
```

## Image Mapping

| Website Image | Original Source | Description |
|---------------|-----------------|-------------|
| `event-turkish-night-dance.jpg` | `DSC_0129.JPG` | Turkish Night dance event |
| `event-kebab-night.jpg` | `IMG_0879.JPG` | Food/kebab night event |
| `event-culture-fest.jpg` | `IMG_5596.JPG` | Cultural festival |
| `event-watch-party.jpg` | `IMG_5596.JPG` | Sports watch party |
| `social-tea-time.jpg` | `IMG_0370.JPG` | Tea time social |
| `social-movie-night.jpg` | `IMG_0370.JPG` | Movie night |
| `social-welcome-week.jpg` | `DSC_0020 (1).JPG` | Welcome week |
| `collab-joint-event.jpg` | `IMG_7756 (1).JPG` | Collaboration event |
| `instagram-preview.png` | `TSA 2025 Logo.png` | Instagram preview placeholder |

## Naming Convention

Images follow this pattern: `{type}-{description}.{ext}`

**Types:**
- `event-` - Major events (Turkish Night, Kebab Night, etc.)
- `social-` - Casual social gatherings (tea time, movie night, etc.)
- `collab-` - Collaboration events with other clubs

## Adding New Images

1. Save original images to `/assets/originals/`
2. Optimize and copy to `/public/photos/` with descriptive name
3. Update `/src/data/highlights.ts` with new image entry
4. Images in `/public/photos/` are automatically available at `/photos/{filename}`

