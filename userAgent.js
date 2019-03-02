/*
IE11: Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; rv:11.0) like Gecko
IE8: Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0) 
Firefox: Mozilla/5.0 (Windows NT 6.1; WOW64; rv:59.0) Gecko/20100101 Firefox/59.0
Opera: OPR Chrome Safari
Chrome: Chrome Safari
Safari: Safari

*/
var ua = navigator.userAgent;
var browser = "", version = "";
if (ua.indexOf("Trident") !== -1 && ua.indexOf("MSIE") === -1) {
  browser = "IE"
  version = 11
} else if (ua.indexOf("MSIE") !== -1) {
  browser = "IE"
} else if (ua.indexOf("Firefox") !== -1) {
  browser = "Firefox"
} else if (ua.indexOf("OPR") !== -1) {
  browser = "Opera"
} else if (ua.indexOf("Chrome") !== -1) {
  browser = "Chrome"
} else if (ua.indexOf("Safiri") !== -1) {
  browser = "Safari"
}
if (browser !== "" && version === "") {
  if (browser === "Opera") {
    var i = ua.indexOf("OPR")
    i += 3 + 1
  } else {
    var i = ua.indexOf(browser)
    i += browser.length + 1
  }
  version = parseFloat(ua.slice(i, i + 3))
}
document.write(browser + "&nbsp;" + version)