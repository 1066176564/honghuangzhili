define(["ajax"],function(ajax){
	var url="http://169.254.152.228/xiaosx/txl/api/sign.php";
	var obj={

	}
	ajax.ajax(url,obj,function(data){
		console.log(data.st)
		if(data.st==1){
			window.location.href="http://localhost/xiaosx/txl/indexs.html";
		}
	})
})