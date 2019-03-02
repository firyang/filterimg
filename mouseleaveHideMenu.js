/*
 * 当鼠标进入 a ，ul 显示
 * 当鼠标移出 a 和 ul 区域，ul 隐藏
  <a id="btn" @mouseenter="showMenu" @mouseleave="hideMenu" > 点我展开菜单</a >
  <ul id="pop" ref="pop">
    <li>1111111111</li>
    <li>2222222222</li>
    <li>3333333333</li>
    <li>4444444444</li>
    <li>5555555555</li>
  </ul>
*/
showMenu() {
  document.getElementById("pop").style.display = "block";
}

// jquery
hideMenu(){
  let $tar = $(this.$refs.pop)
  let popTop = $tar.offset().top
  let offsetTop

  let move = function (e) {
    offsetTop = e.pageY
    if (offsetTop > popTop - 1) {
      $tar.bind('mouseleave', function () {
        $(this).hide();
      })
      $(document).unbind("mousemove", move)
    } else {
      $tar.hide();
      $(document).unbind("mousemove", move)
    }
  }

  $(document).bind("mousemove", move)
}

// js
hideMenu() {
  let pop = document.getElementById("pop");
  let offsetTop;
  let popTop = pop.offsetTop;

  let move = function (event) {
    offsetTop = event.pageY;
    if (offsetTop > popTop - 1) {
      pop.addEventListener('mouseleave', function () {
        this.style.display = 'none';
      })
      document.removeEventListener("mousemove", move)
    } else {
      pop.style.display = "none";
      document.removeEventListener("mousemove", move)
    }
  }

  document.addEventListener("mousemove", move)
}