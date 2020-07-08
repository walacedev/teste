<?php
$nome = addslashes($_POST['nome']);
$desc = addslashes($_POST['desc']);
$restaurante = $_POST['restaurante'];
$locais = json_encode($_POST['de']);

$filename = $_FILES['img']['name'];

// Valid file extensions
$valid_extensions = array("jpg", "jpeg", "png");

// File extension
$extension = pathinfo($filename, PATHINFO_EXTENSION);

// Check extension
if (in_array(strtolower($extension), $valid_extensions)) {

    // Upload file
    if (move_uploaded_file($_FILES['img']['tmp_name'], "../imgs/" . $filename)) {
    } else {
    }
} else {
}

require_once "../../../api/connection.php";

session_start();
$user = $_SESSION['user'];
$senha = $_SESSION['senha'];

        $sql = "INSERT INTO cardapio(restaurante, nome, descricao, local, img) VALUES ('{$restaurante}','{$nome}', '{$desc}', '{$locais}', '{$filename}')";
        if ($conn->query($sql) === TRUE) {
            header("Location: ../cardapio.php");
        } else {
            echo "error";
        }
