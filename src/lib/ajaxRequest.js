import axios from 'axios'

// const instance = axios.create({
//   // baseURL:process.env.NODE_ENV === 'development' ? 'http:localhost:3006':'/'
// })

// 实际中，可能会有：每个请求的拦截器需要提前做不同的处理
class AjaxRequest{
  constructor() {
    this.baseURL = process.env.NODE_ENV  === 'development' ? '':'/'
    this.timeout = 2000
  }

  request (userConfig) { // 用户请求设置的方法
    // 传入自定义参数，可以使每个请求个性化设置
    const instance = axios.create({
      baseURL: this.baseURL,
      timeout:this.timeout
    })

    // 请求拦截器
    instance.interceptors.request.use(config => {
      config.headers.Authorization = localStorage.getItem('token')
      // config.headers.Authorization = 'token'
      return config
    },err => Promise.reject(err))

    // 响应拦截器
    instance.interceptors.response.use(res => {
      return res.data // 减少了一层数据处理
    }, err => Promise.reject(err))
    
    // 带有用户自定义参数的axios实例
    return instance(userConfig)
  }
}


// // 统一使用的拦截器
// instance.interceptors.request.use(config => {
//   console.log(1)
//   return config
// })

// instance.interceptors.response.use(config => {
//   console.log(2)
//   return config
// })

export default new AjaxRequest()