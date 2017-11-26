import Vue from 'vue'
import Router from 'vue-router'
import listDemoPage from '@/page/listDemo/listDemoPage.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      // name: 'Hello',
      component: listDemoPage,
      meta: {title: '市场管理'}
    }
  ]
})
