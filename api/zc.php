<?php 

$username = isset($_POST['username'])?$_POST['username']:"";
$password = isset($_POST['password'])?$_POST['password']:"";
$email = isset($_POST['email'])?$_POST['email']:"";
$tel=isset($_POST['tel'])?$_POST['tel']:"";
$address = isset($_POST['address'])?$_POST['address']:"";
$sex = isset($_POST['sex'])?$_POST['sex']:"";
$sf = isset($_POST['sf'])?$_POST['sf']:"";
$password = md5($password);
$link = mysqli_connect("localhost","root","root","loging");
mysqli_query($link,"set names utf8");//数据库的字符集设置成UTF8
$sql = "INSERT INTO `loging`(`username`, `password`,`email`, `tel`, `sex`, `address`,  `sf`) VALUES ('{$username}','{$password}','{$email}','{$tel}','{$sex}','{$address}','{$sf}')";

$rs = mysqli_query($link,$sql);
if(!$rs){
	showMsg(0,"记录失败");
	exit();
}
showMsg(1);
//组装数据格式 
function showMsg($st,$error="",$data=[]){
	$arr['st'] = $st;
	$arr['error'] = $error;
	$arr['data'] = $data;
	echo json_encode($arr);
}
 ?>