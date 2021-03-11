/**
 * 集合的基本实现
 * 特征：无序且唯一
 * 可以使用es6的Set来实现集合 [Set 和 Map 数据结构 - ECMAScript 6入门](https://es6.ruanyifeng.com/#docs/set-map#Map)
 */

const arr1 = [1, 1, 3, 4, 5, 5, 6];

// 数组转换成set
const array2 = new Set(arr1);
// set转换成数组
const arr4 = Array.from(array2) // 或者 [...new Set(arr1)]



// 添加: 相同的元素不可重复添加，对象是否相同判断地址是否相同
array2.add(6);
// 删除
array2.delete(6);
// 遍历：Set的遍历顺序就是插入顺序
for(let val of array2.values()) {console.log(val)}
// 判断元素是否在集合中
const has = new Set(arr1).has(3);


// 去重
const arr3 = [...new Set(arr1)];
// 判断交集
const set2 = new Set([1, 2, 3]);
const res = new Set([...set2].filter((item) => array2.has(item)));
// 非交集
const res2 = new Set([...set2].filter((item) => !array2.has(item)));

console.log(res, res2);
