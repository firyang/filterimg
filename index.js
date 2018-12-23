/**
 * 该函数从web文件中匹配所引用的图片，然后从原路径copy图片到新的路径
 * @param {Array} paths  web文件（html、vue、css）路径 , 绝对路径 eg. ['F:\\xampp\\htdocs\\mt\\css\\']
 * @param {String} src   项目图片原路径, 绝对路径 eg. 'F:\\xampp\\htdocs\\mt\\'
 * @param {String} des   copy引用图片存放到该路径, des不能与src相同, 绝对路径 eg. 'F:\\xampp\\htdocs\\mt\\copy\\'
 */
function filterImg(paths,src,des){
    // 检测目标目录是否存在，不存在则创建
    if(!fs.existsSync(des)){
        fs.mkdirSync(des)
    }
    
    for(let i in paths){
        let path = paths[i],
            // 获取paths指定路径下的所有web文件
            files = fs.readdirSync(path)

        for(let i in files){
            let file = files[i]

            if(/\.html|\.css|\.vue/ig.test(file)){
                // 读取文件
                let data = fs.readFileSync(path+file),
                    _html = data.toString(),
                    // 匹配_html中引用的图片
                    _arr = _html.match(/image\/\S+\.(gif|jpg|jpeg|bmp|png)/ig) 
                for(let i in _arr){
                    // 转换为绝对路径                    
                    let filePath = _arr[i].replace(/\//g,'\\'), 
                        // 去除文件名，方便下面创建目录
                        dir = filePath.slice(0,filePath.lastIndexOf('\\')),
                        dirArr = []
                    if(dir.indexOf('\\')!=-1){
                        dirArr = dir.split('\\')
                        // 检测目录是否存在，不存在则创建
                        for(let i=0,index=0;i<dirArr.length;i++){
                            if(i==0){
                                index = dir.indexOf('\\')
                            }else{
                                index = dir.indexOf('\\',index+1)
                                if(index==-1) index = dir.length;
                            }

                            let _dir = dir.slice(0,index)

                            if(!fs.existsSync(des+'\\'+_dir)){
                                fs.mkdirSync(des+'\\'+_dir)
                            }
                        }
                    }else{
                        if(!fs.existsSync(des+'\\'+dir)){
                            fs.mkdirSync(des+'\\'+dir)
                        }
                    }
                    
                    // 复制文件
                    fs.writeFileSync(des+filePath,fs.readFileSync(src+filePath))
                }
            }
        }
    }
    console.log('success')
}