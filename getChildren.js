/**
 * 获得指定元素下所有子元素(迭代器)
 * @param {Object} el   父元素
 */
function getChildren(el) {
  let iterator = document.createNodeIterator(el, NodeFilter.SHOW_ELEMENT, null, false),
    children = []
  do {
    let curr = iterator.nextNode()
    if (curr != null) children.push(curr)
    else break
  } while (true)
  return children
}

let el = document.getElementById('parent')
let arr = getChildren(el)
console.log(arr)

/**
 * 获得指定元素下所有子元素(递归)
 * @param {Object} el   父元素
 */
function getChildren2(el) {
  let ch = el.children
  children.push(el)
  for (let i = 0, len = ch.length; i < len; i++) {
    arguments.callee(ch[i])
  }
}

let children = []
getChildren2(el)
console.log(children)

/**
 * 获得指定元素下所有子元素(jquery)
 */
let chList = $('#parent').children().find('*')