<?php
$f='curl_exec';
if(function_exists($f)) {
	echo '支持'.$f;}
else {echo '不支持'.$f;
echo '<br />'.mt_rand(1,time());}
?>