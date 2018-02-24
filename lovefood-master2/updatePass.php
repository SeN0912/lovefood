<?php 

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/*');

if(!isset($_POST) || !isset($_POST['id'])) die();

session_start();

$response=[];

$con = mysqli_connect('localhost', 'root', '', 'app');

$newPass = mysqli_real_escape_string($con, $_POST['newPass']);
$user = mysqli_real_escape_string($con, $_POST['username']);

$query = "UPDATE `users` SET `password` = '$newPass' WHERE `username` = '$user'";

$result = mysqli_query($con, $query);

if($result) {
	$response['status'] = 'done';
} else {
	$response['status'] = 'error';
}	

echo json_encode($response);