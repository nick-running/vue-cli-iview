<template>
    <div>
      mint ui
      <mt-tabbar v-model="selected">
        <mt-tab-item id="orderList">
          <div class="iconfont icon-dingdan"></div>
          订单
        </mt-tab-item>
        <mt-tab-item id="orderFood">
          <div class="iconfont icon-diancan"></div>
          点餐
        </mt-tab-item>
        <mt-tab-item id="product">
          <div class="iconfont icon-chanpin"></div>
          产品
        </mt-tab-item>
      </mt-tabbar>
    </div>
</template>
<script>
  export default {
    name: 'demo',
    data() {
      return {
        selected: 'orderList'
      }
    },
    watch: {
      selected(val){
        console.log(val);
      }
    },
    created(){
      this.$toast('提示信息');
    }
  }
</script>
<style>
  .iconfont{
    margin-bottom: 5px;
  }
</style>
