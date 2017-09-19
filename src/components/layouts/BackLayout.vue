<template>
  <div>
    <div id="header" class="header">
      <h1>
        <router-link to="/" class="logo" :style="styles.logo">
          后台管理系统
        </router-link>
      </h1>
    </div>
    <div id="body">
        <!--<div class="container">-->
          <el-row class="tac">
          <el-col :span="4">
            <!--<h5>带 icon</h5>-->
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @select="handleSelect" @close="handleClose">
              <template v-for="(menu, index) in sideMenu">
                <template v-if="menu.children">
                  <el-submenu :index="index+''">
                    <template slot="title"><i class="el-icon-message"></i>{{menu.title}}</template>
                    <el-menu-item-group>
                      <!--<template slot="title">{{menu.title}}</template>-->
                      <template v-for="(sub1, subIndex) in menu.children">
                        <el-menu-item :index="sub1.url">{{sub1.title}}</el-menu-item>
                      </template>
                    </el-menu-item-group>
                  </el-submenu>
                </template>
                <template v-else>
                  <el-menu-item :index="menu.url"><i class="el-icon-menu"></i>{{menu.title}}</el-menu-item>
                </template>
              </template>

            </el-menu>
          </el-col>
          <el-col :span="20">
            <div class="right-panel container-panel">
              <transition name="slide-fade" mode="out-in">
                <router-view></router-view>
              </transition>
            </div>
          </el-col>
        </el-row>
        <!--</div>-->
    </div>
    <div id="footer" class="footer">
        <h3>质见后台管理系统</h3>
    </div>
  </div>
</template>
<script>
  import router from '@/router'
  let logoNormal = require('@/assets/logo-normal.png')
  export default{
    name: 'Layout',
    components: {},
    data () {
      return {
        styles: {
          logo: {
            'background-image': 'url("'+logoNormal+'")',
            'background-repeat': 'no-repeat'
          }
        },
        sideMenu: [
          {
            title: '标准管理',
            children: [
              {title: '题录管理', url: '/bz/1'},
              {title: '订单管理', url: '/bz/2'},
              {title: '公告管理', url: '/bz/3'},
              {title: '标准更新记录', url: '/bz/4'},
              {title: '生成标准(available)', url: '/generatingStandard'},
              {title: '标准化知识(available)', url: '/sdKnowledge'},
              {title: '搜索记录', url: '/bz/6'}
            ]
          },
          {
            title: '会员管理', url: '/vip'
          },
          {
            title: '富文本数据', url: '/fwb'
          },
          {
            title: '系统设置',
            children: [
              {title: '管理员管理', url: '/admin/1'},
              {title: '菜单管理', url: '/admin/2'}
            ]
          }
        ]
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key)
        router.push(key)
      },
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>
<style>
  html,
  body {
    margin:0;
    padding:0;
    height:100%;
    font-family: 'Microsoft YaHei UI';
    color: #5e5e5e;
    font-size: 14px;
  }
  #container {
    min-height:100%;
    position:relative;
  }
  #header {
    background: rgba(19, 60, 88, 0.78);
    /*-webkit-box-shadow: 0 5px 5px #d0cfd1;*/
    /*-moz-box-shadow: 0 5px 5px #d0cfd1;*/
    /*box-shadow: 0 5px 5px #d0cfd1;*/
  }
  #body {
    /*padding:10px;*/
    padding-bottom:80px;   /* Height of the footer */
  }
  #footer {
    position:absolute;
    bottom:0;
    width:100%;
    height:60px;   /* Height of the footer */
    background:#d0cfd1;
  }
  .pull-right{
    float: right;
  }
  .pull-left{
    float: left;
  }
  /*.nav-menu{*/
    /*background-color: transparent;*/
  /*}*/
  /*#container {*/
  /*height:100%;*/
  /*}*/
  a{
    text-decoration: none;
  }
  a:visited{
    color: inherit;
  }
  ul,ol{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .header{
    height:60px;
    line-height:60px;
  }
  .header>h1{
    float: left;
    margin: 0 0 0 20px;
    color: #fff;
  }
  .footer>h3{
    display: inline-block;
    margin-left:30px;
  }
  .logo{
    padding-left: 135px;
    background-position-y: 13px;
    display: inline-block;
  }
  .clearfix:before{
    display: table;
    content: " ";
  }
  .clearfix:after{
    display: table;
    content: " ";
    clear: both;
  }
  .container{
    width: 1200px;
    margin: 0 auto;
  }
  .right-panel{
    padding: 20px;
  }
  .container-panel .page-title{
    margin: 0;
  }
  .search-input{
    width: 350px;
  }

  .slide-fade-enter-active {
    transition: all .1s ease;
  }
  .slide-fade-leave-active {
    transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
  }
  .ql-container .ql-editor{
    min-height: 200px;
  }
  .ql-editor{
    padding: 0;
  }
</style>
