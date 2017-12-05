import Vue from 'vue'
import Router from 'vue-router'
// import orderListSimple from '@/page/order/order_list_simple.vue'
import demo from '@/page/test/demo.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      // name: 'Hello',
      component: demo,
      meta: {title: '订单管理'}
    }
  ]
})
