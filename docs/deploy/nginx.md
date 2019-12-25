# Nginx

## 前端静态资源

```
location /app1/ {
    alias /var/www/app1/dist/;
    index index.html;
}
```

## 后端接口

```
location /api/app1/ {
    proxy_pass http://10.0.xx.xx:7890/;
}
```

## Vue 路由模式及 Nginx 代理

### 方案一: hash 模式

> xxx.com/app1/#/index

- 路由由前端直接接管，`#` 后面的是前端维护的路由
- 优点是部署简单
- 缺点是 url 不好看

vue.config.js

```js
module.exports = {
  publicPath: './',
}
```

nginx.conf

```
location /app1/ {
    alias /var/www/app1/dist/;
    index index.html;
}
```

### 方案二: history 模式

> xxx.com/app1/index

- 路由都走到 nginx，再由 nginx 转发回前端的入口文件
- 优点是 url 好看，符合直觉
- 缺点是需要前后端同时配合才能实现

vue.config.js

```js
module.exports = {
  publicPath: '/app1/',
}
```

router.js

```js
export default new Router({
  routes,
  mode: 'history',
  base: process.env.BASE_URL
});
```

nginx.conf

```
location /app1/ {
    alias /var/www/app1/dist/;
    index index.html;
    try_files $uri $uri/ /app1/index.html;
}
```
