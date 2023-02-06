// 原型式继承+工厂模式(批量生成继承对象)

function objCopy(obj) {
  function f() {}
  f.prototype = obj
  return new f()
}

function createStudent(person) {
  const newObj = objCopy(person)
  newObj.studying = function () {
    console.log(this.name + 'studying')
  }
}

const person = {
  name: '小明'
}

const student = createStudent(person)
student.name = '小张'
student.studying()
