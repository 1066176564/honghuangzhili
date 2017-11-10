define(["jquery","ajax"],function($,ajax){
	// 点击第一个按钮  弹出框事件
	$("#div1 .sy .div1").click(function(){
		$("#div1").children().hide();
		$("#sy-add").show();
	})

	// 弹出框--返回按钮 返回上一级
	$("#sy-add-back").click(function(){
		$("#div1").children().show();
		$("#sy-add").hide();
	})

	// ajax加载

	var obj = new Object();
	obj.p=0;
	var url="http://169.254.152.228/xiaosx/txl/api/sylist.php";

		// 下拉刷新
		$(window).scroll(function(){
		    //滚动条所在位置的高度
		    totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());
		    //当前文档高度   小于或等于   滚动条所在位置高度  则是页面底部
		    if(($(document).height()) <= totalheight) {
					obj.p+=7;
					ajax.get(url,obj,callBack)
		    }
		});

	ajax.get(url,obj,callBack);

	function callBack(listObject){
			var html="";
			if(listObject.st){
				for (var i = 0; i < listObject.data.length; i++) {
					item = listObject.data[i];
					var name=item.name.split("")[0]
					html+=`
							<div id="sylist">
								<div>${name}</div>

								<div>
									<p>${item.name}</p>
									<p>${item.type}</p>
								</div>

								<div>
									<p>${item.tel}</p>
									<p>${item.email}</p>
								</div>
							</div>
					`
				}
			}else{
				// html = "<h2>未找到</h2>";
			}
			$(".sylist-main").append(html);
			

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