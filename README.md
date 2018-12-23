# filterimg
A javascript for filtering images that are not used in an project
用于过滤不在项目中使用的js脚本

/**
 * 该函数从web文件中匹配所引用的图片，然后从原路径copy图片到新的路径
 * @param {Array} paths  web文件（html、vue、css）路径 , 绝对路径 eg. ['F:\\xampp\\htdocs\\mt\\css\\']
 * @param {String} src   项目图片原路径, 绝对路径 eg. 'F:\\xampp\\htdocs\\mt\\'
 * @param {String} des   copy引用图片存放到该路径, des不能与src相同, 绝对路径 eg. 'F:\\xampp\\htdocs\\mt\\copy\\'
 */
