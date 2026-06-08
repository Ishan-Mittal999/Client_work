# The Cappuccino Maker ☕

A premium, modern, fully responsive coffee shop website with a luxury Gen-Z aesthetic.

Built with **React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion**.

## Features

- 🌗 Dark mode by default, with light-mode toggle (persisted)
- 🔮 Sticky glassmorphism navbar with mobile hamburger menu
- 🎬 Cinematic hero with parallax scroll, floating elements, and animated headline
- ☕ Featured Products grid with premium hover animations
- 📈 Animated stat counters in the About section
- 🍂 Filterable Signature Drinks showcase with `layout` animations
- 💬 Auto-rotating customer reviews carousel
- 🖼 Pinterest-style gallery with keyboard-navigable lightbox
- 🌟 Why Choose Us animated icon cards
- 📱 App Promo with custom SVG phone mockup
- 📍 Contact form with decorative map pin and opening hours
- 💌 Newsletter signup in luxury footer
- ✨ Magnetic buttons, scroll progress bar, smooth scrolling, custom scrollbar
- ♿ Accessibility-minded (semantic landmarks, focus states, aria-labels)
- 📱 Fully responsive: mobile, tablet, desktop

## Color Palette

| Name              | Hex       |
| ----------------- | --------- |
| Deep Espresso     | `#1B120D` |
| Rich Coffee Brown | `#3E2723` |
| Cream             | `#F8F3ED` |
| Warm Beige        | `#D7CCC8` |
| Gold Accent       | `#D4AF37` |

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview

# 5. Type-check the project
npm run typecheck
```

The dev server runs on `http://localhost:5173`.

## Project Structure

```
src/
├── App.tsx                     # Root composition
├── main.tsx                    # React entry point
├── index.css                   # Global Tailwind + theme tokens
├── context/
│   └── ThemeContext.tsx        # Dark/light mode provider
├── data/
│   └── site.ts                 # Products, drinks, reviews, gallery, features
├── hooks/
│   ├── useCountUp.ts           # Animated counter hook
│   └── useScrollProgress.ts    # Scrolled-state hook
└── components/
    ├── Navbar.tsx              # Glass navbar
    ├── Loader.tsx              # Initial loading screen
    ├── ScrollProgress.tsx      # Top progress bar
    ├── ui/
    │   ├── MagneticButton.tsx
    │   └── SectionHeading.tsx
    └── sections/
        ├── Hero.tsx
        ├── FeaturedProducts.tsx
        ├── About.tsx
        ├── SignatureDrinks.tsx
        ├── Reviews.tsx
        ├── Gallery.tsx
        ├── WhyChooseUs.tsx
        ├── AppPromo.tsx
        ├── Contact.tsx
        └── Footer.tsx
```

## Imagery

All imagery is loaded from [Unsplash](https://unsplash.com)'s public CDN — no API key required, but feel free to swap with your own assets in `src/data/site.ts`.
