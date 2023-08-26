# ############################################################
# # Dockerfile to build backend node container image
# ############################################################

# Use the official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

COPY package*.json ./

# Install backend dependencies
RUN npm install

COPY . .

EXPOSE 3000

# Start the Node.js application
CMD ["node", "server.js"]