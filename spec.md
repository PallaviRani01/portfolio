# Pallavi Rani Portfolio

## Current State
- Futuristic cyberpunk portfolio with dark theme, Three.js particle background, neon cyan/purple accents
- Sections: Hero, About, Skills, Projects, Timeline, Achievements, Contact, Footer
- All content from portfolio.json
- No dark/light theme toggle; single dark theme
- Skills shown as simple glass cards with skill-badge spans
- Project cards have 3D tilt but no images
- Contact section has basic icons (emoji) and a form
- Achievements/Certs shown in simple glass cards with basic hover

## Requested Changes (Diff)

### Add
- Dark/Light theme toggle (sun/moon icon) in Navbar; saves to localStorage; CSS variables switch between deep navy/charcoal (dark) and white/light-gray (light)
- Project card images at top of each card — data/tech themed SVG banners (charts, dashboards, databases) generated per project
- Skill level tags (Beginner/Intermediate/Advanced) on each skill pill
- Color-coded skill categories: languages=blue, tools=green, databases=purple, frameworks=orange, soft skills=pink
- Bounce-in / scroll reveal animations on skill pills
- Hover glow effect on skill pills
- Animated contact icons (SVG icons for email, LinkedIn, GitHub, phone) with pulse/float animations
- Contact section subtle gradient-wave background animation
- Fade-in scroll animation on contact cards
- Achievement cards: golden shimmer/glow, trophy icons, flip-on-hover reveal animation
- Certificate cards: ribbon/badge design, timeline-style layout, medal icons, shimmer effect

### Modify
- About.tsx: replace `about` prop text in portfolio.json with new bio
- Navbar.tsx: add theme toggle button (sun/moon SVG)
- Skills.tsx: full redesign with animated pills, color-coded categories, scroll bounce-in, level tags
- Projects.tsx: add themed banner image at top of each project card
- Contact.tsx: replace emoji icons with animated SVG icons, add gradient-wave bg, scroll fade-in
- Achievements.tsx: flip-card achievements with golden shimmer, timeline-style certificates
- index.css: add light-mode CSS variable overrides under `.light` class; shimmer, flip-card, wave-animation, bounce-in keyframes
- App.tsx: manage theme state (dark/light), apply `.light` class to root, pass theme toggle to Navbar

### Remove
- Nothing removed

## Implementation Plan
1. Update portfolio.json about text with new bio
2. Update index.css: light mode vars, new keyframes (shimmer, flip, wave, bounce-in)
3. Update App.tsx: theme state with localStorage, pass toggleTheme/isDark to Navbar
4. Update Navbar.tsx: sun/moon toggle button
5. Update Skills.tsx: animated pills with level tags, color coding, scroll intersection observer
6. Update Projects.tsx: add SVG data/tech banner per card
7. Update Contact.tsx: animated SVG icons, gradient-wave bg, scroll fade-in
8. Update Achievements.tsx: flip-card achievements with gold shimmer, timeline certs with ribbon badges
