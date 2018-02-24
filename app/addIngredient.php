<?php 

header('Access-Control-Allow-Origin: *');

header('Content-Type: application/*');

if(!isset($_POST)) die();


include 'connect.php';

$recipe_name = mysqli_real_escape_string($con, $_POST['recipe_name']);
$ingredient_name = mysqli_real_escape_string($con, $_POST['ingredient_name']);
$unit_name = mysqli_real_escape_string($con, $_POST['unit_name']);
$quantity = mysqli_real_escape_string($con, $_POST['quantity']);



$query ="INSERT INTO `ingreadient_recipe`( `recipe_name`, `unit_name`, `ingredient_name`, `quantity`) VALUES ('$recipe_name','$unit_name','$ingredient_name','$quantity')";

$result = mysqli_query($con, $query);

if($result) {
	echo "Dodano przepis do bazy danych";
} else {
	echo "Coś jest nie tak :( ";
}