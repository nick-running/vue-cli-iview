import Vue from 'vue'
import Router from 'vue-router'
// import orderListSimple from '@/page/order/order_list_simple.vue'
import question_list from '@/page/question_bank/question_list.vue'
import question_editor from '@/page/question_bank/question_editor.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      // name: 'Hello',
      component: question_list,
      meta: {title: '题库列表'}
    },
    {
      path: '/question_list',
      // name: 'Hello',
      component: question_list,
      meta: {title: '题库列表'}
    },
    {
      path: '/question_editor',
      // name: 'Hello',
      component: question_editor,
      meta: {title: '新增题目'}
    }
  ]
})
