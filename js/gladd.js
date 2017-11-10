define(["jquery"],function($){

	$("#add").click(function(){
		$("#add-ym").show();
	})

	$(".btn-1 div").click(function(){
		$(this).addClass("actives").siblings().removeClass("actives");
	})

	$(".btn-2 div").click(function(){
		$(this).addClass("actives").siblings().removeClass("actives");
	})
})