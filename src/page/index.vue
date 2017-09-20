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

            <!--<li>-->
              <!--<a class="nav-item " href="javascript:;"-->
                 <!--style="background-image: url(/cu/cuicons/loadImage?iconNo=M3704019492602618); background-size:25px;">后台管理-->
              <!--</a>-->
              <!--<ul class="sub-menu">-->
                <!--<li class="nav-item">-->
                  <!--<a href="http://172.16.0.99:32804/qdwww/index.html#/" class="nav-link">-->
                    <!--<span class="title">标准化知识管理</span>-->

                  <!--</a>-->
                  <!--<ul class="" dir="rtl">-->
                  <!--</ul>-->
                <!--</li>-->
              <!--</ul>-->
            <!--</li>-->

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
                  <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: auto;">
                    <ul class=" sub-menu  three-menu" dir="rtl" style="overflow: hidden; width: auto; height: auto;">
                      <li class="nav-item">
                        <a href="http://172.16.0.99:32804/qz/dictionarycategory/index.html" class="nav-link">
                          <span class="title">字典管理</span>

                        </a>
                      </li>
                    </ul>
                    <div class="slimScrollBar"
                         style="background: rgb(51, 51, 51); width: 10px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; left: 1px;"></div>
                    <div class="slimScrollRail"
                         style="width: 10px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; left: 1px;"></div>
                  </div>
                </li>

                <!--<li class="nav-item">-->
                  <!--<a href="javascript:;" class="nav-link nav-toggle">-->
                    <!--<span class="title">组织机构</span>-->
                    <!--<img :src="arrowLeft">-->
                  <!--</a>-->
                  <!--<div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: auto;">-->
                    <!--<ul class=" sub-menu  three-menu" dir="rtl" style="overflow: hidden; width: auto; height: auto;">-->
                      <!--<li class="nav-item">-->
                        <!--<a href="http://172.16.0.99:32804/cu/organization-management/organization-management-list.html"-->
                           <!--class="nav-link">-->
                          <!--<span class="title">机构管理</span>-->

                        <!--</a>-->
                      <!--</li>-->
                      <!--<li class="nav-item">-->
                        <!--<a href="http://172.16.0.99:32804/cu/role-management/role-management-list.html"-->
                           <!--class="nav-link">-->
                          <!--<span class="title">角色管理</span>-->

                        <!--</a>-->
                      <!--</li>-->
                      <!--<li class="nav-item">-->
                        <!--<a href="http://172.16.0.99:32804/cu/post-management/post-management-list.html"-->
                           <!--class="nav-link">-->
                          <!--<span class="title">岗位管理</span>-->

                        <!--</a>-->
                      <!--</li>-->
                      <!--<li class="nav-item">-->
                        <!--<a href="http://172.16.0.99:32804/cu/user-management/user-management-list.html"-->
                           <!--class="nav-link">-->
                          <!--<span class="title">用户管理</span>-->

                        <!--</a>-->
                      <!--</li>-->
                    <!--</ul>-->
                    <!--<div class="slimScrollBar"-->
                         <!--style="background: rgb(51, 51, 51); width: 10px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; left: 1px;"></div>-->
                    <!--<div class="slimScrollRail"-->
                         <!--style="width: 10px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; left: 1px;"></div>-->
                  <!--</div>-->
                <!--</li>-->
                <!--<li class="nav-item">-->
                  <!--<a href="javascript:;" class="nav-link nav-toggle">-->
                    <!--<span class="title">菜单管理</span>-->
                    <!--<img :src="arrowLeft">-->
                  <!--</a>-->
                  <!--<div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: auto;">-->
                    <!--<ul class=" sub-menu  three-menu" dir="rtl" style="overflow: hidden; width: auto; height: auto;">-->
                      <!--<li class="nav-item">-->
                        <!--<a href="http://172.16.0.99:32804/cu/menu-picture/menu-picture-list.html" class="nav-link">-->
                          <!--<span class="title">菜单图标管理</span>-->

                        <!--</a>-->
                      <!--</li>-->
                      <!--<li class="nav-item">-->
                        <!--<a href="http://172.16.0.99:32804/cu/auth-management/auth-management2.html" class="nav-link">-->
                          <!--<span class="title">权限管理</span>-->

                        <!--</a>-->
                      <!--</li>-->
                      <!--<li class="nav-item">-->
                        <!--<a href="http://172.16.0.99:32804/cu/menu-management/menu-management.html" class="nav-link">-->
                          <!--<span class="title">菜单配置</span>-->
                        <!--</a>-->
                      <!--</li>-->
                    <!--</ul>-->
                    <!--<div class="slimScrollBar"-->
                         <!--style="background: rgb(51, 51, 51); width: 10px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; left: 1px;"></div>-->
                    <!--<div class="slimScrollRail"-->
                         <!--style="width: 10px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; left: 1px;"></div>-->
                  <!--</div>-->
                <!--</li>-->
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
