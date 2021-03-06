
import Qs from 'qs';
import axios from 'axios'; 

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.timeout = 10000; //全局 请求 超时 设置默认时间为10s;
axios.defaults.withCredentials=true; //跨域问题

/**
 * 请求拦截器，新增ant-design Toast()事件
 */
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

//如果你想在稍后移除拦截器，可以这样：
// var myInterceptor = axios.interceptors.request.use(function () {/*...*/});
// axios.interceptors.request.eject(myInterceptor);

  