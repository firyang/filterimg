/**
 * 1. ie, chrome, 360
 * 刷新：onbeforeunload -> onunload -> onload
 * 关闭: onbeforeunload -> onunload
 * 2. firefox
 * 刷新：onbeforeunload -> onunload
 * 关闭: onbeforeunload
 */

let beforeUnload_time = 0
let gap_time = 0
let is_fireFox = navigator.userAgent.includes('Firefox')
window.onbeforeunload = function () {
  beforeUnload_time = Date.now()
  if (is_fireFox) {
    // 火狐关闭
  }
}
window.onunload = function () {
  gap_time = Date.now() - beforeUnload_time
  if (gap_time <= 5) {
    // 浏览器关闭
  } else {
    // 浏览器刷新
  }
}