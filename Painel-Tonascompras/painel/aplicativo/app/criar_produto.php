<?php
$nome = addslashes($_POST['nome']);
$de =  $_POST['de'];
$preco = $_POST['preco'];
$desc = addslashes($_POST['desc']);

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

$sqlw = "SELECT * FROM funcionarios WHERE login = '{$user}' and senha = '{$senha}'"; 
$result = $conn->query($sqlw);
if ($result->num_rows > 0) {
    while ($usuario = $result->fetch_assoc()) {
$sql = "INSERT INTO produtos(de, nome, preco, descricao, img, sub_produtos, restaurante) VALUES ('{$de}',
 '{$nome}', '{$preco}', '{$desc}', '{$filename}', '{$_POST['sub_produtos']}', '{$usuario['restaurante']}')";
        if($conn->query($sql) === TRUE){
           header("Location: ../produtos.php");
        }else{ 
            echo "error";
        }
    }
}