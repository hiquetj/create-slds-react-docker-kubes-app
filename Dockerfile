# The Node version we'll be running for our version of React
FROM node:8.2.1

# Create directory of our files
RUN mkdir /app
WORKDIR /app
COPY . .

# Install dependencies
RUN npm install --silent

# Build our production app
RUN npm run buildDev

# Environment properties
ENV PORT=8184

# Run the app
CMD ["npm", "start"]

# Expose port we want our UI to run on
EXPOSE 8184