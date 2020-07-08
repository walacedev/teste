<?php
$nome = addslashes($_POST['nome']);
$prevalecer = $_POST['prevalecer'];
$de =  json_encode($_POST['de']);
$quantidade = $_POST['quantidade'];
$gratuito = $_POST['gratuito'];
$minimo = $_POST['minimo'];
require_once "../../../api/connection.php";


$sql = "UPDATE categorias SET de = '$de' nome = '$nome', quantidade = '$quantidade', prevalecer = '$prevalecer', minimo = '$minimo', gratuito = '$gratuito' WHERE id=".$_GET['id'];

if ($conn->query($sql) === TRUE) {
    header("Location: ../complementos.php");
}else{
    echo $conn->error;
}
