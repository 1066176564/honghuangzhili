define(["ajax"],function(ajax){
	var obj = new Object();
	obj.p=0;
	var url="http://169.254.152.228/xiaosx/txl/api/list.php";
	$(window).scroll(function(){
    //滚动条所在位置的高度
    totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());
    //当前文档高度   小于或等于   滚动条所在位置高度  则是页面底部
    if(($(document).height()) <= totalheight) {
        obj.c=$(".myInput input").val();
			obj.p+=7;
			ajax.get(url,obj,callBack)
    }
});
	//延迟执行函数
	function throttling(fn, t) {
    var tid;
    
	    return function() {
	        var that = this,
	            args = arguments;
	           
	        clearTimeout(tid);
	        tid = setTimeout(function() {
	            fn.apply(that, args);
	        }, t);
	    }
	}

	var aaa=function(){
		$(".list").html("");
		obj.c=$(this).val();
		obj.p=0;
		ajax.get(url,obj,callBack)
		console.log($(this).val())
	}

	$(".myInput input").on('input',throttling(aaa,1000))

	ajax.get(url,obj,callBack);

	function callBack(listObject){
			var html="";
			if(listObject.st){
				for (var i = 0; i < listObject.data.length; i++) {
					item = listObject.data[i];
					var name=item.name.split("")[0]
					html+="<div class='list-item'><div id='h'>"+name+"</div><div><p>"+item.text+"</p><span>"+item.time+"</span></div><div class='name'>"+item.name+"</div></div>";
				}
			}else{
				html = "<h2>未找到</h2>";
			}
			$(".list").append(html);
			$(".list-item").click(function(){
					$("#div2").children().hide();
					$(".xq").show().html("<h1>详细信息</h1><div id='back'><img src='img/3.png'/></div>").append($(this).html());
					$(".xq #h").html("").height("60");
					$("#back").click(function(){
					$("#div2").children().show();
	       			$(".img").hide();
					$(".xq").hide();

					})
			})

		}
  	//回到顶部图标显示
  	window.onscroll = function () {
	    if (document.documentElement.scrollTop + document.body.scrollTop > 300) {
	      $(".img").show();
	    }
	    else {
	       $(".img").hide();
	    }
  	}
  //回到顶部
	$(".img").click(smoothscroll);
		function smoothscroll(){
	    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
	    if (currentScroll > 0) {
	         window.requestAnimationFrame(smoothscroll);
	         window.scrollTo (0,currentScroll - (currentScroll/5));
	    }
	}
	
})