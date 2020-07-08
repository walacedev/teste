<?php
$nome = addslashes($_POST['nome']);
$cidade = $_POST['cidade'];

require_once "../../../api/connection.php";

$sql = "UPDATE bairros SET cidade='$cidade', nome='$nome' WHERE id=".$_GET['id'];

if ($conn->query($sql) === TRUE) {
    header("Location: ../bairros.php");
}else{
    echo $conn->error;
}