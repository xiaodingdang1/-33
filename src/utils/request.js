// 1.yarn add axios
// 2.引入axios
// 3.配置axios
import axios from 'axios'
import store from '@/store'
// axios.default.baseURL = "http://toutiao.itheima.net"
// axios.default.timeout = 5000
// const request = axios.create()克隆axios
const request = axios.create({
  timeout: 5000,
  baseURL: 'http://toutiao.itheima.net'
})

// 不然你这个怎么来的
request.interceptors.request.use(
  function (config) {
    const {
      getters: { isLogin },
      state: { tokenObj }
    } = store
    if (isLogin) {
      config.headers.Authorization = `Bearer ${tokenObj.token}`
    }
    return config
  },
  function (error) {
    throw error
  }
)
export default request
