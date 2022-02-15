
<?php 
        include("../database/db_conn.php"); // Incluimos la conexion con la bbdd

        $conn = dbConn();

// Comprobamos la conexión
if ($conn->connect_error) {
    echo "<p>Conexion no realizada: ", $conn->connect_error,"</p>";
} else{
    
    // Comprueba que los campos(name, email, username, password) esten rellenos
        if (isset($_POST['user']) && isset($_POST['pass']) && isset($_POST['name']) && isset($_POST['email']) && isset($_POST['id_localidad'])) { 
            $user = trim($_POST['user']);
            $pass = trim($_POST['pass']);
            $email = trim($_POST['email']);
            $name = trim($_POST['name']);
			$id_localidad = $_POST['id_localidad'];

            // Comprobar si el usuario existe
            $orden = "SELECT COUNT(*) AS contar FROM touristmap.usuario WHERE username = '$user';";
            $resultado = $conn->query($orden);
            $columna = $resultado->fetch_assoc();
        
            // Si existe
            if ($columna['contar']>0) {
                echo "<p>Lo sentimos, el usuario ",$user, " ya existe</p>"; 
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
