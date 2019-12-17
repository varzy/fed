# CSS 规范

## Css Reset

**必须** 在所有样式文件前引入 [Normalize.css](https://necolas.github.io/normalize.css/) 用于消除各个浏览器之间的差异。

对于不同的项目，**应该** 根据需求设立 reset 样式集，并在 Normalize.css 后引入。Reset 样式集 **应该** 秉承最小化原则。

## 简化版的 CSS BEM

[CSS BEM](http://getbem.com/introduction/) 是一种可以有效降低样式冲突概率的 css 选择器方式，但这种风格的代码对绝大部分项目来说都是 too heavy 的。

本规范中提出了一种更简化的方案，只有 "层级" 和 "断字" 的概念。使用中划线 `-` 表示层级，使用下划线 `_` 表示断字。

``` html
<header class="header">
  <div class="header-logo">
    <div class="header-logo-img"></div>
    <div class="header-logo-text"></div>
  </div>
  <div class="header-navbar">
    <div class="header-navbar-item header-navbar-login"></div>
    <div class="header-navbar-item header-navbar-sign_up"></div>
  </div>
</header>
```

## Sass

如果项目要使用 Css 预处理器，**应该** 优先使用 Sass，且 **必须** 使用 Scss 语法。使用 Scss 语法对上方的 html 代码进行选择会变得非常简单易行。

每一个 Scss 选择器后面 **必须** 有一个空行。

``` scss
.header {
  &-logo {
    &-img {}

    &-text {}
  }

  &-navbar {
    &-item {}

    &-login {}

    &-sign_up {}
  }
}
```

## 选择器命名

选择器命名的第一要务是见名知意。

* 对于一些常用的、约定俗成的单词，**可以** 使用简写形式。如: `description` -> `desc`
* **绝不** 使用简写后有多种释义，或是简写后无法辨识含义的单词简写。如: `description` -> `des`, `fc`
* 嵌套层级 **不应该** 过深，当出现三到四层嵌套后，可以使用全新的选择器名称。如 `.page-header-logo { .title ... }`
