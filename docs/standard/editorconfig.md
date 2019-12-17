# Editorconfig

每个项目都 **必须** 添加 `Editorconfig` 文件，并且每一个开发人员的编辑器都 **必须** 安装该插件。

下面是一份推荐使用的 editorconfig 配置:

```
root = true

[*]
charset = utf-8
end_of_line = lf
indent_style = space
indent_size = 2
tab_width = 2
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false
```
