<?php
require_once '../api/connection.php';
$id = $_GET['id'];
session_start();


if ($id == "Gerencial") {
    $_SESSION['user'] = "usuario";
    $_SESSION['senha'] = "senha";
    header("Location: painel.php");
}

$sqlw = "SELECT * FROM funcionarios WHERE restaurante = ".$id;
$result = $conn->query($sqlw);
if ($result->num_rows > 0) {
    while ($usuario = $result->fetch_assoc()) {
     
        $_SESSION['user'] = $usuario['login'];
        $_SESSION['senha'] = $usuario['senha'];
        header("Location: painel.php");

    }
}

