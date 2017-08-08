$.get('/wechat/shar',null,function (data) {
  wx.config(data);
});
var sharLink = window.location.origin+'/20170418baijiahao/';
$.get('/tongji1/pv/20170418baijiahao');
function initShar() {
  wx.onMenuShareTimeline({
    title: '你的颜值里 藏着你读过的书',
    link: sharLink,
    imgUrl: window.location.origin+'/20170418baijiahao/logo.jpg',
    success: shar
  });
  wx.onMenuShareAppMessage({
    title: '你的颜值里 藏着你读过的书',
    desc: '#樂读会#帮你精挑细选的书单，看看合不合你的口味',
    link: sharLink,
    imgUrl: window.location.origin+'/20170418baijiahao/logo.jpg',
    success: shar
  });
}
wx.ready(initShar);
var shar = function(){
  $.get('/tongji1/sv/20170418baijiahao');
  vm.sharEnd();
}
