/**
* 问题: 给定一个数 n 与 k, 列出所有 1 ... n 中所有 k 个数的组合
*
* 范例: n = 4, k = 2
*  [1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]
* 
* 变形:
*
*  顺序不 care
*
*
*/

const compose = (n: number, k: number): number[][] => {
    let res: number[][]  = [];
    if(!n || !k) {
        return [];
    }
    
    const backTrack = (path: number[], j: number) => {
        if(path.length > k) {
            return;
        }
        if(path.length === k) {
            res.push(path);
            return;
        }
        for(let i: number = j; j <= n; j++) {
            backTrack(path.concat([j]), j + 1); 
        }
    }

    for(let i: number = 1; i <= n; i++) {
        backTrack([i], i + 1);
    }

    return res;
}