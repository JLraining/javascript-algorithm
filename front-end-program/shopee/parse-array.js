// "[1,2,3,[44, 5]]" => [1,2,3,[44, 5]]

const genArray = (str) => {
    if(!str) {
        return [];
    }
    if(str[0] !== "[") {
        throw "Invalid Input";
    }

    let arr = []; // 表示结果
    let stack = []; // 栈表示追踪当前操作
    let num = "";

    for(let i = 1; i < str.length; i++) {
        str[i] = str[i].trim();
        if("0" <= str[i] && str[i] <= "9") {
            num += str[i];
        } else if (str[i] === ",") {
            if(num && !isNaN(Number(num))) {
                arr.push(Number(num)); 
            }
            num = '';
        } else if (str[i] === "]"){
            if(num && !isNaN(Number(num))) {
                arr.push(Number(num)); 
            }
            num = '';
            arr = stack.length ? stack.pop().concat([arr]) : arr;
        } else if (str[i] === "["){
            stack.push(arr);
            arr = [];
        }
    }
    return arr;
}

console.log(genArray("[1,2,3,[44,5]]"));