# Start Commands for Pinnacle Security Website

## Development Mode
```bash
npm run dev
```

## Production Mode
```bash
npm run build && npm start
```

## Quick Start Script
```bash
./start.sh
```

## Commands Summary

| Command | Purpose | Required Node.js Version |
|---------|---------|---------------------------|
| `npm run dev` | Development server | >=20.9.0 |
| `npm run build` | Production build | >=20.9.0 |
| `npm start` | Production server | >=20.9.0 |
| `./start.sh` | Safe start with version check | >=20.9.0 |

## Notes

- **Node.js Requirement**: Next.js 16.1.6 requires Node.js >=20.9.0
- **Current Version**: You're using Node.js 18.20.4 (not supported)
- **Solution**: Update Node.js or use the quick start script
- **Development**: Use `npm run dev` for hot reloading
- **Production**: Use `npm run build && npm start` for deployment

## Quick Start

```bash
# Navigate to project
cd security.pinnacle.name

# Install dependencies (if not already installed)
npm install

# Start development server
./start.sh
```

The website will be available at `http://localhost:3000`

---

## Render.com Deployment

### Render Configuration
```yaml
# render.yaml
build:
  command: npm run build
  publish: .next
  environment:
    NODE_VERSION: 20.9.0
```

### Render Start Commands
```bash
# Render will automatically use:
npm start

# Or for custom start:
node -r esm server.js
```

### Render Environment
- **Node.js**: 20.9.0+ (automatically used)
- **Build Command**: `npm run build`
- **Start Command**: `npm start`
- **Static Assets**: Served from `.next/static`

### Render DNS Setup
1. Add custom domain in Render
2. Configure DNS with CNAME record:
   - Name: `security`
   - Value: `your-render-app.onrender.com`
3. Point `security.pinnacle.name` to Render

### Render Build Commands
```bash
# In Render build settings:
# Build Command: npm run build
# Start Command: npm start
# Environment: Node.js 20.9.0
```

### Render Static Site
```bash
# For static export (if needed)
npm run build && npm run export
# Then serve from out/ directory
```

### Render Custom Domain
```bash
# Add custom domain in Render dashboard
# Configure DNS:
# security.pinnacle.name → CNAME → your-app.onrender.com
```

## Production Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Test Locally
```bash
npm run build && npm start
```

## Development Workflow

### Local Development
```bash
npm run dev
```

### Testing
```bash
npm run build
npm start
```

### Deployment
```bash
# Build and deploy to Render
npm run build
# Upload to Render
# Configure custom domain
```

## Troubleshooting

### Node.js Version Issues
```bash
# Check Node.js version
node --version

# If version <20.9.0:
# 1. Update Node.js
# 2. Use nvm: nvm use 20
# 3. Use quick start script
```

### Build Errors
```bash
# Clear node_modules
rm -rf node_modules package-lock.json

# Reinstall
npm install

# Try again
npm run build
```

### Runtime Errors
```bash
# Check logs
npm run build
npm start

# Check for missing dependencies
npm install
```

## Summary

- **Development**: `npm run dev` → localhost:3000
- **Production**: `npm run build && npm start` → production server
- **Render**: Uses same commands automatically
- **Custom Domain**: Point `security.pinnacle.name` to Render app
- **Node.js**: Must be >=20.9.0 for Next.js 16.1.6