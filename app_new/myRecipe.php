<?php

$conn = new mysqli("localhost", "root", "", "app");

$user = mysqli_real_escape_string($conn, $_POST['user']);

$query="SELECT * FROM `recepies` WHERE author = '$user'";

$rs=$conn->query($query);

while($row=$rs->fetch_assoc()){
	$data[]=$row;
}

print json_encode($data);

?>
