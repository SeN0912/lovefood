<?php 
include 'connect.php';
$recipe_name = mysqli_real_escape_string($con, $_POST['recipe_name']);
$query = "DELETE FROM `recipes` WHERE recipe_name = '$recipe_name'";
if(mysqli_query($con, $query)){
echo "Usunięto przepis";
} else {
echo "Coś poszło nie tak...";
}
