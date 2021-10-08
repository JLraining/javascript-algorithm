// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

//  

// Example 1:

// Input: s = "III"
// Output: 3
// Example 2:

// Input: s = "IV"
// Output: 4
// Example 3:

// Input: s = "IX"
// Output: 9
// Example 4:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 5:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.



// too stupid
function romanToInt(s: string): number {
    let res: number = 0;
    let numberMap: { [k: string]: number } = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let temp: number = 0;
    if (["I", "X", "C"].includes(s[0])) {
        temp += numberMap[s[0]];
    } else {
        res += numberMap[s[0]];
    }
    for (let i: number = 1; i < s.length; i++) {
        if (["I", "X", "C"].includes(s[i]) && (s[i - 1] === s[i] || temp === 0)) {
            temp += numberMap[s[i]];
        } else {
            if (["I", "X", "C"].includes(s[i])) {
                temp += numberMap[s[i]];
            } else {
                res += numberMap[s[i]];
            }

            if (numberMap[s[i - 1]] < numberMap[s[i]]) {
                res -= temp;
                temp = 0;


            } else if (numberMap[s[i - 1]] >= numberMap[s[i]]) {
                res += temp;
                temp = 0;
            }
            console.log(s[i], numberMap[s[i]], temp)
        }
    }
    res += temp
    return res;
};

// offical solution
var romanToInt2 = function(s: string) {
    const symbolValues: Map<string, number> = new Map();
    symbolValues.set('I', 1);
    symbolValues.set('V', 5);
    symbolValues.set('X', 10);
    symbolValues.set('L', 50);
    symbolValues.set('C', 100);
    symbolValues.set('D', 500);
    symbolValues.set('M', 1000);  
    let ans = 0;
    const n = s.length;
    for (let i = 0; i < n; ++i) {
        const value = symbolValues.get(s[i]);
        if (i < n - 1 && value < symbolValues.get(s[i + 1])) {
            ans -= value;
        } else {
            ans += value;
        }
    }
    return ans;
};
