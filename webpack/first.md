### webpack 是什么？

通俗：打包工具
官方定义： webpack 是一个现代 JavaScript 应用程序的静态模块打包器(static module bundler)。在 webpack 处理应用程序时，它会在内部创建一个依赖图(dependency graph)，用于映射到项目需要的每个模块，然后将所有这些依赖生成到一个或多个bundle。

### why webpack

js运行走浏览器端，没有模块化概念，原本的js形式，以单文件，顺序加载出现，层级依赖按照加载顺序，虽说后来支持以```<script type=‘module'></script>```形式进行模块化，但是浏览器支持度并不高。没有模块化概念，是原先的代码拆分度不够。 其主要原因就是浏览器端的诸多限制，使用webpack(或其他的工具，rollup，fis3等)，多我们源码模块分离的代码进行合并，最后产出bundle(以便在浏览器端运行)

### webpack概念

在webpack中，我们认为一切都是模块，包括样式文件，图片等其他的静态资源

* Bundle: 由多个不同的模块生成，bundles 包含了早已经过加载和编译的最终源文件版本。
* Chunk: 这是 webpack 特定的术语被用在内部来管理 building 过程。bundle 由 chunk 组成，其中有几种类型（例如，入口 chunk(entry chunk) 和子 chunk(child chunk)）。通常 chunk 会直接对应所输出的 bundle，但是有一些配置并不会产生一对一的关系。
* Loaders: loader 允许你在 require() 或“加载”的文件之前，先预处理文件。就像“任务执行器(task-runner)”
* 模块(Module): 提供比完整程序接触面(surface area)更小的离散功能块。精心编写的模块提供了可靠的抽象和封装界限，使得应用程序中每个模块都具有条理清楚的设计和明确的目的。
* 插件(Plugin): 一个含有 apply 属性的 JavaScript 对象。该 apply 属性会在 webpack 编译时被调用，并能在整个编译生命周期访问。这些插件包通常以某种方式扩展编译功能。
* Tree Shaking: 移除未使用/多余的代码，或者更准确地说，只导入引用的代码。编译器(compiler)（例如 webpack）将通过分析各种 import 语句和引入代码的使用情况，来确定哪些部分的依赖关系被实际使用，删除不是“树”的部分，以实现此功能。
* 第三方库入口点(Vendor Entry Point): 从 app.js 和 vendors.js 开始创建依赖图(dependency graph)。这些依赖图是彼此完全分离、互相独立的，允许你使用 CommonsChunkPlugin 从「应用程序 bundle」中提取 vendor 引用(vendor reference) 到 vendor bundle。可以帮助你在 webpack 中实现被称为长效缓存的通用模式。

### 雏形
1. entry： 入口文件，及程序开始的入口，也可以说是生成依赖tree的顶端
2. output: 输出，当我们编译完成后，我们要将生成的bundle输出的位置

### 完整形态
1. entry
2. module    配置规则
3. resolve   配置模块如何解析
4. plugins  插件
5. output

### 2个核心库
1. acorn   将源码生成AST(抽象语法树)
2. tapable  webpack本身依赖的插件架构库

### 主要执行流程(webpack@4+)
1. 执行webpack
2. webpack-cli
3. processOptions 绑定各种插件
4. 生成compiler
5. 执行compiler (调用执行compiler.run(() => callback))
6. 全部完成后，执行callback


### 主要插件流程

* entry-option 初始化option
* run 开始编译
* make 从entry开始递归的分析依赖，对每个依赖模块进行build
* before-resolve - after-resolve 对其中一个模块位置进行解析
* build-module 开始构建 (build) 这个module,这里将使用文件对应的loader加载
* normal-module-loader 对用loader加载完成的module(是一段js代码)进行编译,用 acorn 编译,生成ast抽象语法树。
* program 开始对ast进行遍历，当遇到require等一些调用表达式时，触发call require事件的handler执行，收集依赖，并。如：AMDRequireDependenciesBlockParserPlugin等
* seal 所有依赖build完成，下面将开始对chunk进行优化，比如合并,抽取公共模块,加hash
* bootstrap 生成启动代码
* emit 把各个chunk输出到结果文件

[引用: https://juejin.im/entry/576b7aeda633bd0064065c74](https://juejin.im/entry/576b7aeda633bd0064065c74)

### tapable 
Just a little module for plugins.

暴露一些Hook classes

```js
const {
	SyncHook,
	SyncBailHook,
	SyncWaterfallHook,
	SyncLoopHook,
	AsyncParallelHook,
	AsyncParallelBailHook,
	AsyncSeriesHook,
	AsyncSeriesBailHook,
	AsyncSeriesWaterfallHook
} = require("tapable");
```

### acorn

源码转成AST

### loader

当链式调用多个 loader 的时候，请记住它们会以相反的顺序执行。取决于数组写法格式，从右向左或者从下向上执行。

### plugins

插件是由「具有 apply 方法的 prototype 对象」所实例化出来的。这个 apply 方法在安装插件时，会被 webpack compiler 调用一次。apply 方法可以接收一个 webpack compiler 对象的引用，从而可以在回调函数中访问到 compiler 对象。

### compiler 和 compilation

* compiler 对象代表了完整的 webpack 环境配置。这个对象在启动 webpack 时被一次性建立，并配置好所有可操作的设置，包括 options，loader 和 plugin。当在 webpack 环境中应用一个插件时，插件将收到此 compiler 对象的引用。可以使用 compiler 来访问 webpack 的主环境。

* compilation 对象代表了一次资源版本构建。当运行 webpack 开发环境中间件时，每当检测到一个文件变化，就会创建一个新的 compilation，从而生成一组新的编译资源。一个 compilation 对象表现了当前的模块资源、编译生成资源、变化的文件、以及被跟踪依赖的状态信息。compilation 对象也提供了很多关键时机的回调，以供插件做自定义处理时选择使用。