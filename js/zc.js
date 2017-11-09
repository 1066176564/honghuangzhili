define(['jquery','ajax'],function($,ajax){
	$(".zc").click(function () {
		$("#show").show()
	})
	$("#hide").click(function () {
		$("#show").hide()
	})
	$(".sub").click(function(){
					var obj = new Object();
					//获取数据
					obj.username = $("#username").val()
					obj.password = $("#password").val()
					obj.newpassword = $("#newpassword").val()
					obj.email = $("#email").val()
					obj.tel = $("#tel").val()
					obj.address = $("#address").val()
					obj.sex = $(".sex:checked").val()
					obj.sf = $("#sf").val()
					//判断合法性
					if(!obj.username || !obj.password || !obj.newpassword || !obj.email ){
						alert("数据不合法")
					}else{
						if(obj.password != obj.newpassword){
					  	alert("两次输入的密码不同")
						}else{
							var url="http://www.txl.com/api/zc.php";
							ajax.ajax(url,obj,function(data){
							if(data.st){
								alert("成功")
							}else{
								alert("失败")
							}
							})
						}
					}
					
					
					
})
})