<?php

 $dbhost = "b33e7d0dcf19eb";
 $dbuser = "root";
 $dbpass = "";
 $db = "baza";
 $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) ;
 
 if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
 
?>
