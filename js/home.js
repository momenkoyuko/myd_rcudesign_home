// JavaScript Document

/*-------------------------
トップページスライドショー
・一部CSSカスタマイズをしています。
（bxslider.min.css）
--------------------------*/

$(function(){
  $('.bxslider').bxSlider({
	  auto:true,
	  mode:'fade',
	  speed: 4000,
	  autoDelay: 1000
  });
	
});

/*-------------------------
スクロールして途中で固定
（トップページのみ）
(animationはCSSで定義してJSで発火)
--------------------------*/

$(window).on("load scroll",function(){
    let $main = $("#main"),
        $homeHeader = $(".home .header"),
        $distance = $main.offset().top,
        $scrollVal = $(window).scrollTop(),
        $navH = $(".header").outerHeight();
	
	console.log($distance);
	console.log($scrollVal);
	
    if($scrollVal>$distance){
        $homeHeader.addClass("fix");
        $main.css("margin-top",$navH);
    }else{
        $homeHeader.removeClass("fix");
        $main.css("margin-top",0); 
    }
}); 