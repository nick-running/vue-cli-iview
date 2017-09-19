/*lh  自定义滚动条*/
import $ from '@/api/jquery-vendor'
import '@/api/jquery.slimscroll.min'
$(function () {
  $('.three-menu').slimScroll({
    width: 'auto', // 可滚动区域宽度
    height: 'auto', // 可滚动区域高度
    size: '10px', // 组件宽度
    color: '#333', // 滚动条颜色*!/
    position: 'left', // 组件位置：left/right
    alwaysVisible: true, // 是否 始终显示组件
    touchScrollStep: 200, // 滚动量当用户使用手势
    start: 'top' // 默认滚动位置：top/bottom
  })
  $('.three-menu').css('height', 'auto')
  $('.three-menu').parent().css('height', 'auto')
  /* 主菜单控制wkd */
  $('.main-menu > li > .sub-menu > li > div.slimScrollDiv > div.slimScrollBar').bind('mousedown', function () {
    $(this).parent('div.slimScrollDiv').parent('li').addClass('sub-active')
    $(this).parent('div.slimScrollDiv').parent('li').parent('.sub-menu').parent('li').addClass('main-active')
  })
  $(document).on('mouseover', '.main-menu > li > a', function () {
    $(this).parent('li').siblings('li').removeClass('main-active')
  })
  $(document).on('mouseover', '.main-menu > li > .sub-menu > li > a', function () {
    $('.main-menu > li').siblings('li').removeClass('main-active')
    $(this).parent('li').siblings('li').removeClass('sub-active')
  })
  $(document).on('mouseup', '.main-menu > li > .sub-menu > li > a', function () {
    $('.main-menu > li').siblings('li').removeClass('main-active')
    $(this).parent('li').siblings('li').removeClass('sub-active')
  })
  /* 主菜单 解决mousedown 和click的冲突 wkd */
  var firstTime = 0
  $('body').mousedown(function () {
    firstTime = new Date().getTime()
  })
  $('body').click(function () {
    if (firstTime) {
      $('.main-menu > li').siblings('li').removeClass('main-active')
      $('.main-menu > li > .sub-menu > li').removeClass('sub-active')
      firstTime = 0
    }
  })
})
