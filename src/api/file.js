import request from '@/utils/request'
import axios from 'axios'

const fileRequest = axios.create({
  baseURL: 'http://localhost:8082' // 请求的基础路径
})

export const getDownloadUrl = (fileId) => {
  return request({
    method: 'GET',
    url: '/file/getDownloadUrl',
    params: {
      fileId: fileId
    }
  })
}
