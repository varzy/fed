# Scss 全局资源

> 参考官方文档: <https://cli.vuejs.org/zh/guide/css.html#%E5%90%91%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8-loader-%E4%BC%A0%E9%80%92%E9%80%89%E9%A1%B9>

在 `src/styles/` 目录下创建 `resources.scss` 文件，用于存放全局可以使用的样式资源，如变量、mixin 等。

```scss
@import "variables";
@import "mixins";
```

在 `vue.config.js` 中进行配置

```js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/resources.scss";`
      }
    }
  },
}
```
