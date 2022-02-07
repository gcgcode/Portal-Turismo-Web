<?php
// Parametros de conexionado
$servername = "localhost";
$username = "root";
$password = "";
$bd = "baseprueba";

// Almacenamos en la variable $conn el conexionado
$conn = new mysqli($servername, $username, $password);

// Comprobamos la conexión
if ($conn->connect_error) {
    echo "Conexion no realizada: ", $conn->connect_error;
} else{
    echo "Conexion realizada";
}

/*--------------------------------------------------------------------
----------------------- ejecutar ordenes -----------------------------
--------------------------------------------------------------------*/

// Orden CREATE DATABASE
$orden = "CREATE DATABASE baseprueba";
if ($conn ->query($orden)) {
    echo "Se crear la base de datos";
} else{
    echo "Error en la creación de la base de datos";
}

// ----------------------------------------------------------------------

// Orden CREATE TABLE
$conn = new mysqli($servername, $username, $password, $bd);
$orden = "CREATE TABLE libro(
            id_libro VARCHAR(20),
            autor VARCHAR(20),
            titulo VARCHAR(20),
            PRIMARY KEY(id_libro));";

if ($conn->query($orden)) {
    echo "Tabla creada";
} else{
    echo "Tabla no creada";
}

// ----------------------------------------------------------------------

// Orden INSERT
$orden = "INSERT INTO libro VALUES('00001', 'ARTURO PEREZ REVERTE', 'APRENDE PHP');";

if ($conn->query($orden)) {
    echo "Datos insertados";
} else{
    echo "Datos no insertados";
}

// ----------------------------------------------------------------------

// Orden SELECT
$orden = "SELECT autor FROM libro ORDER BY autor desc;";
$resultado = $conn->query($orden);

while($columna=$resultado->fetch_assoc()){
echo " El autor es ", $columna["autor"];
}

// Cierra la conexión
$conn->close();
?>