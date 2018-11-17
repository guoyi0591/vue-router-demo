import Vue from 'vue'
import App from './App'
import router from './router' // 这里引入的是router目录，会默认识别里面的index.js文件（不能是其他名字）

// 引入axios
import axios from 'axios'
Vue.prototype.$http = axios

import VueResource from 'vue-resource'
Vue.use(VueResource)

import $ from 'jquery'
Vue.prototype.$ = $

/* eslint-disable no-new */
new Vue({
  el: '#app', // 这里绑定的是index.html中的id为app的div元素
  router,
  render: h => h(App)
/*
  这里的render: h => h(App)是es6的写法
  转换过来就是：  暂且可理解为是渲染App组件
  render:(function(h){
    return h(App);
  });
*/
})
