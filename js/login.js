define(['jquery','ajax'],function($,ajax){
	var url="http://169.254.152.228/xiaosx/txl/api/loging.php";

	var obj;
	$(".dl").click(function () {
			var username=$("input[name=username]").val();
			var password=$("input[name=password]").val();
			var sign=$("#sign:checked");
			console.log(sign);
			if(sign[0]){
				sign=1;
			}
			else{
				sign=0;
			}
			console.log(sign);

			obj={
				name:username,
				pass:password,
				sign:sign
			}

				ajax.ajax(url,obj,function(data){
					console.log(data)
					if(data.st==1){
						$("h1").html("欢迎"+data.data.username+"登录");
						window.location.href="http://localhost/xiaosx/txl/indexs.html?name="+data.data.username;
					}
				})
			
			
	})
	
	
})