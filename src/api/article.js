/**
 * 文章相关请求模块
 */
import request from '@/utils/request'
import axios from 'axios'

const fileRequest = axios.create({
  baseURL: 'http://192.168.0.100:8083' // 请求的基础路径
})

/**
 * 获取文章列表
 */
export const getChannelArticle = params => {
  return request({
    method: 'GET',
    url: '/m/article/getChannelArticle',
    // Body 参数使用 data 设置
    // Query 参数使用 params 设置
    // Headers 参数使用 headers 设置
    params
  })
}

/**
 * 获取我的频道
 */
export const getUserChannels = () => {
  return request({
    method: 'GET',
    url: '/m/channel/getMyChannels'
  })
}

/**
 * 获取指定文章
 */
export const getArticle = articleId => {
  return request({
    method: 'GET',
    url: `/m/article/getArticleDoctor/${articleId}`
  })
}

/**
 * 获取指定文章
 */
export const getArticleUser = articleId => {
  return request({
    method: 'GET',
    url: `/m/article/getArticleUser/${articleId}`
  })
}

export const getSearchResult = params => {
  return request({
    method: 'GET',
    url: '/m/article/getSearchArticle',
    params
  })
}
export const updateCollect = (oid, collect) => {
  return request({
    method: 'GET',
    url: '/m/comment/updateCollectArticle',
    params: {
      oid, collect
    }
  })
}
export const updateLike = (oid, isLike) => {
  return request({
    method: 'GET',
    url: '/m/comment/updateLikeArticle',
    params: {
      oid, isLike
    }
  })
}

/**
 * 新建文章
 */
export const addArticle = (data, draft = false) => {
  return request({
    method: 'POST',
    url: '/edu/release/addArticle',
    params: {
      draft // 是否存为草稿（true 为草稿）
    },
    data
  })
}

/**
 * 编辑文章
 */
export const updateArticle = (articleId, data, draft = false) => {
  return request({
    method: 'POST',
    url: `/edu/release/updateArticle/${articleId}`,
    params: {
      draft // 是否存为草稿（true 为草稿）
    },
    data
  })
}

/**
 * 修改文章评论状态
 */
export const updateCommentStatus = (articleId, allowComment) => {
  return request({
    method: 'PUT',
    url: '/mp/v1_0/comments/status',
    params: {
      // 对象的属性名不受代码规范限制
      article_id: articleId
    },
    data: {
      allow_comment: allowComment
    }
  })
}
