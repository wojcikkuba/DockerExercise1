# Stage 1
FROM node:20.1-alpine3.16 AS builder

# Copy files to container
WORKDIR /app
COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm \ 
	npm install
COPY . .

# Stage 2
FROM node:20.1-alpine3.16

# Update and install curl
RUN apk update && apk --no-cache add curl

# Copy files from first stage
WORKDIR /app
COPY --from=builder /app ./

# Install modules
RUN --mount=type=cache,target=/root/.npm \
	npm install --only=production

# Environment settings
EXPOSE 8080
HEALTHCHECK CMD curl --fail http://localhost:8080/ || exit 1

# Author
LABEL author="Jakub Wojcik"

# Run server
CMD ["npm","start"]
