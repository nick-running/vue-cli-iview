<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'index',
    data() {
      return {

      }
    },
    created () {
//      let _this = this
//      axios({
//        method: 'post',
//        url: '/api_cu/script/cu/availableMenus'
////        url: '/api/qz/api/findDictionaryList',
////        data: {id: 2001}
//      }).then(function (resp) {
////        console.log(resp.data)
//        eval(resp.data)
//        _this.menus = app.mainMenus
////        console.log(app.mainMenus)
////        console.log('<----------')
//        console.log(_this.menus)
//      }).catch(function (error) {
//        _this.$notify.warning('数据未能正常访问')
//      })
    }
  }
</script>

<style>

</style>
