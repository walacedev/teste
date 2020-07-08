<?php
$nome = addslashes($_POST['nome']);
$de =  $_POST['de'];
$preco = $_POST['preco'];
$desc = addslashes($_POST['desc']);
$gratuito = $_POST['gratuito'];
$sub_produto = $_POST['sub_produto'];
require_once "../../../api/connection.php";

$sql = "UPDATE adicionais SET sub_produto = '$sub_produto', de = '$de', nome = '$nome', preco = '$preco', descricao = '$desc', gratuito = '$gratuito' WHERE id=".$_GET['id'];

if ($conn->query($sql) === TRUE) {
    header("Location: ../complementos.php");
}else{
    echo $conn->error;
}
