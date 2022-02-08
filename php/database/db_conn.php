<?php

function dbConn(){
    
    $servername = "localhost";
    $username = "root";
    $password = "";
    $bd = "touristmap";
     
    $conn = new mysqli($servername, $username, $password, $bd);
  
    if ($conn->connect_error) {
      echo "Conexion no realizada: ", $conn->connect_error;
    } else{
      return $conn;
    }
    
  
  }
?>