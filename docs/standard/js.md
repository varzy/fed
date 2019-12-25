# JS (ES) 规范

## 浏览器兼容性

项目 **必须** 至少兼容 Chrome, Firefox 以及 ie10+。详见: [兼容 IE 及 Edge 浏览器](../practice/compatibility.md)

## Babel

首先感谢 Babel 为世界上千千万万个前端程序员做出的贡献。

所有的项目都 **应该** 使用 Babel 进行转义，而源码都 **应该** 拥抱已经发布的 EcmaScript 特性。

## ESLint

所有项目都 **应该** 使用 ESLint 进行代码格式检查。

## const, let 和 var

`const` **必须** 是第一公民，次之是 `let`。被 Babel (或其它转义工具) 转义的项目中 **绝不** 出现 `var`。

## 命名

变量命名的第一要务是见名知意。

- 布尔型的变量 **应该** 以 `is` 或 `flag` 开头。如: `isVisible`
- 数组类型的变量 **必须** 采用复数形式的名词。如: `users`, `categories`
- 对于单复同行的数组型变量，**应该** 添加其它的单词进行辅助释义。如: `newsList`
- 对象类型的变量 **必须** 采用单数形式的名词。如: `user`
- 函数 (方法) 命名 **必须** 是以动词开头的 `camelCase` 风格。如: `createUser`, `validateForm`
- 对于项目中约定的常量 (如配置项等)，**应该** 使用 `PASCAL_CASE` 风格。如: `HEADER_MENU`, `PRIMARY_COLOR`
- 类的名称 **必须** 采用 `PascalCase` 形式，且 **应该** 拟人化。如: `Permission`, `FormValidator`
- 任何变量的命名都 **不应该** 过于生僻和抽象

## 一些推荐使用的函数首部动词

- `do` / `deal`: 做某些事情
- `go`: 跳转、前往
- `get` / `fetch`: 拉取某些事物
- `set`: 置放某些事物
- `make` / `create`: 创建
- `edit` / `update`: 编辑
- `delete` / `destroy`: 删除
- `handle`: 被其它操作触发了

## Restful Actions

对于项目中的接口，**应该** 将 ajax 请求拆分为请求函数以实现复用以及提高项目的可维护性。如果接口使用 Restful Api，那么前端对应的方法名 **可以** 按照下面的规范进行命名:

- `get` `/books` => `reqFetchBooks`
- `get` `/books/:id` => `reqShowBook`
- `post` `/books` => `reqCreateBook`
- `post, put, patch` `/books/:id` => `reqUpdateBook`
- `delete` `/books/:id` => `reqDestroyBook`

## 数组的循环

在使用循环时，**不应该** 使用 `item` 作为数组的元素名，而 **应该** 使用数组的单数形式。

```js
// bad
books.map(item => { });

// good
books.map(book => { });
newsList.map(news => { });
```

## 异步的处理

**必须** 使用 `async`, `await` 和 `try catch` 来处理异步操作。

## if 的处理

每一个 `if` 都 **必须** 囊括所有情况，也就是说每一种逻辑都可以被 if 处理。

```js
// bad
if (a === 1) { }

// good
if (a === 1) { } else { }
```

部分 `if else` 逻辑 **可以** 通过及时 `return` 减少嵌套层数。

```js
// good
if (a === 1) {
  // correct
}
else {
  // error
}

// better
if (a !== 1) {
  // error
  return;
}

// correct
```

过多的 `!a || !b` **应该** 被转换成 `!(a && b)`，这种逻辑更符合直觉。

```js
// not bad
if (!a || !b) { }

// better
if (!(a && b)) { }
```

## 注释

- 注释本身 **不应该** 对变量或方法本身是做什么的进行解释。这要求变量命名尽可能得见名知意
