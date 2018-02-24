<?php  
include 'connect.php';
      if (empty($_FILES)){
      	$path = 'upload/default/default.jpg';
      	 
	  }else{
	  	  $path = 'upload/'.$_FILES['file']['name']; 
	  	  move_uploaded_file($_FILES['file']['tmp_name'], $path); 
	      
	       }
echo $path;