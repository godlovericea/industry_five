import axios from 'axios'

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  baseURL: 'https://5gecomap.com:6012/', // url = base url + request url
  // baseURL: 'https://192.168.0.109:6012/', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

export default service
