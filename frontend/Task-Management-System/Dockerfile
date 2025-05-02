# Stage 1 - Build the frontend app
FROM node:16 as build

WORKDIR /app

COPY package*.json ./ 
RUN npm install

COPY . . 
RUN npm run build

# Stage 2 - Nginx for serving static files
FROM nginx:alpine

# Create the directory explicitly
RUN mkdir -p /usr/share/nginx/html

# Copy the build files into the Nginx directory
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
