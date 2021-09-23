// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:
// Input: n = 1
// Output: ["()"]

/**
 * solution:
 * use backTrack algorithm thinking
 * pay attention to the use of assistant variables
 * and the boundary conditions are also very important
 */

function generateParenthesis(n: number): string[] {
    let res: string[] = [];
    const backTrack = (lRemian: number, rRemian: number, path: string): void => {
        if (path.length >= n * 2) {
            res.push(path);
            return
        }

        if (lRemian > 0) {
            backTrack(lRemian - 1, rRemian, `${path}(`)
        } 

        if (lRemian < rRemian) {
            backTrack(lRemian, rRemian - 1, `${path})`)
        } 
    }

    backTrack(n, n, '');
    return res;
};