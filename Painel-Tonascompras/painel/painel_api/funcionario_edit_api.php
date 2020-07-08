<?php
$nome = $_POST['nome'];
$perms =  json_encode($_POST['perms']);
$cargo = $_POST['cargo'];
$login = $_POST['login'];
$senha = $_POST['senha'];


require_once "../../api/connection.php";
$sql = "UPDATE funcionarios SET nome='$nome', perms='$perms', cargo='$cargo', login='$login', senha='$senha' WHERE id=".$_GET['id'];
if ($conn->query($sql) === TRUE) {
}else{
    echo $conn->error;
}
$sql = "UPDATE clientes SET nome='$nome', email='$login', senha='$senha' WHERE de=".$_GET['id'];
if ($conn->query($sql) === TRUE) {
    header("Location: ../funcionarios.php");
}else{
    echo $conn->error;
}