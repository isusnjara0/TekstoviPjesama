<?php

 $dbhost = "";
 $dbuser = "b33e7d0dcf19eb";
 $dbpass = "8c344f99";
 $db = "baza";
 $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) ;
 
 if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
 
?>
