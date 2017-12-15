<template>
    <div>

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

    }
  }
</script>
<style>
  .iconfont{
    margin-bottom: 5px;
  }
</style>
