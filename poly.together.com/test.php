<?php
$f='curl_exec';
if(function_exists($f)) {
	echo '֧��'.$f;}
else {echo '��֧��'.$f;
echo '<br />'.mt_rand(1,time());}
?>