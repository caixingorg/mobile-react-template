import { AxiosRequestConfig } from 'axios';

// 防止 XSS 攻击的函数
export const escapeHtml = (unsafe: string) => {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
}

// 为 API 请求添加 CSRF token
export const addCSRFToken = (config: AxiosRequestConfig) => {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if (token) {
        config.headers['X-XSRF-TOKEN'] = token;
    }
    return config;
}

// 内容安全策略
export const csp = {
    'default-src': ["'self'"],
    'script-src': ["'self'", "'unsafe-inline'"],
    'style-src': ["'self'", "'unsafe-inline'"],
    'img-src': ["'self'", 'data:', 'https:'],
    'font-src': ["'self'", 'https:', 'data:'],
    'connect-src': ["'self'", 'https://api.example.com']
};