/**
 * 动态规划
 * 一种思想
 * 将一个问题分解为 相互重叠的 子问题
 * 和分而治之思想的最大区别在于：子问题相互之间是独立还是重叠
 */

// [斐波那契数列]
// 0、1、1、2、3、5、8、13、21、34、.....
// F(0)=0，F(1)=1, F(n)=F(n - 1)+F(n - 2)

// 理解入门, 但是一般不这么写, 内存消耗大
const Fibonacci = (n) => {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return Fibonacci(n - 1) + Fibonacci(n - 2);
};

// 优化
const Fibonacci2 = (n) => {
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

// 终极优化
const Fibonacci3 = (n) => {
  let dp0 = 0;
  let dp1 = 1;
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  for (let i = 2; i <= n; i++) {
    let temp = dp0;
    dp0 = dp1;
    dp1 = temp + dp0;
  }
  return dp1;
};

console.log(Fibonacci3(7));
