# Use more stable Node version
FROM node:20-bookworm-slim AS development-dependencies-env
COPY package*.json ./app/
WORKDIR /app
# Clear npm cache and install
RUN npm cache clean --force && npm ci --legacy-peer-deps

FROM node:20-bookworm-slim AS production-dependencies-env
COPY package*.json ./app/
WORKDIR /app
RUN npm cache clean --force && npm ci --omit=dev --legacy-peer-deps

FROM node:20-bookworm-slim AS build-env
COPY . /app/
COPY --from=development-dependencies-env /app/node_modules /app/node_modules
WORKDIR /app
RUN npm run build

FROM node:20-bookworm-slim
COPY package*.json ./app/
COPY --from=production-dependencies-env /app/node_modules /app/node_modules
COPY --from=build-env /app/build /app/build
WORKDIR /app
EXPOSE 3000
CMD ["npm", "run", "start"]