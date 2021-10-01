// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.
// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.
// Example 1:
// Input: num1 = "2", num2 = "3"
// Output: "6"
// Example 2:
// Input: num1 = "123", num2 = "456"
// Output: "56088"

/**
 * [hot leetcode question]
 * solution:
 * use res array to record every bit postion value.
 * pay attention to the situation that num1 or num3 equal to zero
 */
 function multiply(num1: string, num2: string): string {
    let res: number[] = new Array(num1.length + num2.length).fill(0);

    for(let i: number = num2.length - 1; i >= 0; i--) {
        for(let j: number = num1.length - 1; j >= 0; j--) {
            let n: number = Number(num1[j]) * Number(num2[i]) + res[i + j + 1] ;
            res[i + j + 1] = n % 10;
            res[i + j] = Math.floor(n / 10) + res[i + j];
        }
    }

    while (res[0] == 0) {
        res.shift();
    }

    return res.length ? res.join('') : '0'
};