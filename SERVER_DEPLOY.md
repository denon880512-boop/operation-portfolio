# 服务器迁移说明

## 方式一：直接部署静态文件

把 `dist` 文件夹里的所有内容上传到服务器网站根目录即可。

例如 Nginx:

```nginx
server {
  listen 80;
  server_name your-domain.com;
  root /var/www/operation-portfolio/dist;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

## 方式二：上传源码后在服务器构建

服务器需要安装 Node.js。

```bash
npm install
npm run build
```

构建完成后部署 `dist` 文件夹。

## 本地预览

```bash
npm install
npm run dev
```

浏览器打开终端显示的本地地址。

## 目录说明

- `src`: 网页源码
- `public`: 静态文件，包括简历 PDF
- `dist`: 已构建好的可部署静态网页
- `package.json`: 项目依赖与命令
