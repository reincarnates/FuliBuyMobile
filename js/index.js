$(function () {

  //评价选项卡
  $(".fuili-menu .fuili-menu-item").click(function() {
    $(".fuili-menu .fuili-menu-item").eq($(this).index()).addClass("cur2").siblings().removeClass('cur2');
    $(".ob2").eq($(".fuili-menu .fuili-menu-item").index(this)).addClass("on2").siblings().removeClass('on2'); 
  });

});
