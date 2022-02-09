<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" type="text/css" href="css/form.css">
</head>
<body>
   
    <form class ="form" method="POST" >
        <h1>Accede a tu cuenta</h1>
    	<input type="text" name="user" placeholder="username">
    	<input type="password" name="pass" placeholder="password">
    	<input type="submit" name="register">
    </form>

    <p>¿Aún no tienes cuenta? <a href="register.php">Regístrate</a></p>
    
    <?php

    include('db_conn.php');

    if (isset($_POST['register'])) {
        if (strlen($_POST['user']) >= 1 && strlen($_POST['pass']) >= 1) {
            $user = $_POST['user'];
            $pass = $_POST['pass'];
            
            $conn = dbConn();

            $orden = "SELECT password FROM touristmap.usuario WHERE username= '$user';";
            $resultado = $conn->query($orden);
            $columna = $resultado->fetch_assoc();
                      
            $hash = $columna['password'];
            
            if (password_verify($pass, $hash)) {
                session_start();
                $_SESSION['user'] = $user; // Alamacenamos usuario en una sesion para usarlo a home.php
                
                header('location: index.php');
            } else{
                echo "<p>Usuario o contraseña incorrecta. Vuelve a comprobarlo.</p>";
            }
        }
}
    
    ?>
</body>
</html>