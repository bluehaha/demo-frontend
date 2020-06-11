import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/weather-records',
    method: 'get',
    params
  })
}
