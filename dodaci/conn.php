<?php

 $dbhost = "eu-cdbr-west-02.cleardb.net";
 $dbuser = "b33e7d0dcf19eb";
 $dbpass = "8c344f99";
 $db = "heroku_ee10db9e69e6457";
 $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) ;
 
 if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
 
?>
