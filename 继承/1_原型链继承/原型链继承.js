// new回顾
// 1.创建一个全新的对象
// 2.这个新对象会的_proto_隐式原型指向 函数的prototype显示原型
// 3.这个新对象会绑定到函数调用的this上（this的绑定在这个步骤完成）
// 4.如果函数没有返回其他对象，表达式会返回这个新对象

function Parent() {
  this.isShow = true
  this.info = {
    name: '小明',
    age: 18
  }
}
Parent.prototype.getInfo = function () {
  // new的时候this指向实例的对象
  console.log(this.info)
  console.log(this.isShow)
}

function Student() {}
// 子类的原型对象 = 父类的实例对象
// 子类实例的_proto_就会指向父类的实例对象，拥有父类的属性
Student.prototype = new Parent()

let student1 = new Student()
let student2 = new Student()
console.log('-----------修改前----------')
student1.getInfo()
student2.getInfo()

student1.isShow = false
student1.info.name = '小红'
student2.info.age = 20
console.log('-----------修改后----------')
student1.getInfo()
student2.getInfo()

console.log('info相等', student1.info === student2.info)

// 缺点总结
// 1、父类的引用类型会被所有子类共享，更改一个子类的引用属性，其他子类也会受影响
// 2、子类实例不能给父类构造函数传参
