// 给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。

//  

// 示例 1:

// 输入: 12258
// 输出: 5
// 解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"


// 注意数字为0的边界条件
function translateNum(num: number): number {
    let s: string = String(num);
    if(!s.length) {
        return 0;
    }
    if(s.length === 1) {
        return 1;
    }
    if(s.length === 2) {
        if(Number(`${s[0]}${s[1]}`) <= 25) {
            return 2;
        } else {
            return 1;
        }
    }
    let d1: number = 1;
    let d2: number = (s[0] !== "0" && Number(`${s[0]}${s[1]}`)) <= 25 ? 2: 1;

    for(let i:number = 2; i < s.length; i++) {
       let temp: number = d1;
       d1 = d2;
       if(s[i - 1] !== "0" && Number(`${s[i - 1]}${s[i]}`) <= 25) {
           d2 = temp + d1;
       } else {
           d2 = d2;
       }
    }
    return d2;
};