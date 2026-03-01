FROM node:20.9.0-alpine

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
COPY package*.json ./
RUN pnpm install

# Copy source code
COPY . .

# Build the app
RUN pnpm run build

# Start the app
CMD ["pnpm", "start"]