<?php
require_once '../api/connection.php';

$user = $_POST['user'];
$senha = $_POST['senha'];

$sqlw = "SELECT * FROM funcionarios WHERE login = '{$user}' and senha = '{$senha}'";
$result = $conn->query($sqlw);
if ($result->num_rows > 0) {
    while ($usuario = $result->fetch_assoc()) {
        session_start();
        if ($usuario['nome'] == "TchauFome") {
            $_SESSION['user'] = $user;
            $_SESSION['senha'] = $senha;
            header('Location: ../painel/setlocal');
        } else {
            $_SESSION['user'] = $user;
            $_SESSION['senha'] = $senha;
            header('Location: ../painel/');
        }
    }
} else {
    header('Location: erro_login.php');
}
