<?php
$servername="localhost";
$username="root";
$password="";
$bd="touristmap";

$conexion= new mysqli($servername,$username,$password,$bd);

// GET
if($_SERVER['REQUEST_METHOD']=='GET'){

    if(isset($_GET['id_coordenada'])){ // SELECT COORDENADA
        header("HTTP/1.1 200 GET OK");

        $id_coordenada=$_GET['id_coordenada'];
        $orden="SELECT * FROM coordenada WHERE ID_COORDENADA='$id_coordenada';";

        $res= $conexion->query($orden);
        $res_string = $res->fetch_all();
        echo json_encode($res_string);

        
    }elseif(isset($_GET['id_resenna'])){ // SELECT RESEÑA
        header("HTTP/1.1 200 GET OK");

        $id_resenna=$_GET['id_resenna'];
    
        $orden="SELECT * FROM resenna WHERE ID_RESENNA='$id_resenna';";
        $res= $conexion->query($orden);
        $res_string = $res->fetch_all();
        echo json_encode($res_string);

    }elseif(isset($_GET['id_usuario'])){ // SELECT USUARIO
        header("HTTP/1.1 200 GET OK");

        $id_usuario=$_GET['id_usuario'];
    
        $orden="SELECT * FROM usuario WHERE ID_USUARIO='$id_usuario';";
        $res= $conexion->query($orden);
        $res_string = $res->fetch_all();
        echo json_encode($res_string);

    }else{
        // DEFAULT
        header("HTTP/1.1 200 quepasa");
        $orden="SELECT * FROM categoria";
        $res= $conexion->query($orden);
        $res_string = $res->fetch_all();
        echo json_encode($res_string);

        $orden="SELECT * FROM resenna";
        $res= $conexion->query($orden);
        $res_string = $res->fetch_all();
        echo json_encode($res_string);

        $orden="SELECT * FROM coordenada";
        $res= $conexion->query($orden);
        $res_string = $res->fetch_all();
        echo json_encode($res_string);

        $orden="SELECT * FROM usuario";
        $res= $conexion->query($orden);
        $res_string = $res->fetch_all();
        echo json_encode($res_string);

    }
    
    
}elseif($_SERVER['REQUEST_METHOD']=='POST'){

    // INSERT COORDENADA
    if (isset($_POST['latitud']) && isset($_POST['longitud']) && isset($_POST['id_categoria'])) {
    
    header("HTTP/1.1 200 POST OK");
    $latitud=$_POST['latitud'];
    $longitud=$_POST['longitud'];
    $id_categoria=$_POST['id_categoria'];

    $orden="INSERT INTO coordenada(LATITUD,LONGITUD,ID_CATEGORIA) VALUES('$latitud','$longitud','$id_categoria');";

    $conexion->query($orden);
    echo json_encode($conexion->insert_id);

    }

    if (isset($_POST['user']) && isset($_POST['pass']) && isset($_POST['id_provincia'])) {

    // INSERT USUARIO
    header("HTTP/1.1 200 POST OK");
    $user=$_POST['user'];
    $pass=$_POST['pass'];
    $id_provincia=$_POST['id_provincia'];

    $orden="INSERT INTO usuario(NOMBRE_USUARIO,PASS_USUARIO,ID_PROVINCIA) VALUES('$user','$pass','$id_provincia');";

    $conexion->query($orden);
    echo json_encode($conexion->insert_id);

    }
    
    if (isset($_POST['texto_resenna']) && isset($_POST['valoracion']) && isset($_POST['id_usuario']) && isset($_POST['id_coordenada'])) {

        // INSERT RESEÑA
        header("HTTP/1.1 200 (POST OK)");
        $texto_resenna=$_POST['texto_resenna'];
        $valoracion=$_POST['valoracion'];
        $id_usuario=$_POST['id_usuario'];
        $id_coordenada=$_POST['id_coordenada'];
    
        $orden="INSERT INTO resenna(TEXTO_RESENNA,VALORACION,ID_USUARIO,COORDENADA) VALUES('$texto_resenna','$valoracion','$id_usuario', '$id_coordenada');";
    
        $conexion->query($orden);
        echo json_encode($conexion->insert_id);
    
        }

}elseif($_SERVER['REQUEST_METHOD']=='PUT'){
    header("HTTP/1.1 200 (PUT OK)");

    $latitud=$_GET['latitud'];
    $longitud=$_GET['longitud'];
    $id_coordenada=$_GET['id_coordenada'];
   
    $orden="UPDATE coordenada SET LATITUD='$latitud', LONGITUD='$longitud' WHERE ID_COORDENADA='$id_coordenada';";
    $conexion->query($orden);


}elseif($_SERVER['REQUEST_METHOD']=='DELETE'){
        header("HTTP/1.1 200 (DELETE OK)");

        $id_coordenada=$_GET['id_coordenada'];

        $orden="DELETE FROM coordenada WHERE ID_COORDENADA=$id_coordenada";
        $conexion->query($orden);
}else{
    header("HTTP/1.1 400 INVALID REQUEST");
}

?>