<?php
$nome = addslashes($_POST['nome']);
$estado = $_POST['estado'];

require_once "../../../api/connection.php";
$sql = "INSERT INTO cidades(nome, estado) VALUES ('{$nome}', '{$estado}')";
if ($conn->query($sql) === TRUE) {
    header("Location: ../cidades.php");
} else {
    echo "error";
}
