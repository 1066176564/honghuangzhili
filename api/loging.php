<?php 
header("Access-Control-Allow-Origin:*");

$db= mysqli_connect("localhost","root","root","loging");
mysqli_query($db,"set names utf8");
$name = isset($_POST['name'])?$_POST['name']:"";
$passwd= isset($_POST['pass'])?$_POST['pass']:"";
$sign= isset($_POST['sign'])?$_POST['sign']:"";
if(!$name || !$passwd){
	showMsg(0,"用户名和密码不能为空");
	exit(); 
}

$passwd= md5($passwd);

$sql="select * from loging where username='$name' and password='$passwd'";

$res=mysqli_query($db,$sql);
$res=mysqli_fetch_array($res);
if(!$res){
	showMsg(0,"用户名或密码错误");
	exit(); 
}
if($sign){
	setcookie("ukey","1",time()+600);
}
showMsg(1,"",$res);
function showMsg($st,$error="",$data=[]){
	$arr['st'] = $st;
	$arr['error'] = $error;
	$arr['data'] = $data;
echo json_encode($arr);
}
 ?>