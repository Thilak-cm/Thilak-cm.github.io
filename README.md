# AI Work Portfolio

A modern, responsive static website showcasing AI and Machine Learning projects, built for GitHub Pages.

## Features

- 🎨 Modern, clean UI/UX design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Smooth animations and transitions
- 🚀 Optimized for GitHub Pages
- 🎯 Easy to customize and extend

## Setup for GitHub Pages

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under **Source**, select **Deploy from a branch**
   - Choose **main** branch and **/ (root)** folder
   - Click **Save**

3. **Your site will be live at:**
   `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Customization

### Adding Projects

Edit the `script.js` file and add projects to the `projectsData` array:

```javascript
const projectsData = [
    {
        title: "Your Project Title",
        description: "Project description here",
        tags: ["Python", "TensorFlow", "NLP"],
        image: "path/to/image.jpg", // optional
        projectLink: "https://your-project-link.com", // optional
        githubLink: "https://github.com/yourusername/project" // optional
    }
];
```

### Updating Contact Information

Edit the contact section in `index.html` (around line 120) to update your email, LinkedIn, and GitHub links.

### Changing Colors

Edit the CSS variables in `styles.css` (at the top of the file) to customize the color scheme:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    /* ... */
}
```

### Updating About Section

Edit the about section in `index.html` to add your personal information and skills.

## File Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # All styles
├── script.js           # JavaScript functionality
├── README.md           # This file
└── .gitignore          # Git ignore file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

