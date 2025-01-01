FROM node:alpine AS dev

WORKDIR /usr/src/app

# Install pnpm
RUN npm install -g pnpm

COPY package*.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

FROM node:alpine AS prod

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json pnpm-lock.yaml ./

RUN pnpm install 

COPY . .

COPY --from=dev /usr/src/app/dist ./dist

CMD [ "node", "dist/apps/billing/main" ]