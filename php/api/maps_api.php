<?php
include("../database/db_conn.php");

$conexion= dbConn();

// GET
if($_SERVER['REQUEST_METHOD']=='GET'){

    if(isset($_GET['id_coordenada'])){ // SELECT COORDENADA FILTER BY ID_COORDENADA
        header("HTTP/1.1 200 GET OK");
        $id_coordenada=$_GET['id_coordenada'];
        $orden="SELECT * FROM touristmap.coordenada WHERE ID_COORDENADA='$id_coordenada';";

        $result = mysqli_query($conexion, $orden);

        $data = array();
        while ($row = mysqli_fetch_object($result))
        {
            array_push($data, $row);
        }
        echo json_encode($data);

         
    }elseif(isset($_GET['id_categoria'])){ // SELECT COORDENADA FILTER BY CATEGORIA
        header("HTTP/1.1 200 GET OK");

        $categoria=$_GET['id_categoria'];
    
        $orden="SELECT * FROM touristmap.coordenada WHERE ID_CATEGORIA='$categoria';";
        $result = mysqli_query($conexion, $orden);

        $data = array();
        while ($row = mysqli_fetch_object($result))
        {
            array_push($data, $row);
        }
        echo json_encode($data);

    }elseif(isset($_GET['titulo'])){ // SELECT COORDENADA FILTER BY TITULO
        header("HTTP/1.1 200 GET OK");

        $titulo=$_GET['titulo'];
    
        $orden="SELECT * FROM touristmap.coordenada WHERE titulo='$titulo';";
        $result = mysqli_query($conexion, $orden);

        $data = array();
        while ($row = mysqli_fetch_object($result))
        {
            array_push($data, $row);
        }
        echo json_encode($data);

    }elseif(isset($_GET['username'])){ // SELECT USER-DATA FILTER BY USERNAME
        header("HTTP/1.1 200 GET OK");

        $username=$_GET['username'];
    
        $orden="SELECT touristmap.usuario.email, touristmap.usuario.nombre_apellidos, touristmap.usuario.username, (SELECT touristmap.localidad.nombre FROM touristmap.localidad WHERE ID_LOCALIDAD = (SELECT ID_LOCALIDAD from touristmap.usuario where touristmap.usuario.username = '$username' LIMIT 1)) AS localidad FROM touristmap.usuario WHERE username = '$username' ;";
        $result = mysqli_query($conexion, $orden);

        $data = array();
        while ($row = mysqli_fetch_object($result))
        {
            array_push($data, $row);
        }
        echo json_encode($data);

    }else{
        // DEFAULT
        header("HTTP/1.1 200 quepasa");
        $orden="SELECT * FROM touristmap.coordenada;";
        $result = mysqli_query($conexion, $orden);

        $data = array();
        while ($row = mysqli_fetch_object($result))
        {
            array_push($data, $row);
        }
        echo json_encode($data);

    }
    
    
}elseif($_SERVER['REQUEST_METHOD']=='POST'){
echo "POSTOK";
    // INSERT COORDENADA
    if (isset($_POST['latitud']) && isset($_POST['longitud']) && isset($_POST['titulo']) && isset($_POST['descripcion']) && isset($_POST['direccion']) && isset($_POST['telefono']) && isset($_POST['img']) && isset($_POST['id_categoria'])) {
        echo "VAROK";
        
    header("HTTP/1.1 200 POST OK");
    $latitud=$_POST['latitud'];
    $longitud=$_POST['longitud'];
    $titulo=$_POST['titulo'];
    $descripcion=$_POST['descripcion'];
    $direccion=$_POST['direccion'];
    $telefono=$_POST['telefono'];
    $img=$_POST['img'];
    $id_categoria=$_POST['id_categoria'];
    echo "$id_categoria";
    $orden="INSERT INTO touristmap.coordenada(LATITUD,LONGITUD,TITULO, DESCRIPCION, DIRECCION, TELEFONO, IMG, ID_CATEGORIA) VALUES('$latitud','$longitud','$titulo','$descripcion','$direccion','$telefono','$img','$id_categoria');";
echo $orden;
    $result = mysqli_query($conexion, $orden);

    $data = array();
    while ($row = mysqli_fetch_object($result))
    {
        array_push($data, $row);
    }
    echo json_encode($data);

    }
 

}elseif($_SERVER['REQUEST_METHOD']=='PUT'){
    header("HTTP/1.1 200 (PUT OK)");
      
    $id_coordenada=$_GET['id_coordenada'];
    $latitud=$_GET['latitud'];
    $longitud=$_GET['longitud'];
    $titulo=$_GET['titulo'];
    $descripcion=$_GET['descripcion'];
    $direccion=$_GET['direccion'];
    $telefono=$_GET['telefono'];
    $img=$_GET['img'];
    $id_categoria=$_GET['id_categoria'];
   
    $orden="UPDATE touristmap.coordenada SET LATITUD='$latitud', LONGITUD='$longitud' ,TITULO='$titulo', DESCRIPCION='$descripcion', DIRECCION='$direccion', TELEFONO='$telefono', IMG='$img', ID_CATEGORIA='$id_categoria' WHERE ID_COORDENADA='$id_coordenada';";
    
    $conexion->query($orden);


}elseif($_SERVER['REQUEST_METHOD']=='DELETE'){
        header("HTTP/1.1 200 (DELETE OK)");

        $id_coordenada=$_GET['id_coordenada'];

        $orden="DELETE FROM touristmap.coordenada WHERE ID_COORDENADA=$id_coordenada";

        $conexion->query($orden);
}else{
    header("HTTP/1.1 400 INVALID REQUEST");
}

?>