<?php 
        include("database/db_conn.php"); // Incluimos la conexion con la bbdd

        $conn = dbConn();

// Comprobamos la conexión
if ($conn->connect_error) {
    echo "<p>Conexion no realizada: ", $conn->connect_error,"</p>";
} else{
    
    if (isset($_POST['register-submit'])) { // Comprueba que los campos(name, email, username, password) esten rellenos
        if (strlen($_POST['username']) >=1 && strlen($_POST['password']) >=1 && strlen($_POST['email']) >=1 && strlen($_POST['confirm-password']) >=1) { 
            $user = trim($_POST['username']);
            $pass = trim($_POST['password']);
            $email = trim($_POST['email']);
            $confirm_password = trim($_POST['confirm-password']);

            // Comprobar si el usuario existe
            $orden = "SELECT COUNT(*) AS contar FROM touristmap.usuario WHERE NOMBRE_USUARIO = '$user';";
            $resultado = $conn->query($orden);
            $columna = $resultado->fetch_assoc();
        
            // Si existe
            if ($columna['contar']>0) {
                echo "<p>Lo sentimos, el usuario ",$user, " ya existe</p>"; 
            } else{ // Si no existe, se inserta el nuevo usuario
                if ($pass == $confirm_password) {

                    $hash = password_hash($pass, PASSWORD_DEFAULT);
                    $orden = "INSERT INTO touristmap.usuario (NOMBRE_USUARIO, PASS_USUARIO, EMAIL) VALUES ('$user', '$pass', '$email');";
            
                    if ($conn->query($orden)) {
                    echo "<p>¡ENHORABUENA! Se ha completado el registro</p>";
                    } else{
                        echo "<p>LO SENTIMOS, no se ha completado el registro</p>";
                    } 

                }   
            }
             
        } else{
            echo "<p>Rellena los campos para poder completar el registro</p>";
        }
    }
}
?>