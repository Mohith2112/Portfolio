# 3D Developer Portfolio

An immersive, interactive developer portfolio built with **Next.js 16**, **React Three Fiber**, and **Tailwind CSS v4**. Features a 3D mechanical keyboard hero scene, seasonal themes, smooth scroll animations, and a fully responsive design.

**Built by Vattikuti Mohit** &nbsp;|&nbsp; **[LinkedIn](https://www.linkedin.com/in/mohit-vattikuti/)** &nbsp;|&nbsp; **[GitHub](https://github.com/Mohith2112)**

---

## Highlights

- **Interactive 3D Keyboard** — A full mechanical keyboard rendered with React Three Fiber and Three.js. Keys react to real keypresses with physics-based animations and sound effects.
- **Seasonal Themes** — Four complete visual themes (Winter, Spring, Summer, Autumn) that re-skin the entire UI — colours, gradients, and 3D scene lighting — with a single click.
- **Project Showcases** — Modal dialogs with image carousels, tech stack chips, and links to live demos and source code.
- **Smooth Scroll & Reveal Animations** — Powered by [Lenis](https://github.com/darkroomengineering/lenis) for buttery smooth scrolling with intersection-observer-based reveal effects.
- **Custom Cursor & Magnetic Targets** — A custom cursor that morphs on interactive elements, with magnetic snap behaviour on buttons.
- **Responsive & Mobile-First** — Optimised for recruiters reviewing on phones. WebGL performance and touch interactions are first-class concerns.
- **Security Headers** — HSTS, X-Frame-Options, Content-Type-Options, Referrer-Policy, and Permissions-Policy configured out of the box.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| 3D | [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + [@react-three/drei](https://github.com/pmndrs/drei) + [Three.js](https://threejs.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Scroll | [Lenis](https://github.com/darkroomengineering/lenis) |
| Icons | [Simple Icons](https://simpleicons.org/) (tech logos on 3D keycaps) |
| Language | TypeScript |
| Deploy | Vercel / Docker |

## Getting Started

### Prerequisites

- **Node.js** 20+
- **npm** 10+

### Installation

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Docker

The project includes a multi-stage Dockerfile optimised for production (standalone output, ~100 MB final image):

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## Project Structure

```
├── app/
│   ├── globals.css        # Tailwind + CSS custom properties (seasonal themes)
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Home page with all sections
├── components/
│   ├── FrozenKeyboard.tsx # 3D keyboard scene (R3F)
│   ├── FrozenBackground.tsx # Animated background particles
│   ├── Carousel.tsx       # Image carousel for project modals
│   ├── ProjectModal.tsx   # Fullscreen project detail dialog
│   ├── SeasonProvider.tsx # Seasonal theme context
│   ├── SeasonPicker.tsx   # Theme switcher UI
│   ├── LanguageProvider.tsx # i18n context (single-language, kept for extensibility)
│   ├── CustomCursor.tsx   # Custom cursor with hover states
│   ├── MagneticTargets.tsx# Magnetic snap on interactive elements
│   ├── Reveal.tsx         # Scroll-triggered reveal animations
│   ├── SectionNav.tsx     # Dot navigation sidebar
│   ├── ScrollProgress.tsx # Scroll progress indicator
│   ├── CopyEmail.tsx      # Copy-to-clipboard button
│   └── smooth-scroll.tsx  # Lenis smooth scroll wrapper
├── lib/
│   ├── i18n.ts             # Text dictionary
│   ├── seasons.ts          # Season theme definitions
│   └── skills.ts           # Tech-stack icons for the 3D keyboard
├── public/
│   ├── fonts/              # 3D text typefaces
│   ├── sounds/              # Keyboard sound effects
│   └── cv.pdf / cv_en.pdf   # Resume
├── Dockerfile             # Multi-stage production build
├── next.config.ts         # Standalone output + security headers
└── package.json
```

## Customisation

### Adding a Project

Projects are defined in `app/page.tsx` in the `projects` array. Each entry supports:

```typescript
{
  num: "04",
  name: { es: "My Project", en: "My Project" },
  stack: ["Next.js", "TypeScript"],
  desc: { es: "Short description", en: "Short description" },
  details: { es: "Long description...", en: "Long description..." },
  url: "https://myproject.com",          // optional — adds "Visit demo" button
  github: "https://github.com/user/repo", // optional — adds "View Code" button
  media: ["/projects/my-project/1.png"], // optional — carousel screenshots
  highlights: ["react", "python"],       // simple-icons slugs for 3D keyboard
  badge: { es: "In progress", en: "In progress" }, // optional status badge
  align: "left",                         // card alignment
  section: "project4",                   // data attribute for scroll nav (also add it to SectionNav.tsx)
}
```

### Changing Themes

Seasonal colour tokens are defined as CSS custom properties in `app/globals.css` under `[data-season="..."]` selectors. Edit or add new seasons there.

### Content

All UI strings live in `lib/i18n.ts` as a flat dictionary. The language picker has been removed from the header for this single-language build, but the `{ es, en }` leaf structure is kept so bilingual support can be switched back on later.

## Deployment

### Vercel (Recommended)

Push this repo to GitHub and import it at [vercel.com/new](https://vercel.com/new).

### Docker / Self-Hosted

The included `Dockerfile` produces a standalone Next.js image. Works with any container platform (Railway, Fly.io, Coolify, etc.):

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## Performance

- **Standalone output** — No `node_modules` in production; the Docker image is ~100 MB.
- **Lazy loading** — Project screenshots use native lazy loading.
- **Font optimisation** — Uses `next/font` for zero-layout-shift web fonts.
- **Turbopack** — Sub-300ms dev server cold starts.

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Vattikuti Mohit**

- [LinkedIn](https://www.linkedin.com/in/mohit-vattikuti/)
- [GitHub](https://github.com/Mohith2112)
- [HackerRank](https://www.hackerrank.com/profile/23A31A43J0)
- [LeetCode](https://leetcode.com/u/Mohit_vattikuti/)
