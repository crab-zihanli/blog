---
title: ES6模块化规范
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
我们可以把一个模块里的变量、函数、类等“暴露”出去，让其他文件使用，称为“导出”。

🟡 1. 按需导出（也叫命名导出）

使用 export 关键词导出一个或多个内容，导出时必须写上名字。
```js
// utils.js
export const PI = 3.14;

export function add(x, y) {
  return x + y;
}

export class Circle {}
```
也可以这样写在一块：
```js
// utils.js
export const PI = 3.14;
export function add(x, y) {
  return x + y;
}
export { PI, add };
```
🔵 2. 默认导出（default export）

一个模块只能有一个默认导出，可以导出一个值、函数或类。
```js
// sayHi.js
export default function sayHi(name) {
  console.log(`Hi, ${name}`);
}
```
也可以先定义，再统一导出：
```js
// sayHi.js
function sayHi(name) {
  console.log(`Hi, ${name}`);
}
export default sayHi;
```

🟢 3. 导出时重命名

可以在导出时给内容起个别名，使用 `as` 关键字。
```js
// utils.js
export const PI = 3.14;
export function add(x, y) {
  return x + y;
}
export { add as sum, PI as piValue };
```

🟣 4. 导出时混合默认和命名
可以同时有默认导出和命名导出。
```js
// utils.js
const PI = 3.14;
function add(x, y) {
  return x + y;
}
export { add as sum, PI as piValue };
export default function sayHi(name) {
  console.log(`Hi, ${name}`);
}
```

### 导入
导出之后，就可以在别的模块里导入使用了。

🟡 1. 按需导入（和导出名称一致）
```js
import { PI, add } from './utils.js';

console.log(add(PI, 2)); // 使用导入的函数和变量
```
注意：名字要对得上！ 如果导出的叫 add，你不能写成 Add，除非用 as 改名👇
```js
import { add as sum } from './utils.js';

sum(1, 2); // ok
```
🔵 2. 默认导入（不需要花括号）
```js
import sayHi from './sayHi.js';

sayHi('小明'); // Hi, 小明
```
默认导入时你可以自己命名，不需要跟导出时的名字一样。

**默认导入必须对应默认导出**，否则会报错。

`import foo from 'x.js'` 这一写法，只会导入 `x.js` 中的 `export default` 的内容。

🟢 3. 对应混合导出的导入（对应上一节的4）
```js
import sayHi, { sum, piValue } from './utils.js';
```

🧨 常见坑和易错点

| ⚠ 错误情况                                   | 💡 原因说明                                                        |
| ---------------------------------------- | -------------------------------------------------------------- |
| `SyntaxError: Unexpected token 'export'` | 忘了加 `type="module"`或当前环境不支持 ES 模块                        |
| 命名导出名字写错                                 | `import { ADD } from './utils.js'` 会找不到，因为原本是 `add`            |
| 默认导入和命名导入混淆                              | `import { default } from ...` 是错误写法，默认导入不加 `{}`                |
| 路径写错                                     | `import x from 'utils.js'` 和 `./utils.js` 是两回事，记得加 `./` 表示当前路径 |
| 多次默认导出                                   | 每个文件只能有一个 `export default`，否则会报错                               |
