# filterimg  
  
A javascript for filtering images that are not used in an project  
  
用于过滤不在项目中引用的图片的js脚本  
  
参数说明：  
/**  
 * 该方法从web文件中匹配所引用的图片，然后从原路径copy图片到新的路径，最后用copy的文件替换原文件（这一步需手动实现）  
 * @param {Array} paths  web文件（html、vue、css）路径 , 绝对路径 eg. ['F:\\xampp\\htdocs\\mt\\css\\']  
 * @param {String} src   项目图片原路径, 绝对路径 eg. 'F:\\xampp\\htdocs\\mt\\'  
 * @param {String} des   copy引用图片存放到该路径, des不能与src相同, 绝对路径 eg. 'F:\\xampp\\htdocs\\mt\\copy\\'  
 *                       也可将原图片路径先移至其他目录，将src指定为移动后的目录，des指定为原路径  
 */  
   
 使用方法：  
 1、将js文件copy到项目中  
 2、在原方法页面中直接声明参数，然后调用方法  
 3、在VScode或Webstorm中运行即可（在这两个编辑器中如何运行node程序，可网上搜索方法）  
 4、该方法使用nodejs的fs模块方法，所以需要在node环境中执行  
