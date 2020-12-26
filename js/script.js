// JavaScript Document

/*モバイル時ボタン*/
$(".btn-trigger").on("touchstart",function(){
	$(this).toggleClass("active");
	$(".navigation").fadeToggle(500);
});



/*ページトップボタン*/


$(".btn-pageTop").on("click",function(){
	$("html,body").animate({scrollTop:0},1000)
});