import axios from './axios'

const $http = {
  post(url, data, param) {
    console.log('%c 🥡 url: ', 'font-size:20px;background-color: #465975;color:#fff;', url)
    return axios.post(url, data, param).then((res) => {
      if (res.data.code === 200) { // 结合自己项目请求后台的状态码判断
        return Promise.resolve(res.data)
      } else if (res.data.code === 1003) { // 结合自己项目请求后台的状态码判断
        return Promise.reject(res.data)
      } else {
        return Promise.reject(res.data)
      }
    }).catch((err) => {
      console.log(11111, err)
    })
  },
  get(url, param) {
    console.log('%c 🍫 url: ', 'font-size:20px;background-color: #2EAFB0;color:#fff;', url)
    return axios.get(url, param).then((res) => {
      if (res.data.code === 0 || res.data.code === 200) {
        return Promise.resolve(res.data.content)
      } else if (res.data.code === 1003) {
        return Promise.reject(res.data)
      } else {
        return Promise.reject(res.data)
      }
    }).catch((err) => {
      console.log(11111, err)
    })
  },
}
export default $http
