# Pinnacle Security Website

A professional security website built with Next.js, Tailwind CSS, and modern web technologies.

## Features

- Modern, responsive design with Tailwind CSS
- Professional security-themed color scheme
- Interactive components with Framer Motion
- Form handling with React Hook Form and Zod validation
- SEO optimization with next-seo
- Smooth animations and micro-interactions
- Mobile-first responsive design
- Professional typography with Inter font

## Project Structure

```
security.pinnacle.name/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── HeroSection.js
│   │   ├── ProblemSolution.js
│   │   ├── TrustSignals.js
│   │   ├── ServicesGrid.js
│   │   ├── Testimonials.js
│   │   ├── CTAButtons.js
│   │   └── Footer.js
│   ├── pages/             # Page components
│   │   ├── index.js       # Homepage
│   │   ├── services.js     # Services page
│   │   ├── about.js        # About page
│   │   └── contact.js      # Contact page
│   ├── styles/            # Global styles
│   └── utils/             # Utility functions
├── public/               # Static assets
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
└── README.md            # This file
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Start production server:
```bash
npm start
```

## Technology Stack

- **Next.js** - React framework for production
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **next-seo** - SEO optimization
- **Lucide React** - Icon library

## Design System

### Colors
- **Primary**: Blue gradient (security-themed)
- **Security**: Success (green), Warning (orange), Danger (red), Info (blue)
- **Backgrounds**: White, Gray-50, Gray-900

### Typography
- **Headings**: Inter font, bold weights
- **Body**: Inter font, regular weights
- **UI**: System fonts as fallback

### Components
- **Hero Section**: Full-width hero with gradient background
- **Problem-Solution**: Grid layout comparing problems vs solutions
- **Trust Signals**: Statistics and certifications
- **Services Grid**: Card-based service showcase
- **Testimonials**: Client testimonials
- **CTA Buttons**: Call-to-action sections
- **Footer**: Comprehensive footer with links

## Pages

### Homepage (`/`)
- Hero section with compelling headline
- Problem-solution framework
- Trust signals (statistics, certifications)
- Services overview
- Client testimonials
- Primary CTA buttons

### Services Page (`/services`)
- Detailed service descriptions
- Pricing information
- Service features
- Call-to-action buttons

### About Page (`/about`)
- Company story and mission
- Team information
- Values and philosophy
- Certifications and achievements

### Contact Page (`/contact`)
- Contact form with validation
- Company information
- Trust signals
- Emergency support details

## Deployment

This website is configured for deployment to:
- **Render.com** - Recommended for static sites
- **Vercel** - Alternative deployment platform
- **Netlify** - Another deployment option

## Security Features

- HTTPS-only (SSL certificate)
- Content Security Policy headers
- Form validation and sanitization
- Anti-spam protection
- Privacy policy compliance

## Performance Optimization

- Image optimization
- Lazy loading
- Code splitting
- Minification
- Caching strategies

## Analytics

- Google Analytics integration
- SEO optimization
- Performance monitoring
- Conversion tracking

## License

ISC License - Feel free to use and modify for your own projects.