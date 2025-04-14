# Portfolio Website - HTML Version


## Project Structure

\`\`\`
portfolio-html/
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── images/
│   └── projects/
│       ├── forum-project.jpg
│       ├── hackathon-b2.jpg
│       ├── hangman-2023.jpg
│       ├── hangman-web.jpg
│       ├── minecraft-server.jpg
│       ├── breakout-game.jpg
│       ├── poke-hamed.jpg
│       └── portfolio-website.jpg
└── index.html
\`\`\`

## Features

- Responsive design that works on all device sizes
- Dark/light mode toggle with persistent preference storage
- Smooth animations and transitions
- Project showcase with featured slider and grid
- Skills visualization with animated progress bars
- Contact form (demo only, requires backend integration for actual functionality)
- SEO optimized with proper meta tags

## How to Use

1. Download or clone this repository
2. Two project images (forum-project.jpg and poke-hamed.jpg) are already included. Replace the other placeholder images in the `images/projects/` directory with your actual project images
3. Update the project data in the `script.js` file to match your projects
4. Customize the content in `index.html` to reflect your personal information
5. Deploy to Netlify or any other static hosting service

## Deployment to Netlify

1. Sign up for a Netlify account at [netlify.com](https://www.netlify.com/)
2. Click "New site from Git" or drag and drop your project folder to the Netlify dashboard
3. If using Git, connect to your repository and select the branch to deploy
4. Configure build settings (not required for this static site)
5. Click "Deploy site"

## Customization

### Changing Colors

The color scheme can be modified in the `styles.css` file by changing the CSS variables in the `:root` selector.

### Adding New Projects

To add new projects, edit the `projectsData` array in the `script.js` file.

### Modifying Skills

To update your skills, edit the skill items in the `index.html` file under the skills section.

## Credits

- [Feather Icons](https://feathericons.com/) for the icon set
- [Inter Font](https://fonts.google.com/specimen/Inter) from Google Fonts
\`\`\`

Finally, let's create a Netlify configuration file to ensure smooth deployment:

\`\`\`toml file="netlify.toml"
# Netlify configuration file

[build]
  publish = "."

# Redirect all requests to index.html for SPA routing
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
