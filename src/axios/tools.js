
import axios from 'axios'
import qs from 'qs'
import { message } from 'antd';


axios.interceptors.request.use(config => {
  // 发送请求之前做什么
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})

function checkStatus(response) {
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200)) {
    return response
  }
  else {
    message.error('网络异常');
  }
  // 异常状态下，把错误信息返回去
  return {
    status: -404,
    msg: '网络异常'
  }
}

export default {
  post(url, data, adata) {
    return axios({
      method: 'post',
      url,
      data: qs.stringify(data),
      timeout: 50000,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      }
    }).then(
      (response) => {
        return checkStatus(response);
      }
    )
  },
  get(url, data, adata) {
    return axios({
      method: 'get',
      url,
      timeout: 50000,
      data: qs.stringify(data),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    )
  }
}
