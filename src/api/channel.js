import request from '@/utils/request'
export const getChannelAPI = () => {
  return request({
    url: '/v1_0/user/channels'
  })
}
