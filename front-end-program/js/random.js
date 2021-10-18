// 生成 n 到 m 的随机数
function randomNum(minNum, maxNum) {
    return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
}
// parseInt()，Math.floor()，Math.ceil()和Math.round()都可得到整数。parseInt() 和Math.floor()结果都是向下取整。
// Math.random()生成[0,1)的数，所以 Math.random()*5生成{0,5)的数。 
// 所以Math.ceil(Math.random()*5)生成的都是[1,5] 的随机整数。
// 所以Math.floor(Math.random()*5)生成的都是[0,4] 的随机整数


Math.ceil();  //向上取整。
Math.floor();  //向下取整。
Math.round();  //四舍五入。

Math.random();  //0.0 ~ 1.0 之间的一个伪随机数。【包含0不包含1】 //比如0.8647578968666494

Math.ceil(Math.random()*10);      // 获取从1到10的随机整数 ，取0的概率极小。
Math.floor(Math.random()*10);  //可均衡获取0到9的随机整数。

Math.round(Math.random());   //可均衡获取0到1的随机整数。
Math.round(Math.random()*10);  //基本均衡获取0到10的随机整数，其中获取最小值0和最大值10的几率少一半。