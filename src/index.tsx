import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'antd-mobile/es/global'
import './styles/global.less'
import './i18n'
import reportWebVitals from './utils/reportWebVitals'
// 移动端适配
function setRem() {
  const html = document.documentElement;
  const width = html.clientWidth;
  const ratio = width / 375;
  html.style.fontSize = ratio * 37.5 + 'px';
}

setRem();
window.addEventListener('resize', setRem);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
// 如果你想要在控制台中看到性能指标，可以使用这个函数
reportWebVitals(console.log);

// 如果你想要将性能指标发送到分析服务，可以使用类似这样的函数
// reportWebVitals((metric) => {
//   sendToAnalytics(metric);
// });