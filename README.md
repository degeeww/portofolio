# Multimedia & IT Portfolio

Static website: HTML + CSS + vanilla JavaScript. No build step, no dependencies.
Open `index.html` in a browser, or deploy the whole folder (Netlify, GitHub Pages, Vercel).

## Structure
```
portfolio/
├── index.html            page markup (Home, Design, Photo & Video, Experience, Contact)
├── css/
│   ├── variables.css     color tokens (light/dark)
│   ├── base.css          layout, nav, hero, 3D scene, sections, gallery, footer
│   ├── components.css    buttons, timeline, contact page, About photo, quick facts
│   └── theme.css         final look: gradient background + neon blue accents
├── js/
│   ├── config.js         YOUR settings: WhatsApp, email, profile photo
│   ├── data.js           YOUR gallery works (images / videos)
│   ├── utils.js          App namespace + helpers ($, byId, toast)
│   ├── effects.js        cursor, magnetic buttons, 3D parallax, scroll reveal
│   ├── gallery.js        gallery render, filters, lightbox, session upload
│   ├── about.js          profile photo
│   ├── experience.js     timeline filter
│   ├── contact.js        message builder, WhatsApp/email, clock
│   ├── router.js         hash routing + intro loader
│   └── main.js           starts every module
└── assets/
    ├── images/           put photos and design images here
    └── videos/           put mp4 files here
```
Script order in `index.html` matters: config → data → utils → modules → main.

## What to edit
- Name / text: search `Your Name` and the page text in `index.html`
- Contact + photo: `js/config.js`
- Gallery works: `js/data.js` (set `src: 'assets/images/xxx.jpg'`)
- Social links: search `username` in `index.html`
- Colors: `css/variables.css` (`--ac`, `--ac2`)
