<?php
 include('../php/database/db_conn.php');
    
    $conexion=dbConn();
    
    $passHash=password_hash($_POST['pass'], PASSWORD_DEFAULT);
    echo($passHash);
    $correo=$_POST['correo'];

    $orden="UPDATE touristmap.usuario SET PASSWORD='$passHash' WHERE EMAIL='$correo'";
     
    $conexion->query($orden);

?>

