<?php
$nome = addslashes($_POST['nome']);
$prevalecer = $_POST['prevalecer'];
$de =  json_encode($_POST['de']);
$quantidade = $_POST['quantidade'];
$gratuito = $_POST['gratuito'];
$minimo = $_POST['minimo'];
require_once "../../../api/connection.php";


session_start();
$user = $_SESSION['user'];
$senha = $_SESSION['senha'];

$sqlw = "SELECT * FROM funcionarios WHERE login = '{$user}' and senha = '{$senha}'";
$result = $conn->query($sqlw);
if ($result->num_rows > 0) {
    while ($usuario = $result->fetch_assoc()) {
        $sql = "INSERT INTO categorias(restaurante, de, nome, quantidade, prevalecer, minimo, gratuito) VALUES ('{$usuario['restaurante']}', '{$de}', '{$nome}', '{$quantidade}', '{$prevalecer}', '{$minimo}', '{$gratuito}')";
        if($conn->query($sql) === TRUE){
           header("Location: ../complementos.php");
        }else{
            echo "error";
        }
    }
}
