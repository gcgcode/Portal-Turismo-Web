<?php
$servername = "localhost";
$username = "root";
$password = "";
$bd = "touristmap";

$conn = new mysqli($servername, $username, $password, $bd);

$categoria = 5;

$q = "SELECT latitud, longitud, titulo, descripcion FROM coordenada WHERE id_categoria = '$categoria'; ";

$result = mysqli_query($conn, $q);

$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}

$q = "SELECT icon FROM categoria WHERE id_categoria = '$categoria';";

$result = mysqli_query($conn, $q);
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}

echo json_encode($data);
     
?>