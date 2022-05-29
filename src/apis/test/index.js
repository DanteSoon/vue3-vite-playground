const apiUrl = import.meta.env.VITE_API_URL

// get请求示例 data为get请求参数  params为axios拦截器config里添加的参数
export const getTest = (data = {}, params = {}) => {
  return projectAxios.get(`${apiUrl}insurance/v1/securities/getSecuritiesBannerList`, {
    ...params,
    params: data,
  })
}
// post请求示例 data为post请求参数  params为axios拦截器config里添加的参数
export const postTest = (data = {}, params = {}) => {
  return projectAxios.post(`${apiUrl}insurance/v1/securities/getSecuritiesList`, data, {
    ...params,
  })
}
