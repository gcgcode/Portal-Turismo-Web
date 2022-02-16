<?php

    include('../database/db_conn.php');

    $conn = dbConn();

    if ($conn->connect_error) {
        echo "Conexion no realizada: ", $conn->connect_error;
    } else{

        if (isset($_POST['user']) && isset($_POST['pass'])) {
            $user = filter_input(INPUT_POST,'user', FILTER_SANITIZE_SPECIAL_CHARS);
            $pass = filter_input(INPUT_POST,'pass', FILTER_SANITIZE_SPECIAL_CHARS);
            
            $orden = "SELECT password FROM touristmap.usuario WHERE username= '$user';";
            $resultado = $conn->query($orden);
            $columna = $resultado->fetch_assoc();
            if(isset($columna['password'])){
                $hash = $columna['password'];

            if (password_verify($pass, $hash)) {
                session_start();
                $_SESSION['user'] = $user;
                echo "LOGINOK";
            }else{
                echo "Usuario o contraseña incorrecta. Vuelve a comprobarlo.";
            }
            }
        }
 }
    
?>