# Auto Transfer

A Next.js application for wallet transfers.

## Deployment on Render

This project is configured to deploy as a static site on Render.

### Prerequisites

- A Render account
- Git repository with your code

### Deployment Steps

1. **Connect your repository to Render:**
   - Go to [render.com](https://render.com)
   - Click "New +" and select "Static Site"
   - Connect your Git repository

2. **Configure the deployment:**
   - **Name:** auto-transfer (or your preferred name)
   - **Build Command:** `npm install`
   - **Publish Directory:** `public_html`
   - **Environment:** Static Site

3. **Deploy:**
   - Click "Create Static Site"
   - Render will automatically build and deploy your site

### Alternative Manual Configuration

If you prefer to configure manually without the `render.yaml`:

- **Build Command:** `npm install`
- **Publish Directory:** `public_html`
- **Environment Variables:** 
  - `NODE_ENV`: `production`

### Local Development

To run locally:

```bash
npm install
npm start
```

The site will be available at `http://localhost:3000`

## File Structure

- `public_html/` - Built Next.js files ready for deployment
- `package.json` - Project configuration
- `render.yaml` - Render deployment configuration 