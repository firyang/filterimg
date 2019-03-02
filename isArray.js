/**
 * 判断是不是数组类型
 */

// 1. 判断原型对象
Array.prototype.isPrototypeOf(obj) // obj.__proto__ == Array.prototype
console.log(Array.prototype.isPrototypeOf(['abc']))

// 2. 判断构造函数
obj instanceof Array // obj.constructor == Array
console.log(['abc'] instanceof Array)

// 3. toString()
Object.prototype.toString.call(obj)
console.log(Object.prototype.toString.call(['abc']) == "[object Array]")

// 4. isArray()
console.log(Array.isArray(['abc']))