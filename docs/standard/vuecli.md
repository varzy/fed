# Vue Cli

## 文件组织

* `src`
  * `api`: 存放 Api 资源
  * `assets`: 存放需要被 Webpack 处理的静态资源
  * `components`: 存放与项目无关的公共组件。理论上这些组件可以被任何项目直接使用
  * `config`: 存放一些项目配置
  * `models`: 存放前端的数据模型。如果项目使用了 Typescript，理论上不需要设置该目录
  * `router`: Vue 路由
  * `store`: Vuex。**应该** 只包含 `modules` 目录和 `index.js`，保证 vuex 所有功能都尽可能按照模块划分
    * `modules`: Vuex 的模块
    * `index.js`
  * `styles`: 存放全局样式。样式文件 **必须** 使用 Scss 进行组织; 作为子文件的样式文件 **必须** 使用 `_` 开头
    * `_common.scss`: 公共样式文件
    * `_hack.scss`: 对各种组件库或其它样式进行强行修改。理论上这个样式文件的内容 **应该** 尽可能得少
    * `_mixins.scss`: 提供全局的 Scss Mixins
    * `_reset.scss`: 对页面样式进行重置。理论上这个样式文件的内容 **应该** 尽可能得少
    * `main.scss`: 按照一定的顺序注册全部样式文件。被 `main.js` 引入
    * `resource.scss`: 被 `scss-loader` 处理，注册全局可用的 Scss 资源
  * `utils`: 各种工具
    * `http.js`: 请求层。**必须** 优先选用 `axios`
  * `views`: 视图层
  * `App.vue`
  * `main.js`: 文件内容 **必须** 尽可能得短小且清晰
* `.editorconfig`
* `.prettierignore`
* `.prettierrc.js`
* `CHANGELOG.md`: 项目更新日志。在每一次上线前都 **必须** 进行补全
* `README.md`: 用来说明项目，以及帮助其他人快速上手项目

## main.scss 组织

由于样式存在后者覆盖前者的问题，因此 main.scss **必须** 按照一定的顺序进行组织。

```scss
// 网络资源 (network resources)
@import url("https://fonts.googleapis.com/css?family=Nunito");

// 本地资源 (local resources)。如: 变量，mixin，图标
@import "variables";
@import "mixins";
@import "iconfont";

// 样式重置 (reset)。推荐优先使用 normalize.css，自己书写的 reset 文件的内容应当尽可能少
@import "~normalize.css/normalize.css";
@import "reset";

// 第三方库 (libraries)
@import "~element-ui/packages/theme-chalk/src/index";
@import "~swiper/css/swiper";

// 公共样式 (common)。如果有需要的话，给公共样式加入一个前缀以作区分，如 `g-container`
@import "common";

// 视图 (views)。对于一个 vue 项目，可能不需要引入视图内的样式
@import "views/layouts/home";
@import "views/widgets/header";
@import "views/index";

// 强行重置某些样式 (hack)。内容应当尽可能少
@import "hack";
```

## Scss 全局资源

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

## 环境变量

`@TODO`

## 配置

`@TODO`
