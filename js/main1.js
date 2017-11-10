require.config(
	{
			baseUrl:"./js",
			paths:{
				jquery:"lib/jquery-3.1.1.min",
				ajax:"ajax",
				indexs:"indexs",
				list:"list",
				gladd:"gladd"
			}
		}
)
require(["indexs","list","gladd"],function () {
	
})