# 兼容 IE 及 Edge 浏览器

## For @vue/cli v3 & v4

> 参考官方文档: <https://cli.vuejs.org/zh/guide/browser-compatibility.html>

修改 `babel.config.js`

```js
module.exports = {
  presets: [
    [
      '@vue/app',
      {
        useBuiltIns: 'entry'
      }
    ]
  ]
};
```

在 `main.js` 的开头引入 `@babel/polyfill`

```js
// line 1
import '@babel/polyfill'

// ...
```

修改 `package.json`，在编译命令中添加现代模式支持。见 [现代模式](https://cli.vuejs.org/zh/guide/browser-compatibility.html#%E7%8E%B0%E4%BB%A3%E6%A8%A1%E5%BC%8F)

```json
"scripts": {
  "build": "vue-cli-service build --modern",
},
```

在 `vue.config.js` 中对需要转码的依赖进行 babel 转码

```js
module.exports = {
  transpileDependencies: ['element-ui'],
}
```
