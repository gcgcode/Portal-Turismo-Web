<?php
$servername = "localhost";
$username = "root";
$password = "";
$bd = "prueba_api";

$conn = new mysqli($servername, $username, $password, $bd);

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
a
    if ($_GET['id_producto']) {
        header("HTTP/1.1 200 GET OK");

        $id_producto = $_GET['id_producto'];
        $q = "SELECT * FROM prueba_api.producto WHERE id_producto = '$id_producto';";
    
        $result = $conn->query($q);
        $result_string = $result->fetch_all();
        echo json_encode($result_string);
    } else{
        header("HTTP/1.1 200 GET OK");
        $q = "SELECT * FROM prueba_api.producto;";
    
        $result = $conn->query($q);
        $result_string = $result->fetch_all();
        echo json_encode($result_string);
    }
    
} elseif ($_SERVER['REQUEST_METHOD'] == 'POST') {
        header("HTTP/1.1 200 POST OK");
        $nombre=$_POST['nombre'];
        $precio=$_POST['precio'];
        $categoria=$_POST['categoria'];

        $query = "INSERT INTO prueba_api.producto (nombre,precio,categoria) VALUES ($nombre, $precio, $categoria);";
        $conn->query($q);
        echo json_encode($conn->lastInsertId());

    } elseif($_SERVER['REQUEST_METHOD'] == 'PUT'){
        header("HTTP/1.1 200 PUT OK");
        $nombre=$_GET['nombre'];
        $precio=$_GET['precio'];
        $categoria=$_GET['categoria'];
        $id_producto=$_GET['categoria'];
        $q = "UPDATE producto SET nombre = '$nombre', precio = '$precio', categoria = '$categoria' WHERE id_producto = '$id_producto';";
        $conn ->query($q);

        $q = "SELECT * FROM producto WHERE id_producto ='$id_producto';";
        $result = $conn->query($q);
        $result_string = $result->fetch_all();
        echo json_encode($result_string);
    }elseif($_SERVER['REQUEST_METHOD'] == 'DELETE'){
        header("HTTP/1.1 200 PUT OK");
       
        $id_producto=$_GET['categoria'];
        $q = "DELETE FROM producto WHERE id_producto = '$id_producto';";
        $conn ->query($q);

    }else {
    header("HTTP/1.1 400 ERROR");
}

?>