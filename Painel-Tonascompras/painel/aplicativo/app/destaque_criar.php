<?php
$id = $_POST['id'];
session_start();
$user = $_SESSION['user'];
$senha = $_SESSION['senha'];
require_once "../../../api/connection.php";
$sqlw = "SELECT * FROM funcionarios WHERE login = '{$user}' and senha = '{$senha}'";
$result = $conn->query($sqlw);
if ($result->num_rows > 0) {
    while ($usuario = $result->fetch_assoc()) {
$sqlw = "SELECT * FROM produtos WHERE restaurante = '{$usuario['restaurante']}' and destaque = 'Sim'";
        $resulta = $conn->query($sqlw);
        if ($resulta->num_rows > 0) {
            while ($destaque = $resulta->fetch_assoc()) {


                $sql = "UPDATE produtos SET destaque='' WHERE id=".$destaque['id'];
                if ($conn->query($sql) === TRUE) {
                    
                }

            }
        }
    }
}

        $sql = "UPDATE produtos SET destaque='Sim' WHERE id=".$id;
        if ($conn->query($sql) === TRUE) {
            header("Location: ../destaque");
        }