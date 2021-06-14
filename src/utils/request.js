/* eslint-disable no-undef */
/**
 * 请求模块
 */
import axios from 'axios'
import JSONbig from 'json-bigint'

const request = axios.create({
  baseURL: 'http://192.168.0.100:8083',

  // 定义后端返回的原始数据的处理
  transformResponse: [function (data) {
    try {
      // 如果转换成功，则直接把结果返回
      // console.log('unchange', JSONbig.parse(data))
      return JSONbig.parse(data)
    } catch (err) {
      console.log('转换失败', err)
      return data
    }
    // axios 默认在内部使用 JSON.parse 来转换处理原始数据
    // return JSON.parse(data)
  }]
})

// 请求拦截器

// 响应拦截器

// 输出为request模块
export default request
