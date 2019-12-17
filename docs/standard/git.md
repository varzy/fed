# Git

## 使用 lf

Windows 下的 Git 默认使用 `crlf` 作为换行符，甚至会将 `lf` 转换为 `crlf`。本规范要求所有的换行都 **必须** 使用 `lf` 风格。

Q: 安装 Git 时忘记去勾了 crlf 自动替换的选项，怎么办?

A: 执行以下命令:

```bash
git config --global core.eol lf
git config --global core.autocrlf false
git config --global core.safecrlf true
```

## 分支命名

- 开发分支必须是 `develop`
- 功能分支 **必须** 以 `feature/` 开头。如: `feature/user_system`
- 开发完毕，但仍需维护的版本 **必须** 检出一条新的分支，并以 `stable/` 开头。如: `stable/v1`

## Merge Request (Pull Request)

每一次分支合并都 **必须** 发起一个 `Merge Request`，并且交由其他人进行评审。
