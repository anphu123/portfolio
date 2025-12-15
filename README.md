<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Huỳnh Mai An Phú - Portfolio

Personal portfolio showcasing mobile development projects and skills.

**Live Demo**: https://anphu123.github.io/portfolio

## Run Locally

**Prerequisites:** Node.js (v18 or higher)

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key

3. Run the app:
   ```bash
   npm run dev
   ```

## Deploy

### Automatic Deployment (GitHub Actions)

The portfolio automatically deploys to GitHub Pages when you push to the `main` branch.

Just commit and push your changes:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

The GitHub Actions workflow will automatically build and deploy your site.

### Manual Deployment

If you prefer to deploy manually:
```bash
npm run deploy
```

**Note**: On Windows, if you get a PowerShell execution policy error, run:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process
```

## GitHub Pages Setup

Make sure GitHub Pages is enabled in your repository settings:
1. Go to **Settings** > **Pages**
2. Under **Source**, select **GitHub Actions**
3. Your site will be available at `https://[username].github.io/portfolio`

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions
