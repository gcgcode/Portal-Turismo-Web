<?php
$servername="localhost";
$username="root";
$password="";
$bd="touristmap";

$conexion= new mysqli($servername,$username,$password,$bd);

// GET
if($_SERVER['REQUEST_METHOD']=='GET'){

    if(isset($_GET['id_coordenada'])){ // SELECT COORDENADA FILTER BY ID_COORDENADA
        header("HTTP/1.1 200 GET OK");

        $id_coordenada=$_GET['id_coordenada'];
        $orden="SELECT * FROM touristmap.coordenada WHERE ID_COORDENADA='$id_coordenada';";

        $res= $conexion->query($orden);
        $res_string = $res->fetch_all();
        echo json_encode($res_string);

        
    }elseif(isset($_GET['categoria'])){ // SELECT COORDENADA FILTER BY CATEGORIA
        header("HTTP/1.1 200 GET OK");

        $categoria=$_GET['categoria'];
    
        $orden="SELECT * FROM touristmap.coordenada WHERE ID_CATEGORIA=(SELECT ID_CATEGORIA FROM touristmap.categoria WHERE NOMBRE = '$categoria');";
        $res= $conexion->query($orden);
        $res_string = $res->fetch_all();
        echo json_encode($res_string);

    }elseif(isset($_GET['titulo'])){ // SELECT COORDENADA FILTER BY TITULO
        header("HTTP/1.1 200 GET OK");

        $titulo=$_GET['titulo'];
    
        $orden="SELECT * FROM touristmap.coordenada WHERE titulo='$titulo';";
        $res= $conexion->query($orden);
        $res_string = $res->fetch_all();
        echo json_encode($res_string);

    }else{
        // DEFAULT
        header("HTTP/1.1 200 quepasa");
        $orden="SELECT * FROM touristmap.coordenada;";
        $res= $conexion->query($orden);
        $res_string = $res->fetch_all();
        echo json_encode($res_string);

    }
    
    
}elseif($_SERVER['REQUEST_METHOD']=='POST'){

    // INSERT COORDENADA
    if (isset($_POST['latitud']) && isset($_POST['longitud']) && isset($_POST['titulo']) && isset($_POST['descripcion']) && isset($_POST['direccion']) && isset($_POST['telefono']) && isset($_POST['img']) && isset($_POST['id_categoria'])) {
    
    header("HTTP/1.1 200 POST OK");
    $latitud=$_POST['latitud'];
    $longitud=$_POST['longitud'];
    $titulo=$_POST['titulo'];
    $descripcion=$_POST['descripcion'];
    $direccion=$_POST['direccion'];
    $telefono=$_POST['telefono'];
    $img=$_POST['img'];
    $id_categoria=$_POST['id_categoria'];

    $orden="INSERT INTO touristmap.coordenada(LATITUD,LONGITUD,TITULO, DESCRIPCION, DIRECCION, TELEFONO, IMG, ID_CATEGORIA) VALUES('$latitud','$longitud','$titulo','$descripcion','$direccion','$telefono','$img','$id_categoria');";

    $conexion->query($orden);
    echo json_encode($conexion->insert_id);

    }
 

}elseif($_SERVER['REQUEST_METHOD']=='PUT'){
    header("HTTP/1.1 200 (PUT OK)");
      
    $id_coordenada=$_POST['id_coordenada'];
    $latitud=$_POST['latitud'];
    $longitud=$_POST['longitud'];
    $titulo=$_POST['titulo'];
    $descripcion=$_POST['descripcion'];
    $direccion=$_POST['direccion'];
    $telefono=$_POST['telefono'];
    $img=$_POST['img'];
    $id_categoria=$_POST['id_categoria'];
   
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