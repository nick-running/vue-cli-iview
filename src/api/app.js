/**
 * Created by Administrator on 2017/11/30.
 */
window.app = {}
app.isRespOk = function(resp, callback, errCallback) {
  var errno = resp.data.errno
  if(errno==0) {
    callback()
  }else if(errno==401) {
    if(errCallback) {
      errCallback()
    }else{
      console.log('没有登录');
      // window.location.href = '/account/login.html?redirectUrl='+encodeURIComponent(window.location.href)+'&tips=请先登录'
    }
  }
};
app.transitionEffect = function(status) {
  var transformed = {}
  switch (status){
    case 0:
      transformed = {text: '查单中', class: '-primary'}
      break;
    case 1:
      transformed = {text: '已完成', class: '-success'}
      break;
    case 2:
      transformed = {text: '制作中', class: '-purple'}
      break;
    case 3:
      transformed = {text: '失败订单', class: ''}
      break;
  }
  return transformed
};
app.beautifyDate = function(date, type) {
  var dateStr = ''
  if(type=='simple') {
    dateStr = date.substr(11)
  }
  return dateStr
};
export default app;
