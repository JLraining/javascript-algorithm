// https://leetcode.com/problems/matchsticks-to-square/description/
// You are given an integer array matchsticks where matchsticks[i] is the length of the ith matchstick. You want to use all the matchsticks to make one square. You should not break any stick, but you can link them up, and each matchstick must be used exactly one time.
// Return true if you can make this square and false otherwise.
// Example 1:
// Input: matchsticks = [1,1,2,2,2]
// Output: true
// Explanation: You can form a square with length 2, one side of the square came two sticks with length 1.
// Example 2:
// Input: matchsticks = [3,3,3,3,4]
// Output: false
// Explanation: You cannot find a way to form a square with all the matchsticks.
// Constraints:
// 1 <= matchsticks.length <= 15
// 1 <= matchsticks[i] <= 108


/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {
    if (matchsticks.length < 4) {
        return false
    }

    let side = matchsticks.reduce((val, acc) => val + acc, 0) / 4
    matchsticks = matchsticks.sort((a, b) => b - a);
    if (side !== Math.floor(side) || matchsticks[0] > side) {
        return false
    }

    const backTracking = (start, space, done) => {
        if (done === 3) {
            return true
        }
        let res;
        for (let i = start; i < matchsticks.length; i++) {

            let t = matchsticks[i];
            if (t > space) {
                continue
            }
            matchsticks[i] = side + 1
            if (t === space) {
                res = backTracking(0, side, done + 1);
            } else {
                res = backTracking(i + 1, space - t, done)
            }
            matchsticks[i] = t
            if (res) {
                return true
            }
            while (matchsticks[i + 1] === t) {
                i++
            }
        }
        return false

    }

    return backTracking(0, side, 0)

}