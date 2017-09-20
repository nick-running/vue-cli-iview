import Vue from 'vue'
import Router from 'vue-router'
import generatingStandard from '@/page/standardManagement/generatingStandard.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      // name: 'Hello',
      component: generatingStandard,
      meta: {title: '市场管理'}
    }
  ]
})
