# 样式资源组织

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
