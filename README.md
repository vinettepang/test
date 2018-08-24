# my-project

> A tua-mp project

添加了 `vue-loader`，让我们能够使用文件扩展名为 `.vue` 的 `single-file components`(单文件组件) 。

[单文件组件就是将模板（template）、脚本（script）、样式（style）写在一个文件中。](https://cn.vuejs.org/v2/guide/single-file-components.html)

在这个例子中的单文件组件和一般 web 端的单文件组件有所不同：

1.页面的模板我们使用的是 `<template lang="wxml">...</template>`

2.添加了一个 `<config>` 的自定义块，用于填写**页面**的配置（即原来的 `.json`）

3.由于 webpack 或其他地方需要读取 `app.json` 中的某些字段，所以在不编写 loader 的情况下只好维持原状，不将其放到 `app.vue` 中的 `<config>` 中。

> [什么是自定义块？](https://vue-loader.vuejs.org/zh/guide/custom-blocks.html)

## 构建步骤

``` bash
# 安装依赖
npm i

# 开启 webpack 监听
npm start

# 压缩打包
npm run build
```

## 文件结构

* index.wxml/index.less/index.json -> Index.vue
* logs.wxml/logs.scss/logs.json -> Logs.vue

```
.
├── README.md
├── dist
│   ├── app.js
│   ├── app.json
│   ├── app.wxss
│   ├── assets
│   │   └── vue-logo.png
│   ├── chunks
│   │   ├── runtime.js
│   │   ├── scripts.js
│   │   └── vendors.js
│   ├── comps
│   │   └── Filter
│   │       ├── Filter.js
│   │       ├── Filter.json
│   │       ├── Filter.wxml
│   │       └── Filter.wxss
│   ├── pages
│   │   ├── index
│   │   │   ├── comps
│   │   │   │   └── TestComp
│   │   │   │       ├── TestComp.js
│   │   │   │       ├── TestComp.json
│   │   │   │       ├── TestComp.wxml
│   │   │   │       └── TestComp.wxss
│   │   │   ├── index.js
│   │   │   ├── index.json
│   │   │   ├── index.wxml
│   │   │   └── index.wxss
│   │   ├── logs
│   │   │   ├── logs.js
│   │   │   ├── logs.json
│   │   │   ├── logs.wxml
│   │   │   └── logs.wxss
│   │   └── todos
│   │       ├── comps
│   │       │   └── Todo
│   │       │       ├── Todo.js
│   │       │       ├── Todo.json
│   │       │       ├── Todo.wxml
│   │       │       └── Todo.wxss
│   │       ├── todos.js
│   │       ├── todos.json
│   │       ├── todos.wxml
│   │       └── todos.wxss
│   ├── project.config.json
│   └── templates
│       └── info.wxml
├── package.json
├── project.config.json
├── src
│   ├── app
│   │   ├── App.vue
│   │   ├── app.json
│   │   └── index.js
│   ├── assets
│   │   └── vue-logo.png
│   ├── comps
│   │   └── Filter
│   │       ├── Filter.vue
│   │       └── index.js
│   ├── pages
│   │   ├── index
│   │   │   ├── Index.vue
│   │   │   ├── comps
│   │   │   │   └── TestComp
│   │   │   │       ├── TestComp.vue
│   │   │   │       └── index.js
│   │   │   └── index.js
│   │   ├── logs
│   │   │   ├── Logs.vue
│   │   │   └── index.js
│   │   └── todos
│   │       ├── Todos.vue
│   │       ├── comps
│   │       │   └── Todo
│   │       │       ├── Todo.vue
│   │       │       └── index.js
│   │       └── index.js
│   ├── scripts
│   │   ├── const
│   │   │   ├── README.md
│   │   │   └── index.js
│   │   └── utils
│   │       ├── README.md
│   │       ├── event.js
│   │       ├── format.js
│   │       ├── index.js
│   │       └── log.js
│   ├── styles
│   │   ├── global.styl
│   │   ├── todomvc-app-css.css
│   │   └── todomvc-common-base.css
│   └── templates
│       └── info.wxml
├── webpack.config.babel.js
├── webpackUtils.js
└── yarn.lock
```

### `src/` 源码
* app/: 应用入口
* assets/: 资源文件，比如图片
* comps/: 组件
* pages/: 页面
    * pages/index/comps/: 属于 index 的页面级组件
    * pages/todos/comps/: 属于 todos 的页面级组件
* scripts: 公用代码
* scripts/const: 常量（已配置别名 @const）
* scripts/utils: 辅助函数（已配置别名 @utils）
* styles/: 公用样式
* templates/: 模板

### `dist/` 打包后代码
* chunks/: 公共依赖
    * runtime: [是 webapck 在运行时连接各个模块的代码](https://doc.webpack-china.org/concepts/manifest/#runtime)
    * vendors: 是提取的 `node_modules` 下的依赖
    * scripts: 是提取的 `src/scripts/` 下的依赖
* comps/: 组件
* pages/: 页面
    * pages/index/comps/: 属于 index 的页面级组件
    * pages/todos/comps/: 属于 todos 的页面级组件
