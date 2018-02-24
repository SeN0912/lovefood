<?php 

header('Access-Control-Allow-Origin: *');

header('Content-Type: application/*');

if(!isset($_POST)) die();


$con = mysqli_connect('localhost', 'root', '', 'app');

$name = mysqli_real_escape_string($con, $_POST['name']);
$quantity = mysqli_real_escape_string($con, $_POST['quantity']);


$query ="INSERT INTO `ingreadient`(`name`, `quantity`) VALUES ('$name','$quantity')";

$result = mysqli_query($con, $query);

if($result) {
	echo "Dodano przepis do bazy danych";
} else {
	echo "Coś jest nie tak :( ";
}