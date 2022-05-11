FROM node:14-slim as dev
WORKDIR /app
COPY package*.json ./
RUN npm ci --unsafe-perm
COPY . .

FROM node:14-slim as build
WORKDIR /app
COPY --from=dev /app/node_modules ./node_modules
COPY . .
RUN npm run build

RUN npm prune --production

FROM node:14-slim
WORKDIR /app
COPY --from=build /app/node_modules/ ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./
CMD ["npm", "start"]
