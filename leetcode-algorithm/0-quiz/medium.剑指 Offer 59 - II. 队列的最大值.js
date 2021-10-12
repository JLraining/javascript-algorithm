
// 请定义一个队列并实现函数 max_value 得到队列里的最大值，要求函数max_value、push_back 和 pop_front 的均摊时间复杂度都是O(1)。

// 若队列为空，pop_front 和 max_value 需要返回 -1

// 示例 1：

// 输入: 
// ["MaxQueue","push_back","push_back","max_value","pop_front","max_value"]
// [[],[1],[2],[],[],[]]
// 输出: [null,null,null,2,1,2]
// 示例 2：

// 输入: 
// ["MaxQueue","pop_front","max_value"]
// [[],[],[]]
// 输出: [null,-1,-1]


// 双向队列
// https://leetcode-cn.com/problems/dui-lie-de-zui-da-zhi-lcof/solution/ru-he-jie-jue-o1-fu-za-du-de-api-she-ji-ti-by-z1m/
var MaxQueue = function() {
    this.stack = [];
    this.max_stack = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    if(!this.max_stack.length) {
        return -1;
    }
    return this.max_stack[0];
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    this.stack.push(value);
    if(this.max_stack.length) {
        while(value > this.max_stack[this.max_stack.length - 1]) {
            this.max_stack.splice(-1, 1)
        }
        this.max_stack.push(value);
    } else {
        this.max_stack.push(value);
    }
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    if(!this.stack.length) {
        return -1;
    }
    let val = this.stack.shift();
    if(this.max_stack[0] === val) {
      this.max_stack.shift()
    }
    return val;
};