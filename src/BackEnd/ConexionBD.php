<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Conecta a la base de datos  con usuario, contraseña y nombre de la BD
$servidor = "localhost"; $usuario = "root"; $contrasenia = "bARCELONa"; $nombreBaseDatos = "servinet";
$conexionBD = new mysqli($servidor, $usuario, $contrasenia, $nombreBaseDatos);


// Consulta datos y recepciona una clave para consultar dichos datos con dicha clave
if (isset($_GET["consultar"])){
    $sqlServicios = mysqli_query($conexionBD,"SELECT * FROM servicios WHERE id=".$_GET["consultar"]);
    if(mysqli_num_rows($sqlServicios) > 0){
        $servicios = mysqli_fetch_all($sqlServicios,MYSQLI_ASSOC);
        echo json_encode($servicios);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}
//borrar pero se le debe de enviar una clave ( para borrado )
if (isset($_GET["borrar"])){
    $sqlServicios = mysqli_query($conexionBD,"DELETE FROM servicios WHERE id=".$_GET["borrar"]);
    if($sqlServicios){
        echo json_encode(["success"=>1]);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}
//Inserta un nuevo registro y recepciona en método post los datos de nombre y correo
if(isset($_GET["insertar"])){
    $data = json_decode(file_get_contents("php://input"));
    $nomServicio = $data -> nomServicio;
    $Dependencia = $data -> Dependencia;
    $Titular     = $data -> Titular;
    $PuestoTitular = $data -> PuestoTitular;
    $Telefono      = $data -> Telefono;
    $NomPrograma   = $data -> NomPrograma;
    $Cupos         = $data -> Cupos;
    
    if(($nomServicio != "") && ($Dependencia != "") && ($Titular != "") &&
       ($PuestoTitular != "") && ($Telefono != "") && ($NomPrograma != "") && ($Cupos != "")){
            
    $sqlServicios = mysqli_query($conexionBD,"INSERT INTO servicios(nomServicio, Dependencia, Titular, 
    PuestoTitular, Telefono, NomPrograma, Cupos) VALUES('$nomServicio','$Dependencia', '$Titular', '$PuestoTitular',
    '$Telefono', '$NomPrograma', '$Cupos') ");
    echo json_encode(["success"=>1]);
        }
    exit();
}
// Actualiza datos pero recepciona datos de nombre, correo y una clave para realizar la actualización
if(isset($_GET["actualizar"])){
    
    $data = json_decode(file_get_contents("php://input"));

    $id=(isset($data->id))?$data->id:$_GET["actualizar"];
    $nomServicio = $data -> nomServicio;
    $Dependencia = $data -> Dependencia;
    $Titular     = $data -> Titular;
    $PuestoTitular = $data -> PuestoTitular;
    $Telefono      = $data -> Telefono;
    $NomPrograma   = $data -> NomPrograma;
    $Cupos         = $data -> Cupos;
    
    $sqlServicios = mysqli_query($conexionBD,"UPDATE servicios 
    SET nomServicio='$nomServicio', dependencia='$Dependencia', titular = '$Titular', puestoTitular = '$PuestoTitular',
        telefono = '$Telefono', nomPrograma = '$NomPrograma', cupos = '$Cupos'
    WHERE id='$id'");
    echo json_encode(["success"=>1]);
    exit();
}
// Consulta todos los registros de la tabla empleados
$sqlServicios = mysqli_query($conexionBD,"SELECT * FROM servicios ");
if(mysqli_num_rows($sqlServicios) > 0){
    $servicios = mysqli_fetch_all($sqlServicios,MYSQLI_ASSOC);
    echo json_encode($servicios);
}
else{ echo json_encode([["success"=>0]]); }


?>