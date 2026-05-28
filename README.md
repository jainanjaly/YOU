# Anjaly Jain — Portfolio

Personal portfolio site. Editorial, light-themed, a little opinionated.

**Stack:** React · Vite · Tailwind CSS · Framer Motion · React Router

Live sections: Home, Timeline, Projects, Skills, Experience, Certifications, Awards, Publications, Contact.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Project structure

```
index.html              # entry, font links
vite.config.js          # Vite + React configuration
tailwind.config.js      # design tokens (colors, fonts, animations)
src/
  main.jsx              # React entry
  App.jsx               # routes
  Layout.jsx            # nav + page transitions + footer
  index.css             # base styles + utility classes (.eyebrow, .display-serif…)
  components/           # Hero, Nav, Timeline, Contact, Ticker, etc.
  pages/                # one file per route
public/
  resume.pdf            # served as /resume.pdf
  Anjaly_Resume.pdf     # linked from the Contact section
  projects/             # project screenshots
  awards/  certificates/
```

## Customizing content

Most copy lives directly inside the component for that section:

- Hero headline & intro — `src/components/Hero.jsx`
- Timeline entries — `src/components/Timeline.jsx`
- Projects list — `src/components/Projects.jsx`
- Skills — `src/components/Skills.jsx`
- Experience — `src/components/Experience.jsx`
- Certifications — `src/components/Certifications.jsx`
- Awards — `src/components/Awards.jsx`
- Publications — `src/components/Publications.jsx`
- Contact links & résumé — `src/components/Contact.jsx`

Drop your real résumé into `public/Anjaly_Resume.pdf` — the **Download résumé** button already points there.

## Design tokens

Colors and fonts are defined in `tailwind.config.js`. Tokens used across the site:

- `bg` / `card` / `warm` — paper, surface, warm-gray section
- `ink` / `ink-soft` / `muted` — text
- `pink` / `violet` — accents (used sparingly)
- `font-serif` — Playfair Display (display headlines via `.display-serif`)
- `font-sans` — Inter (body)
- `font-mono` — Space Mono (small labels only)

## Notes

- The boot screen only runs once per browser session (cleared when you close the tab).
- The footer's **Last updated on …** date is computed at runtime using the current date.
- Search the codebase for `TODO:` to find spots where copy or links still need refining.

## License

Personal site. Code is shared as-is; please don't redistribute the content or images.
