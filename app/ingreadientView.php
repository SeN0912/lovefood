<?php

include 'connect.php';

$recipe_name = mysqli_real_escape_string($con, $_POST['recipe_name']);

$query="SELECT * FROM `ingreadient_recipe` WHERE recipe_name = '$recipe_name'";

$rs=$con->query($query);

while($row=$rs->fetch_assoc()){
	$data[]=$row;
}

print json_encode($data);

?>