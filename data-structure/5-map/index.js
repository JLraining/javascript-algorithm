/**
 * 字典的基本实现
 * 特征：键值对
 * 使用es6的Map [Set 和 Map 数据结构 - ECMAScript 6入门](https://es6.ruanyifeng.com/#docs/set-map#Map)
 */

const m = new Map();
const o = { p: "Hello World" };

m.set(o, "content");
m.get(o); // "content"
console.log(m.size);
m.has(o); // true
m.delete(o); // true
m.has(o); // false

// 遍历
const map = new Map([
  ["F", "no"],
  ["T", "yes"],
]);

for (let key of map.keys()) {
  console.log(key);
}
// "F"
// "T"

for (let value of map.values()) {
  console.log(value);
}
// "no"
// "yes"

for (let item of map.entries()) {
  console.log(item[0], item[1]);
}
// "F" "no"
// "T" "yes"

// 或者
for (let [key, value] of map.entries()) {
  console.log(key, value);
}
// "F" "no"
// "T" "yes"

// 等同于使用map.entries()
for (let [key, value] of map) {
  console.log(key, value);
}
// "F" "no"
// "T" "yes"
