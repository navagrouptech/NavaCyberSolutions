# NAVA Cyber Solutions - Official Website

> **Secure Today. Stronger Tomorrow.**  
> Official web platform for **NAVA Cyber Solutions** - cybersecurity consulting, secure software engineering, practical AI applications, and accessible technology education.

---

## 1. Project Overview

- **Brand Name:** NAVA Cyber Solutions
- **Founder:** **ABHIRAM ALLADA - Founder**
- **Featured Project:** [Guess Proof AI](https://guess-proof-ai.vercel.app/)
- **Target Hosting:** Firebase Hosting (`navacybersolutions.web.app`)
- **Visual Design Standard:** Apple-inspired minimalist polish with cybersecurity credibility.

---

## 2. Directory Structure

```
d:/NAVA_Cyber_Solutions/
├── index.html                   # Main entry point & single-page application router shell
├── styles.css                   # Master stylesheet (Apple design system, CSS 3D shield, tokens)
├── app.js                       # Modular router, interactive heuristic engine, Academy & form logic
├── 404.html                     # Custom 404 error page for Firebase Hosting
├── robots.txt                   # Search crawler directives
├── sitemap.xml                  # XML sitemap covering all routes & pages
├── firebase.json                # Firebase Hosting configuration with security headers & caching
├── assets/
│   ├── logos/
│   │   └── nava-logo.png        # Official high-resolution NAVA gold emblem & wordmark
│   └── images/
│       └── brand-showreel.mp4   # Brand video asset
├── pages/
│   ├── privacy-policy.html      # Standalone SEO-indexable Privacy Policy
│   └── terms-of-service.html    # Standalone SEO-indexable Terms of Service
└── README.md                    # Project documentation & deployment manual
```

---

## 3. Features & Architecture

### Core Navigation & Routing
- Global fixed/sticky glassmorphism topbar (`backdrop-filter: blur(20px)`).
- Client-side hash routing supporting:
  - `#home`: Hero, Commitments, Intro, 6 Service Cards, Featured Project, Why NAVA, Academy Band, Contact CTA.
  - `#about`: Company mission, vision, ethical principles, and founder card (**ABHIRAM ALLADA - Founder**).
  - `#services`: Full service catalog.
  - `#service/:id`: 6 dedicated service detail views (`cybersecurity-consulting`, `web-app-security`, `secure-web-dev`, `vulnerability-assessment`, `ai-solutions`, `technical-consulting`).
  - `#projects`: Project showcase with Guess Proof AI as primary feature and roadmap for future initiatives.
  - `#project/guess-proof-ai`: Dedicated internal case study with problem statement, architecture, zero-knowledge privacy guarantees, and live application launcher.
  - `#academy`: Academy portal with live keyword search, 7 category filter chips, curriculum cards, and detail modal.
  - `#contact`: Validated contact form with service pre-selection, character constraints, and demo feedback.
  - `#privacy` & `#terms`: In-app and standalone legal pages.
  - Fallback 404 view for undefined routes.
- Browser forward/back history support with dynamic `document.title` updates on each transition.

### Featured Project: Guess Proof AI
- Integrated two separate user flows:
  - **Button 1 (About the Project):** Navigates to the internal case study `#project/guess-proof-ai`.
  - **Button 2 (Open Application):** Opens `https://guess-proof-ai.vercel.app/` in a new tab with `target="_blank" rel="noopener noreferrer"`.
- **Interactive In-Page Heuristic Sandbox:** Live client-side password entropy and pattern calculator demonstrating keyboard walk penalties, character variety, and zero-knowledge privacy.

### Contact Form Handling
- Frontend validation for required fields, valid email format regex, minimum message length, and mandatory consent checkbox.
- Development Demo banner preventing false claims of email dispatch until a live backend service is connected.

---

## 4. Running Locally

No npm build step or complex compiler is required. The website is built with clean, modern web standards.

### Option A: Using Python's Built-in Server
```bash
# In the project directory:
python -m http.server 8000
```
Then visit: `http://localhost:8000/`

### Option B: Using Node / npx serve
```bash
npx -y serve .
```

### Option C: Direct Browser Launch
Double click `index.html` to open directly in any modern browser (Chrome, Edge, Safari, Firefox).

---

## 5. Firebase Hosting Deployment

### Step 1: Install or Update Firebase CLI
```bash
npm install -g firebase-tools
```

### Step 2: Login to Firebase
```bash
firebase login
```

### Step 3: Initialize Project (if not already linked)
```bash
firebase init hosting
```
- Select your Firebase Project (`navacybersolutions`).
- When prompted for the public directory, specify: `.`
- Configure as a single-page app: `No` (since `index.html`, `404.html`, and `pages/` are distinct files with clean URLs).
- Do not overwrite `index.html` or `404.html`.

### Step 4: Deploy
```bash
firebase deploy --only hosting
```
Your live site will be deployed to: `https://navacybersolutions.web.app`

---

## 6. Pre-Launch Configuration Checklist

Before promoting the site publicly:
1. **Official Contact Email:** Replace `contact@navacybersolutions.com` with the monitored company mailbox.
2. **Form Backend:** Connect the contact form submit handler in `app.js` to Firebase Cloud Functions, Formspree, or your backend API.
3. **Academy Course Links:** Replace the preview curriculum outlines in `ACADEMY_RESOURCES` in `app.js` with active LMS or workshop registration links as they become available.
4. **Legal Review:** Have counsel review `pages/privacy-policy.html` and `pages/terms-of-service.html` against your jurisdiction's requirements.

---

## 7. Verification & Testing Completed

- [x] **Navigation & Routes:** Direct entry to `#home`, `#about`, `#services`, `#service/:id`, `#projects`, `#project/guess-proof-ai`, `#academy`, `#contact`, `#privacy`, and `#terms` tested.
- [x] **Guess Proof AI Links:** Separate routes for internal case study and external live application (`https://guess-proof-ai.vercel.app/`) with `rel="noopener noreferrer"`.
- [x] **Mobile Responsiveness:** Viewports verified from 320px mobile to 1920px desktop.
- [x] **Accessibility:** Proper heading structure (`h1`-`h4`), skip link, visible focus outlines, `aria-expanded` on mobile drawer, and `prefers-reduced-motion` CSS support.
- [x] **SEO & Metadata:** Structured OpenGraph, Twitter Cards, and JSON-LD Organization schema implemented.
- [x] **Security:** Zero client-side API secrets, zero external script dependencies, and hardened HTTP headers configured in `firebase.json`.
