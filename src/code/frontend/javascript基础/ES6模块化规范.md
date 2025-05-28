---
title: ES6模块化规范（浏览器端）
icon: code
category:
 - coding
 - frontend
 - js
tags:
 - ECMAscript
 - modules
isOriginal: true
---

模块化是前端项目开发中非常基础同时又非常重要的技能，在浏览器端一般遵循`ECMAscript`规范进行。这里进行一个简要的总结，指出一些常用的场景，容易出错的地方等，便于自己学习和使用。

<!-- more -->

## ECMAscript规范是什么？

> 如果是前端大佬可以跳过这一节，作为新手我对这个还是有点迷糊，对`ECMAscript`和`javascript`的关系还有点晕乎无法准确表达。通过搜集网上回答自己总结了一下。

- `ECMAScript`（简称 ES）是一套标准，它规范了脚本语言的语法和行为。

- `JavaScript` 是一种语言实现，它基于 `ECMAScript` 规范进行开发，同时还整合了浏览器环境提供的 `DOM`（文档对象模型） 和 `BOM`（浏览器对象模型） 等内容。

所以，可以说 `ECMAScript` 是「语言的规则」，而 `JavaScript` 是「这门语言的实际应用」。


那为什么会觉得绕呢？因为：

`JavaScript` 出现得比 `ECMAScript` 还早！

Netscape 公司早在 1995 年就开发出了 `JavaScript`（当时还叫 LiveScript），但没有统一标准，后来为了推动这门语言的标准化，提交给了 ECMA（一个标准化组织），于是才有了 `ECMAScript`。

而每年 `ECMAScript` 都会推出新版本（比如 ES6、ES2022），`JavaScript` 社区也在跟着支持这些新特性，比如 let/const、模块化、箭头函数等，都是 ES 标准的内容。

这部分理解清楚之后，后面我们在看“模块化”的时候就不会再搞混“规范”和“实现”的问题了。模块化是 `ES6`（即 ECMAScript 2015）中引入的重要语法，和 `import/export` 密切相关。


## 模块化

现有在浏览器端一般遵循`ECMAscript`规范，在服务器端是基于`Common JS`。暂时我的项目不涉及后端，所以先学习这个`ECMAscript`规范中的模块化要求：

### 导出

### 导入