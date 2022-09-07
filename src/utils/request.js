// 1.yarn add axios
// 2.引入axios
// 3.配置axios
import axios from 'axios'
// axios.default.baseURL = "http://toutiao.itheima.net"
// axios.default.timeout = 5000
// const request = axios.create()克隆axios
const request = axios.create({
  timeout: 5000,
  baseURL: 'http://toutiao.itheima.net'
})

export default request