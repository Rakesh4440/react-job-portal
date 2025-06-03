# Use official Node.js image
FROM node:18

# Create app directory inside container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy backend source code
COPY . .

# Expose backend port
EXPOSE 4000

# Start backend server
CMD ["npm", "run", "dev"]
