<?php  
 $con = mysqli_connect('localhost', 'root', '', 'app'); 
      $path = 'upload/'. $_FILES['file']['name'];  
      if(move_uploaded_file($_FILES['file']['tmp_name'], $path))  
      { 
                echo $path; 
           
      }  
    
 ?> 