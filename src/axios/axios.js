import axios from 'axios'
import qs from 'qs'
import * as _ from 'lodash'
import { Toast } from 'vant'

// 添加请求拦截器
const httpConfig = {}
axios.interceptors.request.use((config) => {
  const obj = {}
  config.data = config.data ? config.data : {}
  if (config.method === 'post') {
    httpConfig.showMessage = _.isUndefined(config.showMessage) ? true : !!config.showMessage
    config.headers['Content-Type'] = config.application ? 'application/x-www-form-urlencoded;charset=utf-8' : 'application/json;charset=utf-8'
    const contentType = config.headers['Content-Type']
    if (contentType && contentType.includes('application/x-www-form-urlencoded')) {
      // ContentType是application/x-www-form-urlencoded，则需要将json数据序列化
      config.data = qs.stringify(config.data)
    }
    return config
  } else {
    config.headers = obj
    return config
  }
}, (error) => {
  // 对请求错误做些什么
  console.log(error, -1)
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use((response) => {
  // 对响应数据做点什么
  if (httpConfig.showMessage) {
    if (response.data.code !== 200 && response.data.code !== 11001) {
      if (response.data.message) {
        if (httpConfig.notShowToast) {
          return response
        }
        console.log(response.data.message, -1)
        Toast(response.data.message)
      }
    }
  }
  return response
}, (error) => {
  // 找不到请求路径（response的状态码是404  还有服务器错误什么的状态码 比如500  也可以在这里判断）
  if (error.response && error.response.status !== 200) {
    console.log('服务开小差~~~', -1)
    Toast.fail('服务开小差~~~')
  }
  return Promise.reject(error)
})

export default axios
