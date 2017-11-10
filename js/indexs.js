define(['jquery'],function($){
	// var name=decodeURI(window.location.href.split("?")[1].split("=")[1]);
	$("header h1").html("主页");
	$("li:eq(0)").addClass("active").siblings().removeClass("active");


	$("li").click(function(){
		$("header h1").html($(this).children("p").html());
		$(this).addClass("active").siblings().removeClass("active");
	})


		$("#div1").fadeIn(200).siblings().hide()
		
		$("li:eq(0)").click(function(){
			$("#div1").fadeIn(200).siblings().hide()
		})

		$("li:eq(1)").click(function(){
			$("#div2").fadeIn(200).siblings().hide()
		})

		$("li:eq(2)").click(function(){
			$("#div3").fadeIn(200).siblings().hide()
		})

		$("li:eq(3)").click(function(){
			$("#div4").fadeIn(200).siblings().hide()
		})
	
})