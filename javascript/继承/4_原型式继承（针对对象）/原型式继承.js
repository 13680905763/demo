// Object.create() 在只有一个参数时，与objCopy效果相同

function objCopy(obj) {
  // 返回一个新对象，该对象的_proto_指向传入的父对象
  function f() {}
  f.prototype = obj
  return new f()
}

const parent = {
  name: '小明',
  friends: ['jack', 'tom'],
  getName:function(){
    console.log(this.name);
  }
}

const student = objCopy(parent)
const teacher = objCopy(parent)

student.grade = '高一'
teacher.type = '数学'

console.log(student)
console.log(teacher)

// 父类方法，属性可复用
// 引用类型属性会被共享