<?php 

header('Access-Control-Allow-Origin: *');

header('Content-Type: application/*');

if(!isset($_POST)) die();

$response=[];

include 'connect.php';

$username = mysqli_real_escape_string($con, $_POST['username']);
$password = mysqli_real_escape_string($con, $_POST['password']);
$hash = hash('sha512', $password);


$query ="INSERT INTO `users` (`ID`, `user_name`, `password`) VALUES (NULL, '$username', '$hash')";

$result = mysqli_query($con, $query);

$response['status'] = 'register';

echo json_encode($response);