# Use the official Node.js image
FROM node:14

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy local code to the container image
COPY . .

# Build the app
RUN npm run build

# Run the web server on port 3000
EXPOSE 3000
CMD [ "npm", "start" ]
