Function.prototype.fexec = function (thisArg, otherArg) {
  thisArg = thisArg === null || thisArg === undefined ? window : Object(thisArg)
  // this当前函数对象
  // thisArg要绑定的this,otherArg函数执行参数
  Object.defineProperty(thisArg, 'fn', {
    enumerable: false, //不可枚举
    configurable: true,
    value: this
  })
  if (otherArg) thisArg.fn(...otherArg)
  else thisArg.fn()
  delete thisArg.fn
}

Function.prototype.fapply = function (thisArg, otherArg) {
  this.fexec(thisArg, otherArg)
}
Function.prototype.fcall = function (thisArg, ...otherArg) {
  this.fexec(thisArg, otherArg)
}
function foo(...arg) {
  console.log(this, ...arg)
}
foo.fapply({ a: 'abc' }, [123, 41224])
foo.fcall(123, 123, 231, 12412)

console.log('-------------------分割线-----------------')
// bind是返回一个新函数,新函数的this绑定
Function.prototype.fbind = function (thisArg, ...otherArg) {
  thisArg = thisArg === null || thisArg === undefined ? window : Object(thisArg)
  Object.defineProperty(thisArg, 'fn', {
    enumerable: false, //不可枚举
    configurable: true,
    writable: false,
    value: this
  })
  return (...newArgs) => {
    const allArgs = [...otherArg, ...newArgs]
    thisArg.fn(...allArgs)
  }
}
const newFoo = foo.fbind('abc','faf','fa12')
newFoo(123)
