import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { addCSRFToken } from './security';
const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'https://api.example.com',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  });
instance.interceptors.request.use(addCSRFToken);
// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么，例如加入 token
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据做点什么
    return response.data;
  },
  (error) => {
    // 对响应错误做点什么
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 未授权，可能需要重新登录
          break;
        case 404:
          // 请求的资源不存在
          break;
        case 500:
          // 服务器错误
          break;
        default:
          console.log(`An error occurred: ${error.message}`);
      }
    } else {
      console.log(`An error occurred: ${error.message}`);
    }
    return Promise.reject(error);
  }
);

const request = async <T = any>(config: AxiosRequestConfig): Promise<T> => {
  try {
    const response = await instance(config);
    return response as T;
  } catch (error) {
    console.error('Request failed:', error);
    throw error;
  }
};

export default request;