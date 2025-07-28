# David's Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. This portfolio showcases my projects, skills, internships, and provides a way to get in touch.

## 🚀 Features

- **Responsive Design**: Works seamlessly across all devices
- **Modern Tech Stack**: Built with React 19, Vite, and Tailwind CSS
- **Interactive UI**: Smooth animations with Framer Motion
- **Contact Form**: Integrated with EmailJS for direct communication
- **Fast Loading**: Optimized build with Vite

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS
- **Icons**: React Icons, Lucide React
- **Animations**: Framer Motion
- **Email**: EmailJS
- **Linting**: ESLint
- **Deployment**: GitHub Pages with CI/CD

## 🏗️ Development

### Prerequisites
- Node.js (version 18.x or 20.x)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Klassy01/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 CI/CD Pipeline

This project uses GitHub Actions for automated testing, building, and deployment:

### Workflows

1. **CI/CD Pipeline** (`.github/workflows/ci-cd.yml`)
   - **Triggers**: Push to `main`/`develop`, PRs to `main`
   - **CI Stage**: 
     - Tests on Node.js 18.x and 20.x
     - Runs ESLint checks
     - Builds the project
     - Uploads build artifacts
   - **CD Stage**: 
     - Deploys to GitHub Pages (main branch only)
     - Available at: https://klassy01.github.io/portfolio/

2. **Preview Deployment** (`.github/workflows/preview.yml`)
   - **Triggers**: Pull requests to `main`
   - **Features**: 
     - Creates preview deployments on Netlify
     - Adds deployment link as PR comment
     - Automatically updates on new commits

3. **Security & Dependency Check** (`.github/workflows/security.yml`)
   - **Triggers**: Weekly schedule, pushes, PRs
   - **Features**: 
     - Security audit of dependencies
     - Dependency review for PRs
     - Checks for outdated packages

### Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The deployment process:

1. Code is pushed to `main` branch
2. GitHub Actions runs CI checks
3. If all checks pass, the site is built and deployed
4. Site becomes available at: https://klassy01.github.io/portfolio/

### Setup Instructions for Deployment

1. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select "GitHub Actions" as source

2. **Optional: Setup Netlify Preview** (for PR previews):
   - Create a Netlify account
   - Add repository secrets:
     - `NETLIFY_AUTH_TOKEN`: Your Netlify personal access token
     - `NETLIFY_SITE_ID`: Your Netlify site ID

## 📁 Project Structure

```
portfolio/
├── public/           # Static assets
├── src/
│   ├── components/   # React components
│   ├── assets/       # Images, documents
│   ├── App.jsx       # Main app component
│   └── main.jsx      # Entry point
├── .github/
│   └── workflows/    # CI/CD pipeline definitions
├── package.json      # Dependencies and scripts
├── vite.config.js    # Vite configuration
└── tailwind.config.js # Tailwind CSS configuration
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes and commit: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

Feel free to reach out if you have any questions or suggestions!

- **Website**: [https://klassy01.github.io/portfolio/](https://klassy01.github.io/portfolio/)
- **GitHub**: [@Klassy01](https://github.com/Klassy01)
- **Email**: [Contact through the portfolio website](https://klassy01.github.io/portfolio/)
