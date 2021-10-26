// 可new可继承版本的bind
Function.prototype.bind = function (context, ...outerArgs) {
  let that = this;
  function res(...innerArgs) {
    if (this instanceof res) {
      // new操作符执行时
      // 这里的this在new操作符第三步操作时，会指向new自身创建的那个简单空对象{}
      that.call(this, ...outerArgs, ...innerArgs);
    } else {
      // 普通bind
      that.call(context, ...outerArgs, ...innerArgs);
    }
  }
  res.prototype = this.prototype; //！！！
  return res;
};
