
<?php 
        include("../database/db_conn.php"); // Incluimos la conexion con la bbdd

        $conn = dbConn();

// Comprobamos la conexión
if ($conn->connect_error) {
    echo "Conexion no realizada: ", $conn->connect_error;
} else{
    
    // Comprueba que los campos(name, email, username, password) esten rellenos
        if (isset($_POST['user']) && isset($_POST['pass']) && isset($_POST['name']) && isset($_POST['email']) && isset($_POST['id_localidad'])) { 
            
            $user = trim($_POST['user']);
            $nuevoUser=filter_var($user, FILTER_SANITIZE_ENCODED);
            $pass = trim($_POST['pass']);
            $nuevoPass=filter_var($pass, FILTER_SANITIZE_ENCODED);
            $email = $_POST['email'];
            $nuevoEmail=filter_var($email, FILTER_SANITIZE_EMAIL);
            $boolEmail=filter_var($nuevoEmail, FILTER_VALIDATE_EMAIL);
            if($boolEmail){ $emailFV=$boolEmail; }
            $name = trim($_POST['name']);
            $nuevoName=filter_var($name, FILTER_SANITIZE_ENCODED);
            if($_POST['id_localidad']>=1 || $_POST['id_localidad']<=105){
			$id_localidad = $_POST['id_localidad'];
            }
            

            // Comprobar si el usuario existe
            $orden = "SELECT COUNT(*) AS contar FROM touristmap.usuario WHERE username = '$user';";
            $resultado = $conn->query($orden);
            $columna = $resultado->fetch_assoc();
        
            // Si existe
            if ($columna['contar']>0) {
                echo "Lo sentimos, el usuario ",$user, " ya existe"; 
            } else{ // Si no existe, se inserta el nuevo usuario
                $hash = password_hash($pass, PASSWORD_DEFAULT);
                $orden = "INSERT INTO touristmap.usuario (username, password, email, nombre_apellidos, id_localidad) VALUES ('$user', '$hash', '$email', '$name', '$id_localidad');";
            
                if ($conn->query($orden)) {
                echo "REGOK";
                } else{
                    echo "REGKO";
                }
            }
             
        } else{
            echo "<p>Rellena los campos para poder completar el registro</p>";
        }   
    
}
?>
