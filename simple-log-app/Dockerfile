# Define the base image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Install the application dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Expose the application port
EXPOSE 5001

# Start the application
CMD [ "node", "index.js" ]
