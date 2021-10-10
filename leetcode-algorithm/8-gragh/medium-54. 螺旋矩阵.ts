// 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
//  
// 示例 1：
// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[1,2,3,6,9,8,7,4,5]
// 示例 2：
// 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// 输出：[1,2,3,4,8,12,11,10,9,5,6,7]


// my code
function spiralOrder(matrix: number[][]): number[] {
    if(!matrix || !matrix[0]) {
        return []
    }
    let res: number[] = [];
    const m: number = matrix[0].length;
    const n: number = matrix.length;
    let cur: number = 0;  
    const direction: number[][] = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let pos: number[] = [0, 0];
    let status: number = 0;
    let visited: Array<boolean[]> = Array.from(new Array(n), i => new Array(m).fill(false));

    while(cur < m * n) {
        res.push(matrix[pos[0]][pos[1]]);
        visited[pos[0]][pos[1]] = true;
        let x = pos[0] + direction[status][0];
        let y = pos[1] + direction[status][1];
        if(x >= 0 && x < n && y >= 0 && y < m && !visited[x][y]) {
            pos = [x, y];
        } else {
            status = status >= 3 ? 0 : status + 1;
            pos = [pos[0] + direction[status][0], pos[1] + direction[status][1]];
        } 
        cur++;
    }
    
    return res;
};


// others
var spiralOrder2 = function(matrix) {
    if (!matrix.length || !matrix[0].length) {
        return [];
    }
    const rows = matrix.length, columns = matrix[0].length;
    const visited = new Array(rows).fill(0).map(() => new Array(columns).fill(false));
    const total = rows * columns;
    const order = new Array(total).fill(0);

    let directionIndex = 0, row = 0, column = 0;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    for (let i = 0; i < total; i++) { 
        order[i] = matrix[row][column];
        visited[row][column] = true;
        const nextRow = row + directions[directionIndex][0], nextColumn = column + directions[directionIndex][1];
        if (!(0 <= nextRow && nextRow < rows && 0 <= nextColumn && nextColumn < columns && !(visited[nextRow][nextColumn]))) {
            directionIndex = (directionIndex + 1) % 4;
        }
        row += directions[directionIndex][0];
        column += directions[directionIndex][1];
    }
    return order;
};
