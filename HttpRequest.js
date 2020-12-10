import config from './config.js'
class HttpRequest {
  constructor() {
    this.baseURL = config.baseURL   // baseURL 根据proccess.NODE_ENV 设定
    this.timeout = 3000
  }
  setInterceptors(instance) {
    instance.interceptors.request.use(config => {
      // 增加token等
      return config
    })
    instance.interceptors.response.use(res => {
      if (res.status == 200) {
        return Promise.resolve(res.data)
      } else {
        return Promise.reject(res.data)
      }
    }, err => {
      // 错误处理
    })
  }
  mergeOptions(options) {
    return { baseURL: this.baseURL, timeout: this.timeout, ...options }
  }
  request(options) {
    const instance = axios.create()
    this.setInterceptors(instance)
    const opts = this.mergeOptions(options)
    return instance(opts)
  }
  get(url, config) {
    return this.request({
      method: 'get',
      url,
      ...config
    })
  }
  post(url, data) {
    return this.request({
      method: 'get',
      url,
      data
    })
  }
}

export default new HttpRequest