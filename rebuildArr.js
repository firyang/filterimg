/**
 * 数据分类 
 * 原结构 [ {},{},...]
 * 分类结构 [ { type: 'all', result: [ {},... ] }, ... ]
 * @param { Array } data
 */
function createData(data) {
  let arr = []
  data.forEach(elem => {
    let sku_sub_name = elem.sku_sub_name
    let _elem = []
    let type = ''
    for (let key in elem) {
      if (/sku_sub_name|sku_id/g.test(key)) {
        _elem[key] = elem[key]
      }
    }
    if (sku_sub_name.indexOf('注塑机') != -1) {
      type = 'm'
      addType(type)
      addResult(type, _elem)
    } else if (sku_sub_name.indexOf('常规') != -1 || sku_sub_name.indexOf('CRN') != -1) {
      type = 'h'
      addType(type)
      addResult(type, _elem)
    }
  })

  arr.unshift({ type: 'All', result: data, name_en: 'All', name_cn: '全部' })
  return arr

  /**
   * 创建分类
   * @param {String} type 
   */
  function addType(type) {
    let _elem = {}
    let i = 0
    _elem.type = type
    _elem.result = []
    _elem.name_en = type
    _elem.name_cn = type

    if (arr.length === 0) {
      arr.push(_elem)
    } else {
      for (; i < arr.length; i++) {
        let item = arr[i]
        if (item.type === type) {
          return
        }
      }
    }
    i == arr.length && arr.push(_elem)
  }

  /**
   * 给分类添加数据
   * @param {String} type 
   * @param {Array} data 
   */
  function addResult(type, data) {
    arr.forEach(item => {
      if (item.type == type) {
        item.result.push(data)
      }
    })
  }
}