define(['jquery'],function($){
function postAjax(url,obj,callback) {
		$.ajax({
			url:url,
			type:"post",
			dataType:"json",
			data:obj
		}).then(callback)
	}
function getAjax(url,obj,callback) {
		$.ajax({
			url:url,
			type:"get",
			dataType:"json",
			data:obj
		}).then(callback)
}
	return {
		ajax:postAjax,
		get:getAjax
	}
})