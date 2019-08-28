<?php
require_once "inc.config.php";

$products = [
	["id" => "1", "name" => "Downloader", "link" => "1.php",],
	["id" => "2", "name" => "Uploader", "link" => "2.php",],
	["id" => "3", "name" => "Gallery", "link" => "3.php",],
	["id" => "4", "name" => "Camera", "link" => "4.php",],
];

header("Content-Type: application/json; charset=utf-8");
echo json_encode($products);