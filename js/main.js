require.config(
	{
			baseUrl:"./js",
			paths:{
				jquery:"lib/jquery-3.1.1.min",
				login:"login",
				ajax:"ajax",
				zc:"zc",
				sign:"sign",
			}
		}
)
require(["login","zc","sign"],function () {
	
})