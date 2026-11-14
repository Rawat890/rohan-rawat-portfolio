# Rohan Rawat — Personal Developer Portfolio

A modern, responsive, component-based personal portfolio built with **React (JavaScript)**, **Tailwind CSS**, **Framer Motion**, and **Lucide Icons**.

## Folder Structure

```text
rohan-rawat-portfolio/
├── public/
├── src/
│   ├── assets/             # Custom SVG illustrations & placeholder project mockups (easy to replace)
│   ├── components/         # Modular UI sections & reusable components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Services.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   ├── ProjectModal.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolioData.js # All resume data, projects, links, and content in one central file
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start development server:**
   ```bash
   npm run dev
   ```
3. **Build for production:**
   ```bash
   npm run build
   ```

## How to Customize Assets & Links

- **Replace Images:** Drop your profile photo and project screenshots into `src/assets/` and update the image imports in `src/data/portfolioData.js` and `src/components/Hero.jsx` / `src/components/About.jsx`.
- **Update Resume Link:** Place your PDF resume inside `public/Rohan_Rawat_Resume.pdf` so the **"Download Resume"** button works out of the box.
- **Edit Content:** Every section's text, links, and tech tags live in `src/data/portfolioData.js`.
