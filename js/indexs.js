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
			smoothscroll();
			$("#div1").fadeIn(200).siblings().hide()
		})

		$("li:eq(1)").click(function(){
			smoothscroll();
			$("#div2").fadeIn(200).siblings().hide()
		})

		$("li:eq(2)").click(function(){
			smoothscroll();

			$("#div3").fadeIn(200).siblings().hide()
		})

		$("li:eq(3)").click(function(){
			smoothscroll();
			$("#div4").fadeIn(200).siblings().hide()
		})

		function smoothscroll(){
	    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
	    if (currentScroll > 0) {
	         window.requestAnimationFrame(smoothscroll);
	         window.scrollTo (0,currentScroll - (currentScroll));
	   	 }
		}
	
})