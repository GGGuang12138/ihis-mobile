/**
 * 用户相关请求模块
 */
import request from '@/utils/request'

/**
 * 登陆/注册
 */
export const login = data => {
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data
  })
}
export const getRecDoctorChannels = () => {
  return request({
    method: 'GET',
    url: '/test/'
  })
}

/**
 * 关注用户
 */
export const addFollowDoctor = userId => {
  return request({
    method: 'POST',
    url: '/m/user/addFollowDoctor',
    data: {
      target: userId
    }
  })
}

/**
 * 取消关注用户
 */
export const deleteFollowDoctor = userId => {
  return request({
    method: 'POST',
    url: '/m/user/deleteFollowDoctor',
    data: {
      target: userId
    }
  })
}
