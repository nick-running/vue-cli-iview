// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import '@pubCss/zjadmin.css'
import '@pubCss/element-theme-green/index.css'
import 'element-ui/lib/index.js'
import Element from 'element-ui'

// import BackLayout from './components/layouts/BackLayout.vue'
import index from './page/index.vue'

Vue.use(Vuex)
Vue.use(Element)
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
new Vue({
  el: '#app',
  router,
  template: '<index/>',
  components: { index }
})
