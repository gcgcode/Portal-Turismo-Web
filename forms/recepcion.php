<?php
    $servername="localhost";
    $username="root";
    $password="";
    $bd="";

    $conexion=new mysqli($servername, $username, $password,$bd);
    $passnueva=$_POST['pass'];
    
    $correo=$_POST['correo'];
    $orden="UPDATE usuario SET PASSWORD=$passnueva
            WHERE EMAIL=$correo";
     
    $conexion->query($orden);

?>