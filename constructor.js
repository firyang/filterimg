"use strict";
//经典笔试: 如何在js中实现公有和私有属性(java)
function Emp(id, ename, salary, age) {
  var _age;  //用闭包模拟出私有属性的效果
  Object.defineProperties(this, {
    id: {
      value: id,
      writable: false,
      // configurable: false,
      enumerable: true
    },
    ename: {
      value: ename,
      // configurable: false,
      enumerable: true
    },
    salary: {
      value: salary,
      enumerable: false,
      // configurable: false
    },
    age: {
      get() { return _age },
      set(val) {
        if (val >= 18 && val <= 65)
          _age = val;
        else
          throw new Error("年龄必须介于18~65之间");
      },
      enumerable: true,
      // configurable: false
    }
  });
  this.age = age;
  //Object.preventExtensions(this); //防止对象添加新属性, 原理是将私有属性extensions改为false
  Object.seal(this); // 不但将extensions属性改为false, 还自动设置每个属性的configurable为false
}
var eric = new Emp(1001, "艾里克", 12000, 26);
eric.age = 27;
//eric._age=-2;
for (var key in eric) {
  console.log(key + ":" + eric[key]);
}
console.log(eric._age);