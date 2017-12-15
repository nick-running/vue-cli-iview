// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import '@/assets/css/styles.css'
import iview from 'iview'
import 'iview/dist/styles/iview.css';
import '@/assets/ali-fonts/iconfont.css'
import store from './store'

import axios from 'axios'
let vueInstance
axios.interceptors.request.use(function (config) {
  if (config.url.indexOf('/api/')!==-1&&localStorage.getItem('token')) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  config.timeout = 30000;
  return config;
}, function (err) {
  console.log(err);
  return Promise.reject(err);
});
// 响应拦截器
axios.interceptors.response.use(function (response) {
  if(response.data.errno==401) {
    // Vue.$messagebox.confirm('没有登录，是否前去登录？').then(action => {
    //   vueInstance.$router.push('/login')
    // });
  }
  return response;
}, function (error) {
  vueInstance.$Notice.error({
    title: '无法访问',
    desc: '数据未能正常访问！'
  });
  // vueInstance.$notify({group: 'warn', text: '数据未能正常访问'})
  // vueInstance.$messagebox('提示', '数据未能正常访问');
  // vueInstance.$indicator.close();
  console.log(error);
  return Promise.reject(error);
});
Vue.prototype.$axios = axios

Vue.use(iview)
import index from './page/index.vue'

Vue.use(Vuex)
// Vue.use(Element)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => { // beforeEach可以控制权限
  let title = to.meta.title
  if (title) document.title = title
  next()
  // if (to.matched.some(record => record.meta.requiresAuth)) {
  //   // this route requires auth, check if logged in
  //   // if not, redirect to login page.
  //   if (!auth.loggedIn()) {
  //     next({
  //       path: '/login',
  //       query: { redirect: to.fullPath }
  //     })
  //   } else {
  //     next()
  //   }
  // } else {
  //   next() // 确保一定要调用 next()
  // }
})
/* eslint-disable no-new */
vueInstance = new Vue({
  el: '#app',
  store,
  router,
  template: '<index/>',
  components: { index }
})
