<?php 

header('Access-Control-Allow-Origin: *');

header('Content-Type: application/*');

if(!isset($_POST)) die();


include 'connect.php';

$recipe_name = mysqli_real_escape_string($con, $_POST['recipe_name']);
$author = mysqli_real_escape_string($con, $_POST['author']);
$url = mysqli_real_escape_string($con, $_POST['url']);
$description = mysqli_real_escape_string($con, $_POST['description']);
$portion = mysqli_real_escape_string($con, $_POST['portion']);
$time = mysqli_real_escape_string($con, $_POST['time']);
$classname = mysqli_real_escape_string($con, $_POST['classname']);

$query ="INSERT INTO `recipes`( `recipe_name`, `url`, `user_name`, `description`, `portion`, `time`, `classname`) VALUES ('$recipe_name','$url','$author', '$description', '$portion','$time','$classname')";

$result = mysqli_query($con, $query);

if($result) {
	echo "Dodano przepis do bazy danych";
} else {
	echo "Coś jest nie tak :( ";
}