<?php 

header('Access-Control-Allow-Origin: *');

header('Content-Type: application/*');

if(!isset($_POST)) die();

$response=[];

$con = mysqli_connect('localhost', 'root', '', 'app');

$username = mysqli_real_escape_string($con, $_POST['username']);
$password = mysqli_real_escape_string($con, $_POST['password']);


$query ="INSERT INTO `users` (`ID`, `username`, `password`) VALUES (NULL, '$username', '$password')";

$result = mysqli_query($con, $query);

$response['status'] = 'register';

echo json_encode($response);