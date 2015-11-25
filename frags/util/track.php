<?php
	$file = fopen('../../track/visits.txt', 'a');
	$ip = $_SERVER['REMOTE_ADDR'];
	$date = date("m") . "/" . date("d") . "/" . date("y") . " a " . date("H") . "h" . date("i") . "min" . date("s") . "s";
	$msg = "\n" . $date . " - IP: " . $ip;
	fputs($file, $msg);
	fclose($file);
?>