# 更新日志

## 0.4.3

- 【fix】修复插件在微前端框架中使用时子应用不生效的问题

## 0.4.2

- 【fix】修复缓存引起的 server 未启动问题以及 `net::ERR_CONNECTION_REFUSED` 错误

## 0.4.1

- 【feat】支持以 ESM 方式引入 webpack 插件

## 0.4.0

- 【feat】支持了 SSR、Umijs 等所有以 `webpack、vite、rspack` 为底层打包工具的项目

## 0.3.2

- 【fix】修复在部分 linux 系统中执行 `ps aux xxx` 命令以获取运行程序失败的问题
- 【fix】修复部分情况下 vite 项目中使用时获取 `rootPath` 失败的问题

## 0.3.1

- 【fix】修复在 webpack 中与 `eslint-loader` 插件使用不兼容的问题
- 【fix】修复在 macOS 系统中无法自动识别 `code-insiders` IDE 的问题

## 0.3.0

- 【feat】支持在以 `solid` or `preact` 为框架的项目中使用
- 【feat】将注入 dom 中的属性 `vc-path` 重命名为 `data-insp-path`
- 【style】优化 dom 筛选框的样式
- 【fix】兼容用户使用 `sudo` 启动项目开发的场景

## 0.2.0

- 【feat】支持在 `rspack` 作为打包工具的项目中使用

## 0.1.13

- 【fix】修复在 `Fragment` 元素上注入 `data-insp-path` 属性报错问题

## 0.1.12

- 【feat】增加 `hideConsole` 和 `editor` 参数

## 0.1.11

- 【optimize】优化依赖项版本

## 0.1.10

- 【fix】修复 react 内置组件注入路径信息会在控制台报错问题

## 0.1.9

- 【optimize】移除 windows 系统的文件路径校验

## 0.1.8

- 【feature】新增 `needEnvInspector` 可选配置项
- 【fix】修复在 webpack 中使用会导致热更新时页面全量刷新的问题

## 0.1.7

【fix】修复 jsx 语法定位列位置会前移一格的问题

## 0.1.6

【fix】代码定位功能排除掉对于 node_modules 中的文件编译与识别

## 0.1.5

【feature】增加对于 `.js`，`.ts` 文件中 jsx 语法的定位

## 0.1.4

【fix】兼容在 webpack 中使用时对于开发环境的判断

## 0.1.3

【docs】更新 README 的文档内容

## 0.1.2

【feature】优化 Mac 系统、Windows 系统中浏览器控制台的按键提示功能

## 0.1.1

【types】优化使用时 `bundler` 参数的 typescript 提示

## 0.1.0

【feature】首次发布