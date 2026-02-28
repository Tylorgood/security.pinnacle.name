# Render Configuration for Pinnacle Security Website

## Build Configuration

### render.yaml
```yaml
# render.yaml
build:
  command: npm run build
  publish: .next
  environment:
    NODE_VERSION: 20.9.0
```

### Alternative: Render Dashboard
```yaml
# Manual configuration in Render dashboard
build Command: npm run build
Start Command: npm start
Environment: Node.js 20.9.0
Static Files: .next/static
```

## Start Commands for Render

### Automatic Start
```bash
# Render automatically uses:
npm start
```

### Custom Start (if needed)
```bash
# For custom start command
node -r esm server.js
```

## DNS Configuration

### Add Custom Domain
1. Go to Render Dashboard → Your App → Settings → Custom Domains
2. Add `security.pinnacle.name`
3. Copy the CNAME record provided by Render

### DNS Setup
```
# DNS Record Type: CNAME
# Name: security
# Value: your-app.onrender.com
# TTL: 300
```

### Point Domain
1. Go to your domain registrar (where pinnacle.name is hosted)
2. Add CNAME record for `security` subdomain
3. Point to your Render app domain

## Build Commands

### Render Build
```bash
# Build command executed by Render:
npm run build
```

### Build Process
1. Install dependencies
2. Run Next.js build
3. Generate static assets
4. Create optimized bundles

## Start Commands

### Render Start
```bash
# Start command executed by Render:
npm start
```

### Start Process
1. Start Next.js production server
2. Serve static files
3. Enable HTTPS
4. Handle requests

## Environment Variables

### Render Environment
```yaml
# Environment variables in Render dashboard:
NODE_ENV: production
NEXT_PUBLIC_SITE_URL: https://security.pinnacle.name
```

### Custom Variables
```yaml
# Add these in Render dashboard:
NEXT_PUBLIC_API_URL: https://api.pinnacle.security
NEXT_PUBLIC_GA_ID: G-XXXXXXXXXX
```

## Static Site Generation

### Next.js Static Export
```bash
# For static site generation:
npm run build && npm run export
```

### Render Static Site
```yaml
# For static site:
build:
  command: npm run build && npm run export
  publish: out
```

## SSL Certificate

### Automatic SSL
- Render automatically provisions SSL certificates
- HTTPS enabled by default
- No manual configuration needed

## Custom Domain

### Setup Process
1. Add custom domain in Render
2. Configure DNS with CNAME record
3. Wait for DNS propagation (2-48 hours)
4. SSL certificate automatically provisioned

### Verification
```bash
# Check DNS propagation
dig security.pinnacle.name

# Test SSL
curl -I https://security.pinnacle.name
```

## Deployment Workflow

### Manual Deployment
```bash
# 1. Build
npm run build

# 2. Deploy to Render (via Git)
# Push to GitHub → Render auto-deploys

# 3. Configure custom domain
# Add in Render dashboard
```

### Automatic Deployment
```bash
# 1. Connect GitHub repository to Render
# 2. Enable auto-deploy on push
# 3. Configure build commands
# 4. Set up custom domain
```

## Troubleshooting

### Build Failures
```bash
# Check build logs in Render
# Common issues:
# - Node.js version mismatch
# - Missing dependencies
# - Build configuration errors
```

### Start Failures
```bash
# Check start logs in Render
# Common issues:
# - Port conflicts
# - Missing environment variables
# - Runtime errors
```

### DNS Issues
```bash
# Check DNS propagation
dig security.pinnacle.name

# Check CNAME record
nslookup security.pinnacle.name
```

## Summary

- **Build Command**: `npm run build` (automatic)
- **Start Command**: `npm start` (automatic)
- **Node.js**: 20.9.0+ (automatic)
- **SSL**: Automatic with custom domain
- **DNS**: CNAME record to Render app
- **Custom Domain**: `security.pinnacle.name` → Render app

## Quick Start for Render

1. **Create Render App**
   - Choose Static Site or Web Service
   - Connect GitHub repository
   - Set build and start commands

2. **Configure Build**
   - Build Command: `npm run build`
   - Start Command: `npm start`
   - Node.js: 20.9.0

3. **Add Custom Domain**
   - Go to Settings → Custom Domains
   - Add `security.pinnacle.name`
   - Copy CNAME record

4. **Configure DNS**
   - Go to domain registrar
   - Add CNAME record for `security`
   - Point to Render app domain

5. **Deploy**
   - Push to GitHub
   - Render auto-deploys
   - Wait for DNS propagation

6. **Test**
   - Visit `https://security.pinnacle.name`
   - Check SSL certificate
   - Verify functionality