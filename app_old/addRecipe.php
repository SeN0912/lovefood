<?php 

header('Access-Control-Allow-Origin: *');

header('Content-Type: application/*');

if(!isset($_POST)) die();


$con = mysqli_connect('localhost', 'root', '', 'app');

$recipeName = mysqli_real_escape_string($con, $_POST['recipeName']);
$author = mysqli_real_escape_string($con, $_POST['author']);
$url = mysqli_real_escape_string($con, $_POST['url']);
$directions = mysqli_real_escape_string($con, $_POST['directions']);
$time = mysqli_real_escape_string($con, $_POST['time']);


$query ="INSERT INTO `recepies`( `recipename`, `author`, `url`, `directions`, `time`) VALUES ('$recipeName','$author','$url', '$directions', '$time')";

$result = mysqli_query($con, $query);

if($result) {
	echo "Dodano przepis do bazy danych";
} else {
	echo "Coś jest nie tak :( ";
}