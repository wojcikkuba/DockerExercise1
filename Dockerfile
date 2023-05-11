# Stage 1
FROM node:14.17.0-alpine AS builder

# Copy files to container
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Build app
RUN npm run build

# Stage 2
FROM node:14.17.0-alpine

# Environment settings
ENV NODE_ENV=production
EXPOSE 8080
HEALTHCHECK CMD curl --fail http://localhost:8080/ || exit 1

# Copy files from first stage
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package*.json ./

# Install modules
RUN npm install --only=production

# Author
LABEL author="Jakub Wojcik"

# Run server
CMD ["npm","start"]
