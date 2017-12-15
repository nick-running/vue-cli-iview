<template>
  <div>
    <Menu mode="horizontal" theme="dark" active-name="1">
      <MenuItem name="1" @click.native="handleClick(1)">
        <Icon type="ios-bookmarks-outline"></Icon>
        题库管理
      </MenuItem>
      <MenuItem name="2" @click.native="handleClick(2)">
        <Icon type="ios-people"></Icon>
        物品管理
      </MenuItem>
      <!--<Submenu name="3">-->
        <!--<template slot="title">-->
          <!--<Icon type="stats-bars"></Icon>-->
          <!--统计分析-->
        <!--</template>-->
        <!--<MenuGroup title="使用">-->
          <!--<MenuItem name="3-1">新增和启动</MenuItem>-->
          <!--<MenuItem name="3-2">活跃分析</MenuItem>-->
          <!--<MenuItem name="3-3">时段分析</MenuItem>-->
        <!--</MenuGroup>-->
        <!--<MenuGroup title="留存">-->
          <!--<MenuItem name="3-4">用户留存</MenuItem>-->
          <!--<MenuItem name="3-5">流失用户</MenuItem>-->
        <!--</MenuGroup>-->
      <!--</Submenu>-->
      <!--<MenuItem name="4">-->
        <!--<Icon type="settings"></Icon>-->
        <!--综合设置-->
      <!--</MenuItem>-->
    </Menu>

    <Row>
      <Col span="20" offset="2">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {

      }
    },
    methods: {
      handleClick(index) {
        switch (index) {
          case 1:
            this.$router.push('/question_list')
            break;
          case 2:
            break;
        }
      }
    },
    created () {
    }
  }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .1s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
  }
</style>
