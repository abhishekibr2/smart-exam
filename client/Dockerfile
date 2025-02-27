# Use an official Node.js runtime as a parent image for the frontend
FROM node:18 AS builder

# Set the working directory in the container for the frontend
WORKDIR /app

# Copy package.json and package-lock.json for the frontend
COPY package*.json ./

# Install frontend dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of your frontend code to the container
COPY . .

# Build the Next.js application
RUN npm run build

# Use a smaller image for the production environment
FROM node:18 AS runner
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js

# Expose the port that your frontend application listens on
EXPOSE 3000

# Define the command to start your frontend
CMD ["npm", "run", "start"]
