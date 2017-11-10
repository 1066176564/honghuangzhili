require.config(
	{
			baseUrl:"./js",
			paths:{
				jquery:"lib/jquery-3.1.1.min",
				ajax:"ajax",
				indexs:"indexs",
				list:"list",
				gladd:"gladd",
				syadd:"syadd"
			}
		}
)
require(["indexs","list","gladd","syadd"],function () {
	
})