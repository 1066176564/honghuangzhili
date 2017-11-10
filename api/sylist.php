<?php  
header("Access-Control-Allow-Origin:*");
$db= mysqli_connect("localhost","root","root","loging");
mysqli_query($db,"set names utf8");
$page = isset($_GET['p'])?$_GET['p']:0;

$page = 0;

$limit = 14;
$sql="SELECT * FROM `sylist` limit ".$page.",".$limit;

$reasult = mysqli_query($db,$sql);
//var_dump($reasult);
$finalData = [];
while($row = mysqli_fetch_assoc($reasult)){
	$finalData[] = $row;
}
// echo "<pre>";
// print_r($finalData);
if($finalData){
	showMsg(1,'',$finalData);
}else{
	showMsg(0,'没有相关数据');
}

function showMsg($st,$error="",$data=[]){
	$arr['st'] = $st;
	$arr['error'] = $error;
	$arr['data'] = $data;
echo json_encode($arr);
}
?>