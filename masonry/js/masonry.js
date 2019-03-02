function masonry() {
  var oParent = document.getElementById('wrap')
  var dls = document.querySelectorAll('.wrap>dl')
  var dlWidth = dls[0].offsetWidth
  var num = Math.floor(oParent.offsetWidth / dlWidth)
  var compareArray = [];
  for (var i = 0; i < dls.length; i++) {
    if (i < num) {
      compareArray[i] = dls[i].offsetHeight
    } else {
      var minHeight = Math.min.apply('', compareArray)
      var minKey = getMinHeightKey(compareArray, minHeight)
      dls[i].style.position = "absolute"
      dls[i].style.top = minHeight + 12 + "px"
      dls[i].style.left = dls[minKey].offsetLeft - 12 + "px"
      compareArray[minKey] += dls[i].offsetHeight + 12
    }
  }
}

function getMinHeightKey(arr, minH) {
  for (key in arr) {
    if (arr[key] == minH) {
      return key
    }
  }
}