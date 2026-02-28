# Build and Deployment Commands

## Development
```bash
# Start development server
npm run dev

# View in browser
http://localhost:3000
```

## Production
```bash
# Build for production
npm run build

# Start production server
npm start

# View in browser
http://localhost:3000
```

## Quick Start (with version check)
```bash
# Safe start with Node.js version check
./start.sh
```

## Render.com Deployment
```bash
# Render automatically uses:
npm start

# Build command:
npm run build
```

## Commands Summary

| Command | Purpose | Environment |
|---------|---------|-------------|
| `npm run dev` | Development | Local |
| `npm run build` | Build production | Local/Render |
| `npm start` | Production server | Local/Render |
| `./start.sh` | Safe start with check | Local |

## Notes

- **Development**: Use `npm run dev` for hot reloading
- **Production**: Use `npm run build && npm start` for deployment
- **Render**: Uses same commands automatically
- **Node.js**: Must be >=20.9.0 for Next.js 16.1.6