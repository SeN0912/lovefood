<?php

include 'connect.php';

$user = mysqli_real_escape_string($con, $_POST['user']);

$query="SELECT * FROM `recipes` WHERE user_name = '$user'";

$rs=$con->query($query);

while($row=$rs->fetch_assoc()){
	$data[]=$row;
}

print json_encode($data);

?>
