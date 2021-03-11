/**
 * 题目描述: 
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 */

 /**
  * 解题思路:
  * 1. 左括号入栈, 右括号出栈
  * 2. 出栈的右括号要和左边的左括号对称
  * 3. 字符串循环结束，栈要为空
  * 优化：字符串的长度不为偶数，直接返回false
  */

 const isValid = (s) => {
    const stack = [];
    if(stack.length % 2 === 1) { return false }
    for(let i = 0; i < s.length; i+=1) {
      if(s[i] == '(' ||s[i] == '{' || s[i] == '[' ){
          stack.push(s[i])
      } else {
        if(stack.length === 0) {
           return false;
        }
        const t =  stack[stack.length - 1 ];
        if((s[i] == ')' &&  t == '(') || (s[i] == '}' &&  t == '{') || (s[i] == ']' &&  t == '[')){
          stack.pop()
        } else {
          return false
        }
      }
    }
    return stack.length === 0;
  }