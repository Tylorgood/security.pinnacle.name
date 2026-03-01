FROM node:20.9.0-alpine

WORKDIR /app

# Install yarn
RUN npm install -g yarn

# Install dependencies
COPY package*.json ./
RUN yarn install --frozen-lockfile

# Copy source code
COPY . .

# Build the app
RUN yarn build

# Start the app
CMD ["yarn", "start"]