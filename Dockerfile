# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if present)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining files into the image
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Run the Node.js application
CMD [ "node", "src/index.js" ]