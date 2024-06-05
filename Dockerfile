# Stage 1: Build the React application
FROM node:16 AS build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY ./src ./src
COPY ./public ./public
RUN yarn build

# Stage 2: Serve the React application with Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Optional: Add a startup script if needed
COPY start.sh /start.sh
RUN chmod +x /start.sh

# Add ENTRYPOINT to ensure the startup script is always run
ENTRYPOINT ["/start.sh"]
