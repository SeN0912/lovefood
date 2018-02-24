<?php

include 'connect.php';

$id = mysqli_real_escape_string($con, $_POST['id']);

$query="SELECT * FROM `recipes` WHERE `id` = '$id'";

$rs=$con->query($query);

while($row=$rs->fetch_assoc()){
	$data[]=$row;
}

print json_encode($data);

?>