// "[1,2,3,[44, 5]]" => [1,2,3,[44, 5]]


const genArray = (str) => {
    if(!str) {
        return [];
    }
    if(str[0] !== "[") {
        throw "Invalid Input";
    }
    let res = [];
    let cur = res;
    let nest = 1;
    for(let i = 1; i < str.length; i++) {
        let num = "";
        str[i] = str[i].trim();
        if("0" <= str[i] && str[i] <= "9") {
            num += str[i];
        } else if(str[i] === ",") {
            if(isNaN(Number(num))) {
                res.push(isNaN(Number(num))); 
            } else {
                throw "Invalid Input"; 
            }
        } else if (str[i] === "]"){
            if(--nest > 0) {
                cur.push()
            }
        } else if (str[i] === "["){

        }
    }

}