# Use the official Node.js image as the base image
FROM node:20

# Install xdg-utils
RUN apt-get update && apt-get install -y xdg-utils

# Set the working directory in the container
WORKDIR /app


