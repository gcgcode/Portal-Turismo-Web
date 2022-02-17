<?php
    $servername="localhost";
    $username="root";
    $password="";
    $bd="";

    $conexion=new mysqli($servername, $username, $password,$bd);
    
    $passHash=password_hash($_POST['pass'], PASSWORD_DEFAULT);
    echo($passHash);
    $correo=$_POST['correo'];

    $orden="UPDATE touristmap.usuario SET pass='$passHash' WHERE EMAIL='$correo'";
     
    $conexion->query($orden);

?>

