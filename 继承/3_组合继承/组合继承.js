// 组合继承就是 原型链继承+借用构造函数继承

function Parent(name) {
  this.name = name
}
Parent.prototype.getName = function () {
  console.log(this.name)
}

function Student(name) {
  Parent.call(this, name)
  this.age = age
}

Student.prototype = new Parent()

// 总结
// 1、父类方法可以复用
// 2、子类可以传参
// 3、父类构造函数的引用类型属性不会被共享

// 缺点
// 1、调用两次父类构造函数
// 2、所有子类实例会拥有两份父类属性（一份在自身，一份在子类对应的原型对象）
