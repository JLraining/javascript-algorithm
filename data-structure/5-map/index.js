/**
 * 字典的基本实现
 * 特征：键值对
 * 使用es6的Map [Set 和 Map 数据结构 - ECMAScript 6入门](https://es6.ruanyifeng.com/#docs/set-map#Map)
 */

const m = new Map();
const o = {p: 'Hello World'};

m.set(o, 'content')
m.get(o) // "content"
console.log(m.size)
m.has(o) // true
m.delete(o) // true
m.has(o) // false