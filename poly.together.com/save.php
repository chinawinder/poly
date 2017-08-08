<?php 
/* 
* To change this template, choose Tools | Templates 
* and open the template in the editor. 
*/ 
//echo $_POST["question"]; 
//echo $_POST["answer"]; 
$name =$_POST['name']; 
$phone = $_POST['phone']; 
//$q='qq'; 
//$a="a"; 
$con = mysql_connect("80h7u4ak.2222.dnstoo.com:5509","toger1_f","toge666"); 
if (!$con) 
{ 
//die('Could not connect: ' . mysql_error()); 
echo 'Could not connect: ' . mysql_error(); 
} 
mysql_select_db("toger1",$con); 
//INSERT INTO `toger1`.`message` (`id`, `name`, `phone`) VALUES (NULL, NULL, NULL);
mysql_query("INSERT INTO `toger1`.`message` (`name`, `phone`) VALUES ( '$name', '$phone')"); 
mysql_close($con); 
echo "输入成功"; 
?>