// 输入一个字符串，打印出该字符串中字符的所有排列。
// 你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

// 示例:
// 输入：s = "abc"
// 输出：["abc","acb","bac","bca","cab","cba"]


/**
 * 【 hot interview question 】
 * solution：
 * use back tracking algorithm
 * pay attention to the situation that has duplicate elements.
 */

function permutation(s: string): string[] {
    let res: string[] = [];
    let arr: string[] = s.split("").sort();
    const backTracking = (path: string, cur: string[]): void => {
        if(path.length === s.length) {
            res.push(path);
            return;
        }
        for(let i: number = 0; i < cur.length; i++) {
            if(i > 0 && cur[i] === cur[i - 1]) {
                continue;
            }
           backTracking(path + cur[i], [...cur.slice(0,i), ...cur.slice(i+1)]) 
        }
    }
    backTracking('', arr)
    return res;
};