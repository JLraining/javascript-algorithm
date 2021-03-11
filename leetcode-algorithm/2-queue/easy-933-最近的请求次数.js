/**
 * 题目描述：
 * 写一个 RecentCounter 类来计算特定时间范围内最近的请求。
 * 请你实现 RecentCounter 类：
 * RecentCounter() 初始化计数器，请求数为 0 。
 * int ping(int t) 在时间 t 添加一个新请求，其中 t 表示以毫秒为单位的某个时间，并返回过去 3000 毫秒内发生的所有请求数（包括新请求）。确切地说，返回在 [t-3000, t] 内发生的请求数。
 * 保证 每次对 ping 的调用都使用比之前更大的 t 值。

 * 示例：
 * 输入：
 * [[], [1], [100], [3001], [3002]]
 * 输出：
 * [null, 1, 2, 3, 3]
 * recentCounter.ping(100);   // requests = [1, 100]，范围是 [-2900,100]，返回 2
 */

/**
 * 解题思路：
 *  1. 最早发出的请求，越不在这个结果范围内，使用队列先进先出的特征
 *  2. 有新请求就入队, 并把3000ms前的请求出队
 *  3. 返回队列的长度, 即最终的结果
 */

var RecentCounter = function() {
    this.req = []
};

RecentCounter.prototype.ping = function(t) {
    this.req.push(t)
    while(t - 3000 > this.req[0]) {
        this.req.shift();
    }
    return this.req.length;
};