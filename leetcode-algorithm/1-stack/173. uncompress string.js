// Given a compressed string, return its original form.

// For example.

// uncompress('3(ab)') // 'ababab'
// uncompress('3(ab2(c))') // 'abccabccabcc'
// a number k followed by a pair of parenthesis, meaning to repeat the substring inside the parenthesis by k times, k is positive integer.
// inputs are guaranteed to be valid input like above example, there is no numerical digit in original form.

//leetcode.com/problems/decode-string/description/
function uncompress(s) {
  const stack = [];

  let i = 0;
  while (i < s.length) {
    const char = s[i];

    if (char >= "0" && char <= "9") {
      // 构建完整的数字（处理多位数字的情况）
      let num = 0;
      while (i < s.length && s[i] >= "0" && s[i] <= "9") {
        num = num * 10 + parseInt(s[i], 10);
        i++;
      }
      stack.push(num);
      // 由于循环结束时 i 已经自增，因此需要减 1
      i--;
    } else if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      // 处理到当前 ')' 为止的子字符串
      let substr = "";
      while (stack.length > 0 && stack[stack.length - 1] !== "(") {
        substr = stack.pop() + substr;
      }
      // 弹出 '('
      stack.pop();
      // 弹出重复次数
      const repeatCount = stack.pop();
      // 生成重复的子字符串并压入栈中
      stack.push(substr.repeat(repeatCount));
    } else {
      // 处理普通字符
      stack.push(char);
    }

    i++;
  }

  // 将栈中的所有部分连接成最终的结果
  return stack.join("");
}

// 示例用法
console.log(uncompress("3(ab)")); // 输出: 'ababab'
console.log(uncompress("3(ab2(c))")); // 输出: 'abccabccabcc'
