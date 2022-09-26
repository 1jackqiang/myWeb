FROM node:latest as build
ENV NODE_ENV=production SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/

RUN mkdir app
WORKDIR /app

COPY package.json yarn.lock ./
COPY src public next.config.js postcss.config.js tsconfig.json ./

# install dependency
RUN yarn cache clean --force && \
    NODE_ENV=production && \
    yarn install --frozen-lockfile --ignore-optional --production --network-timeout 200000 || \
    yarn install --frozen-lockfile --ignore-optional --production --network-timeout 200000 || \
    yarn install --frozen-lockfile --ignore-optional --production --network-timeout 300000

# build next app
RUN yarn export

FROM nginx:latest as release

RUN mkdir app
WORKDIR /app

# copy prod only dependencies, for smaller image
COPY --from=build .out /app/dist/

# 用本地的 default.conf 配置来替换 nginx 镜像里的默认配置
COPY docker/default.conf /etc/nginx/conf.d/default.conf
RUN ls -la dist/

EXPOSE 80 3000
