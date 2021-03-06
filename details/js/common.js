/**设置页面基本单位*/
font_size();
window.onresize = function () {
    font_size();
};
function font_size() {
    var deviceWidth = document.documentElement.clientWidth;
    if (deviceWidth > 500) deviceWidth = 500;//640为设计稿宽度三处需要修改
    document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
}
/**文档加载*/
$(function(){
    /**创建消息提示框*/
    $("body").append("<div class='msg_show'></div><div class='mask'></div><div class='mask2'></div><img src='images/loading.gif' class='loading_pic'>");
    /**处理input*/
    $("input").focus(function(){
        $(this).blur(function(){
            if($(this).val().trim()==""){
                $(this).val("");
            }
        });
    });
});
/**消息提示*/
function msg_show(msg,tm){
    $(".msg_show,.mask").show();
    $(".msg_show").append("<p>"+msg+"</p>");
    setTimeout(function () {
        $(".msg_show,.mask").hide();
        $(".msg_show p").remove();
    }, tm);
}
/**解析url*/
(function ($) {
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    };
})(jQuery);
/**去除字符串空格*/
String.prototype.NoSpace = function(){
    return this.replace(/\s+/g, "");
};
/***/
function orient() {
    if (window.orientation == 90 || window.orientation == -90) {
//ipad、iphone、Andriod横屏
    font_size();
    }
    else if (window.orientation == 0 || window.orientation == 180) {
//ipad、iphone、Andriod竖屏
        font_size();
    }
}
//页面加载时调用
$(function(){
    orient();
});
//用户变化屏幕方向时调用
$(window).bind( 'orientationchange', function(e){
    orient();
});