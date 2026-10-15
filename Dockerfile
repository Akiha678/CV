# ----------------------------
# 阶段 1: 构建阶段 (Node.js Build Stage)
# ----------------------------
FROM node:20-alpine AS builder

WORKDIR /app

# 优先安装依赖，利用 Docker 构建缓存
COPY package.json package-lock.json ./
RUN npm ci --prefer-offline --no-audit

# 复制源码并编译生产包
COPY . .
RUN npm run build

# ----------------------------
# 阶段 2: 生产运行阶段 (Nginx Alpine)
# ----------------------------
FROM nginx:alpine

# 拷贝自定义 Nginx 配置文件
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 拷贝构建产物至 Web 静态根目录
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 9092

CMD ["nginx", "-g", "daemon off;"]
