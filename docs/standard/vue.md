# Vue

**NOTICE HERE**: Vue 的相关规范全部基于官方的 @vue/cli (vue-cli) 脚手架。

## 官方风格指南

本规范继承自 Vue 官方的 [风格指南](https://cn.vuejs.org/v2/style-guide/)，并在此基础上进行了一些修改和约束。

## 组件文件命名

- 页面、路由相关的组件 **应该** 使用一个单词命名
- 非页面、路由相关的组件 **应该** 使用 `PascalCase` 风格命名

## 文件引入

如果文件夹内拥有 `index.vue`，那么引入时 **应该** 省略 index 字样，并在末尾添加 `/`。

``` javascript
// ok
import FolderName from './folder-name/index'

// good
import FolderName from './folder-name/'
```

引入组件时，模块名 **必须** 为 PascalCase。

``` javascript
// bad
import myComponent from 'MyComponent'

// good
import MyComponent from 'MyComponent'
```

## 根标签书写规范

vue 文件中的标签书写顺序 **必须** 为:

1. `<template></template>`
2. `<script></script>`
3. `<style></style>`

## `<template></template>` 根标签

每一个根标签下的顶级元素都 **必须** 有一个与当前文件名对应的 css 选择器。在本规范中，**应该** 使用 `文件名` 的 `kebab_case` 结构作为该 css 选择器。如: `SelectorGender` -> `selector_gender`

如果为了进一步降低组件间样式冲突的可能性，**可以** 使用 `文件夹层级` + `文件名` 共同组装成组件的根选择器。假定有以下目录结构:

```
|-- common <dir>
|  |-- selectors <dir>
|  |  |-- SelectorGender <file>
```

那么其对应的唯一 css 选择器名应为:

``` html
<template>
  <div class="common-selectors-selector_gender">
    <!-- ... -->
  </div>
</template>
```

## `<script></script>` 根标签

### 实例选项顺序

组件实例中的选项顺序 **必须** 按照 vue 风格指南的要求进行排版。

1. el
2. **name**
3. parent
4. functional
5. delimiters
6. comments
7. **components**
8. directives
9. **filters**
10. extends
11. **mixins**
12. iheritAttrs
13. **model**
14. **props** / **propsData**
15. **data**
16. **computed**
17. **watch**
18. **beforeCreate**
19. **created**
20. **beforeMount**
21. **mounted**
22. updateed
23. beforeUpdate
24. **beforeDestory**
25. destoryed
26. **methods**
27. template / render
28. renderError

### 留白

各个选项间必须间隔一个空行，而选项内部的值或方法不空行。

``` javascript
export default {
  name: 'Demo',

  data () {
    return {
      tableData: '',
      userInfo: []
    }
  },

  methods: {
    getTableData () {
      // ...
    },
    getUserInfo () {
      // ...
    }
  }
}
```

### 实例选项: name

每一个组件 **必须** 有一个 `name` 实例选项，其值 **应该** 为被其他组件引入时的模块名。如果你的组件命名完全遵守本规范，那么一般情况下，此属性的值应为与组件的文件名保持一致。

``` javascript
/**
 * file name: MyComponent
 */
export default {
  // worst
  // no name

  // bad
  name: 'my-component',

  // bad
  name: 'myComponent',

  // good
  name: 'MyComponent',
}

/**
 * use this component
 */
import MyComponent from '../common/MyComponent'
```

### 实例选项: props

组件需要的参数，都 **应该** 拥有完善的验证规则。

``` javascript
export default: {
  props: {
    demo: {
      type: [String, Number],
      required: true,
      validator: val => [1, '1', 'first', 2, '2', 'second'].includes(val)
    }
  }
}
```

### 实例选项: data

- **不应该** 使用 `Vue.set()` 方式为组件扩展响应式的 data
- **应该** 将一些同属于某一块页面元素的 data 合并为对象的形式，避免 data 的扁平化
- 每一个 data 都 **必须** 是被使用到的

### 实例选项: 生命周期函数

生命周期函数内 **不应该** 直接书写过多的业务逻辑。如果逻辑过多，**应该** 在 `methods` 中定义独立的函数并在生命周期函数中进行调用。

## `<style></style>` 根标签

- **必须** 添加 `scoped` 属性
- **必须** 使用 sass 预处理器，并且使用 scss 语法
- 所有的组件内样式 **必须** 被该组件的唯一 css 选择器包裹

``` html
<template>
  <div class="selector_gender">
    <!-- ... -->
  </div>
</template>

<style scoped lang="scss">
.selector_gender {
  // ...
}
</style>
```

## 关于命名的 (最佳) 实践

- 在 Dom 上绑定的事件回调方法 **应该** 使用 `on` + `动词` + `名词` 形式。如: `@click="onCreateUser"`
- 子组件 emit 的事件名称 **应该** 使用 `动词的一般现在时`。如: `@click`, `@submit`
- 子组件 emit 的事件回调方法 **应该** 使用 `handle` + `名词` + `动词过去式` 形式。如: `@submit="handleUserCreated"`
- **应该** 正确使用 `or` 和 `and`。详见下方示例

一个完整的例子:

```vue
<template>
  <div class="users">
    <el-button @click="onCreateUser">Create User</el-button>

    <el-table>
      <el-table-column>...</el-table-column>
      <el-table-column>
        <template #default="scope">
          <el-button @click="onEditUser(scope.row)">Edit User</el-button>
          <el-button :loading="isDeletingUser" @click="onDeleteUser(scope.row)">Delete User</el-button>
        </template>
      </el-table-column>
    </el-table>

    <user-creator-and-editor
      ref="userCreatorAndEditor"
      @submit="handleUserCreatedOrEdited">
    </user-creator-and-editor>
  </div>
</template>

<script>
import UserCreatorAndEditor from './UserCreatorAndEditor';
import { reqDestroyUser } from '@/api/user';

export default {
  name: 'Users',

  components: { UserCreatorAndEditor },

  data() {
    return {
      isDeletingUser: false,
    }
  },

  methods: {
    onCreateUser() {
      this.$refs.userCreatorAndEditor.open({ type: 'create' });
    },
    onEditUser({ id }) {
      this.$refs.userCreatorAndEditor.open({ type: 'edit', userId: id });
    },
    handleUserCreatedOrEdited(result) {
      if (result) {
        // ...
      } else {
        // ...
      }
    },
    async onDeleteUser({ id }) {
      try {
        this.isDeletingUser = true;
        await reqDestroyUser(id);
        // ...
      } catch (e) {
        // ...
      } finally {
        this.isDeletingUser = false;
      }
    }
  }
}
</script>
```

每个方法和变量都见名知意，并且永不重复！

## Vue Router

**不应该** 使用路由大量传递参数，请尽可能的保证 url `clean and beautiful`。

## Vuex

**应该** 使用 `module` 组织 vuex，而非全部注册在顶级。

## 其他

- **绝不** 给 Vue 挂载大体量的插件或扩展，**应该** 在需要用到的页面进行按需引入
- **不应该** 直接选取某个 dom 元素进行直接的 dom 操作 (ECharts 等插件除外)
