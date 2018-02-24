<?php

$conn = new mysqli("localhost", "root", "", "app");

$query="SELECT * FROM `recepies`";

$rs=$conn->query($query);

while($row=$rs->fetch_assoc()){
	$data[]=$row;
}

print json_encode($data);

?>
