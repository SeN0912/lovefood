<?php

include 'connect.php';

$query="SELECT * FROM `ingreadients`";

$rs=$con->query($query);

while($row=$rs->fetch_assoc()){
	$data[]=$row;
}

print json_encode($data);

?>
