<?php 

$con = mysqli_connect('localhost', 'root', '', 'love_food');

// Check connection
if (!$con) {
    die("Connection failed: " . mysqli_connect_error()); 
}

?>