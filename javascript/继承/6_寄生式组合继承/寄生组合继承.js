// 子类的原型对象 = 父类寄生的原型对象

function objCopy(obj) {
  function f() {}
  f.prototype = obj
  return new f()
}

function inheritPrototype(subType, superType) {
  // 子类的原型对象 = 父类寄生的原型对象
  subType.prototype = objCopy(superType.prototype)
  subType.prototype.constructor = subType
}

function Person(age) {
  this.age = age
}
Person.prototype.eating = function () {
  console.log(this.age, '正在eating')
}

function Student(age, grade) {
  Person.call(this, age)
  this.grade = grade
}

inheritPrototype(Student, Person)

const student1 = new Student(18, '高一')
console.log(student1);
student1.eating()