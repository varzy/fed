# Prettier

所有项目都 **必须** 使用 `Prettier` 进行代码的格式化。

下面是一份推荐使用的 prettier 配置:

```js
// .prettierrc.js
module.exports = {
  overrides: [
    {
      files: "*.{js,ts,jsx,tsx,vue}",
      options: {
        singleQuote: true,
        printWidth: 100
      }
    }
  ]
};
```
