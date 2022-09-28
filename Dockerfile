# Install dependencies only when needed
FROM node:16-alpine AS deps

RUN mkdir app
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn install --frozen-lockfile --ignore-optional --production --network-timeout 200000; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
  else echo "Lockfile not found." && exit 1; \
  fi


# Rebuild the source code only when needed
FROM node:16-alpine AS builder
RUN mkdir app
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . ./

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

RUN yarn export

# If using npm comment out above and use below instead
# RUN npm run build

# Production image, copy all the files and run next
FROM nginx:latest AS runner
RUN mkdir app
WORKDIR /app

# copy prod only dependencies, for smaller image
COPY --from=builder /app/dist ./dist

# 用本地的 default.conf 配置来替换 nginx 镜像里的默认配置
COPY docker/default.conf /etc/nginx/conf.d/default.conf
RUN ls -la dist/

EXPOSE 80 3000
