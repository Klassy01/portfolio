# Deployment Guide

This guide explains how to set up and configure the CI/CD pipeline for the portfolio project.

## 🚀 Quick Setup

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Source", select **GitHub Actions**
4. Save the changes

The site will be automatically deployed at: `https://[username].github.io/portfolio/`

### 2. Verify Workflow Permissions

1. Go to **Settings** → **Actions** → **General**
2. Under "Workflow permissions", ensure:
   - **Read and write permissions** is selected
   - **Allow GitHub Actions to create and approve pull requests** is checked

## 🔧 Advanced Configuration

### Optional: Netlify Preview Deployments

To enable preview deployments for pull requests:

1. **Create a Netlify Account**: Sign up at [netlify.com](https://netlify.com)

2. **Create a New Site**: 
   - Connect your GitHub repository
   - Build settings will be handled by GitHub Actions

3. **Get Netlify Credentials**:
   - **Auth Token**: Go to User Settings → Personal Access Tokens → New access token
   - **Site ID**: Found in Site Settings → General → Site information

4. **Add GitHub Secrets**:
   - Go to repository **Settings** → **Secrets and variables** → **Actions**
   - Add the following repository secrets:
     - `NETLIFY_AUTH_TOKEN`: Your personal access token
     - `NETLIFY_SITE_ID`: Your site ID

## 📊 Monitoring & Status

### Workflow Status Badges

Add these badges to your README to show build status:

```markdown
![CI/CD Pipeline](https://github.com/Klassy01/portfolio/workflows/CI/CD%20Pipeline/badge.svg)
![Security Check](https://github.com/Klassy01/portfolio/workflows/Security%20&%20Dependency%20Check/badge.svg)
```

### Viewing Deployments

- **Production**: Check the **Actions** tab for deployment status
- **GitHub Pages**: Visit the **Settings** → **Pages** for deployment URLs
- **Netlify Previews**: Preview links will be added as comments on PRs

## 🛠️ Workflow Details

### CI/CD Pipeline (`ci-cd.yml`)

**Triggers:**
- Push to `main` or `develop` branches
- Pull requests to `main` branch

**CI Stage (runs on all triggers):**
- Tests on Node.js 18.x and 20.x
- Runs ESLint for code quality
- Builds the project
- Uploads artifacts for deployment

**CD Stage (only on main branch pushes):**
- Deploys to GitHub Pages
- Updates live site automatically

### Preview Deployment (`preview.yml`)

**Triggers:**
- Pull requests to `main` branch

**Features:**
- Creates temporary preview deployments
- Adds preview URL as PR comment
- Automatically cleans up when PR is closed

### Security Check (`security.yml`)

**Triggers:**
- Weekly schedule (Mondays at 9 AM UTC)
- Push to `main` branch
- Pull requests to `main` branch

**Features:**
- Security audit of dependencies
- Dependency review for pull requests
- Checks for outdated packages

## 🔒 Security Best Practices

1. **Dependency Management**:
   - Weekly automated security audits
   - Dependency review on all PRs
   - Regular updates for outdated packages

2. **Branch Protection**:
   - Enable branch protection rules for `main`
   - Require status checks to pass
   - Require pull request reviews

3. **Secret Management**:
   - Never commit sensitive data
   - Use GitHub Secrets for API keys
   - Rotate secrets regularly

## 🚨 Troubleshooting

### Common Issues

1. **Deployment Fails**:
   - Check GitHub Pages is enabled
   - Verify workflow permissions
   - Review build logs in Actions tab

2. **Build Errors**:
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Review ESLint errors

3. **Preview Deployment Not Working**:
   - Verify Netlify secrets are set correctly
   - Check Netlify site configuration
   - Review workflow logs

### Getting Help

1. Check the **Actions** tab for detailed logs
2. Review the **Issues** tab for known problems
3. Create a new issue if you encounter problems

## 📈 Performance Optimization

The CI/CD pipeline includes several optimizations:

- **Caching**: Node modules are cached between runs
- **Parallel Jobs**: Different Node.js versions run in parallel
- **Artifact Management**: Build artifacts are automatically cleaned up
- **Conditional Deployment**: Production deployment only on main branch

## 🔄 Maintenance

### Regular Tasks

1. **Weekly**: Review security audit results
2. **Monthly**: Update dependencies
3. **Quarterly**: Review and update workflow configurations

### Updating Workflows

1. Make changes to workflow files in `.github/workflows/`
2. Test changes on a feature branch first
3. Monitor the first few runs after updates
4. Update documentation if workflow behavior changes
