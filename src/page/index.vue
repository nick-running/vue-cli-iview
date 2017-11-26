<template>
  <div id="container" class="page-header-fixed">
    <div class="page-header navbar navbar-fixed-top ">
      <div class="page-header-inner clearfix">
        <div class="page-logo">
          <a href="/index.html">
            <img :src="logoBig" width="116">
            <!--<h1 class="logo-text">柏诚消费金融情报系统</h1>-->
          </a>
        </div>
        <div class="pull-right">

          <ul class="main-menu nav navbar-nav pull-right">
            <template v-for="(item, index) in menus">

            <li>
              <template v-if="item.children.length">
                <a class="nav-item" href="javascript:;" >{{item.text}}></a>
              </template>
              <template v-else>
                <a class="nav-item"
                   :href="item.url"
                   :style="{backgroundImage: 'url(/cu/cuicons/loadImage?iconNo='+item.styleObject.iconClassName+')'}">{{item.text}}</a>
              </template>

              <ul class="sub-menu">
                <template v-for="subItem in item.children">
                  <li class="nav-item">
                    <template v-if="subItem.children.length">
                      <a href="javascript:;">
                      <span class="title">{{subItem.text}}</span>
                      </a>
                      <template v-if="subItem.children.length">
                        <ul class="sub-menu" dir="rtl">
                          <template v-for="ggChildren in subItem.children">
                          <li class="nav-item">
                            <a :href="ggChildren.url" class="nav-link">
                              <span class="title">{{ggChildren.text}}</span>
                              <template v-if="subItem.children.length">
                              <img :src="arrowLeft"/>
                              </template>
                            </a>
                          </li>
                          </template>
                        </ul>
                      </template>

                    </template>
                    <template v-else>
                      <a class="nav-link nav-toggle" :href="subItem.url">
                        <span class="title">{{subItem.text}}</span>
                      </a>
                    </template>

                  </li>
                </template>
              </ul>

            </li>
            </template>


            <li>
              <a class="nav-item " href="javascript:;"
                 style="background-image: url(/cu/cuicons/loadImage?iconNo=M3780662241135984); background-size:25px;">系统配置
              </a>
              <ul class="sub-menu">

                <li class="nav-item">
                  <a href="javascript:;" class="nav-link nav-toggle">
                    <span class="title">通用参数</span>
                    <img :src="arrowLeft">
                  </a>
                </li>

              </ul>
            </li>

          </ul>


        </div>
      </div>
    </div>

    <div class="page-container content-box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  let logoBig = require('@pubImg/logo-big-auto.png')
  let arrowLeft = require('@pubImg/nav/daohangjiantou.png')
  export default {
    name: 'index',
    data() {
      return {
        logoBig: logoBig,
        arrowLeft: arrowLeft,
        menus: []
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
