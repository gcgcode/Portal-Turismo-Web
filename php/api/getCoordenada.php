<?php
include('../database/db_conn.php');

$conn = dbConn();

if (isset($_GET['id_coordenada'])) {
    $id_coordenada = $_GET['id_coordenada'];

$q = "SELECT latitud, longitud, titulo FROM touristmap.coordenada WHERE id_coordenada = '$id_coordenada'; ";

$data = array();

$result = mysqli_query($conn, $q);
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}

echo json_encode($data);
}

     
?>