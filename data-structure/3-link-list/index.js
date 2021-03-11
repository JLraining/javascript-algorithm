/**
 * 链表的基本实现
 * 特征: 元素储存不联系，使用next指针连在一起
 * js中使用object来模拟链表
 */

 const e = { val: "e", next: null}
 const c = { val: "c", next: e}
 const b = { val: "b", next: c} 
 const a = { val: "a", next: b}


 // 遍历链表
 let p = a;
 while(p) {
     console.log(p.val)
     p = p.next;
 }


// 链表插入元素
let d = {val: "d"}
c.next = d;
d.next = e;


// 删除
c.next = e;