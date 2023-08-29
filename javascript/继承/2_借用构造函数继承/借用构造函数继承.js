function Parent(name) {
  this.info = { name: name }
}

function Student(name) {
  // 在子类调用父类构造函数，在子类实例中每个引用属性都是独有的
  Parent.call(this, name)
}

const student1 = new Student('小张')
const student2 = new Student('小李')

console.log('info是否相等', student1 === student2)
console.log(student1)
console.log(student2)

// 总结
// 1、可以在子类构造函数中向父类传参数
// 2、父类的引用属性不会被共享
// 3、父类方法不能复用
