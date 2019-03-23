/**
 * 图片列表slider左右滑动
 * @param {String} selector css选择器
 * 
 * slider DOM 结构如下
 * <div>
 *  <ul #id="slider">
 *    <li>1</li>
 *    <li>2</li>
 *  </ul>
 * </div> 
 */
function touchEvents(selector) {
  let slider = document.querySelector(selector),
    isScrolling, // 这个参数判断是垂直滚动还是水平滚动
    count = slider.children.length, // 图片数量
    imgWidth = slider.children[0].clientWidth, // 图片宽度
    index = 0,
    startOffsetLeft; // 每次滑动时，slider初始位置

  slider.style.height = slider.children[0].offsetHeight + "px";

  let events = {
    startPos: null,
    endPos: null,
    handleEvent: function (event) {
      let type = event.type;
      switch (type) {
        case "touchstart":
          this.start(event);
          break;
        case "touchmove":
          this.move(event);
          break;
        case "touchend":
          this.end(event);
      }
    },
    start: function (event) {
      // console.log("start");
      let touch = event.targetTouches[0]; //touches数组对象获得屏幕上所有的touch，取第一个touch
      this.startPos = { x: touch.pageX, y: touch.pageY, time: +new Date() }; //取第一个touch的坐标值
      slider.style.transition = "none";
      startOffsetLeft = slider.offsetLeft;

      slider.addEventListener("touchmove", this, false);
      slider.addEventListener("touchend", this, false);
    },
    move: function (event) {
      // console.log("move");
      if (
        event.targetTouches.length > 1 ||
        (event.scale && event.scale !== 1)
      )
        return;

      let touch = event.targetTouches[0];

      this.endPos = {
        x: touch.pageX - this.startPos.x,
        y: touch.pageY - this.startPos.y
      };
      isScrolling =
        Math.abs(this.endPos.x) < Math.abs(this.endPos.y) ? 1 : 0; //isScrolling为1时，表示纵向滑动，0为横向滑动
      if (isScrolling === 0) {
        event.preventDefault(); //阻止触摸事件的默认行为，即阻止滚屏
        slider.style.left = startOffsetLeft + this.endPos.x + "px";
      }
    },
    end: function (event) {
      // console.log("end");
      slider.style.transition = "left 0.3s";
      if (Math.abs(this.endPos.x) > 20) {
        if (this.endPos.x > 0) {
          index > 0 && index--;
        } else {
          index < count - 1 && index++;
        }
      }

      slider.style.left = -index * imgWidth + "px";

      slider.removeEventListener("touchmove", this, false);
      slider.removeEventListener("touchend", this, false);
    }
  };

  //判断设备是否支持touch事件
  let isTouch =
    "ontouchstart" in window ||
    (window.DocumentTouch && document instanceof DocumentTouch);

  if (!!isTouch) slider.addEventListener("touchstart", events, false);
}