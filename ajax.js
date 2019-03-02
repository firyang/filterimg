"use strict"
function ajax({ type, url, data, dataType }) {
  return new Promise(callback => {
    //创建xhr对象
    let xhr = new XMLHttpRequest();
    //创建请求
    if (data !== undefined && type.toLowerCase() === "get") {
      url += "?" + data;
    }
    xhr.open(type, url, true);
    //设置回调函数并接收响应数据
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          let resData = xhr.responseText;
          if (dataType !== undefined && dataType.toLowerCase() === "json") {
            resData = JSON.parse(resData);
          }
          callback(resData);
        }
      }
    }
    //post方式，设置请求头
    if (type.toLowerCase() === "post") {
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    }
    //发送请求
    xhr.send(type.toLowerCase() === "get" ? null : data);
  })
}