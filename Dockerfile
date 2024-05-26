# Use the official Node.js image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm ci

# Copy the rest of the project files to the working directory
COPY . .

# Build the NestJS application
RUN npm run build

# Expose the port on which the application will run
EXPOSE 3000

# Run the application when the container starts
CMD ["npm", "run", "start:prod"]