<?php
$restaurante = ($_POST['restaurante']);
$bairros = ($_POST['bairros']);
$fretes = ($_POST['fretes']);

$final = json_encode(array_combine($bairros, $fretes), JSON_UNESCAPED_UNICODE);

require_once "../../../api/connection.php";

$sql = "UPDATE restaurantes SET fretes='$final' WHERE id=".$restaurante;

if ($conn->query($sql) === TRUE) {
    header("Location: ../bairros.php");
}else{
    echo $conn->error;
}
