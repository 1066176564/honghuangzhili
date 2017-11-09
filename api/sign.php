<?php 
header("Access-Control-Allow-Origin:*");
	
	$ukey = isset($_COOKIE['ukey']);

function showMsg($st,$error="",$data=[]){
	$arr['st'] = $st;
	$arr['error'] = $error;
	$arr['data'] = $data;
echo json_encode($arr);
}
	if($ukey){
		showMsg(1,"",array($ukey));
	}else{
		showMsg(0,"",array($ukey));

	}
 ?>