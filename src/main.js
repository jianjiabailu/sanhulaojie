import Vue from 'vue'
import Router  from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/styles.css'
import store from './vuex/store' // 引入store

import App from './App'
import routes from './router'

Vue.use(Router)
Vue.use(VueResource)
Vue.use(ElementUI);
// 定义一个日志数组
Vue.prototype.logMessages = [];
// 请求拦截
Vue.http.interceptors.push((request, next) => {
  // continue to next interceptor
  next((req)=>{
    // modify response
  });
});
// 响应拦截
Vue.http.interceptors.push((request, next)  => {
  // continue to next interceptor
  next((res) => {
    // modify response
  });
});

// 阻止启动生产消息
Vue.config.productionTip = false;
// 全局注册所有公用组件
require('./components/_global.js')
// 全局注册所有自定义指令
require('./assets/js/directive.js')
// 全局注册所有自定义过滤器
require('./assets/js/filter.js')

new Vue({
  router: new Router({routes: routes}),
  store: store,
  render: h => h(App),
}).$mount('#app')
