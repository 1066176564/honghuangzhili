define(["jquery"],function($){
	// 点击增加联系人按钮触发的时间
	$("#add").click(function(){
		$("#div3").children().hide();
		$("#add-ym").show();
	})

	// 弹出框--返回按钮 返回上一级
	$("#add-ym-back").click(function(){
		$("#div3").children().show();
		$("#add-ym").hide();
	})

	// 管理页面--弹出框 中的第一块按钮组，点击事件
	$(".btn-1 div").click(function(){
		$(this).addClass("actives").siblings().removeClass("actives");
	})
	// 管理页面--弹出框 中的第二块按钮组，点击事件
	$(".btn-2 div").click(function(){
		$(this).addClass("actives").siblings().removeClass("actives");
	})
})