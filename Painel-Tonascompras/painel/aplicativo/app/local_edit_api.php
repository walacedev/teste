<?php
$nome = addslashes($_POST['nome']);
$endereco =  addslashes($_POST['endereco']);
$cidade = $_POST['cidade'];
$descricao = addslashes($_POST['descricao']);
$tempo_entrega = $_POST['tempo_entrega'];
$categoria = $_POST['categoria'];
$entrega = $_POST['entrega'];
$taxa = $_POST['taxa'];
$email = $_POST['email'];
$senha = $_POST['senha'];

require_once "../../../api/connection.php";

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
if ($filename != null) {
    $sql = "UPDATE restaurantes SET taxa='$taxa', nome='$nome', endereco = '$endereco', cidade= '$cidade', descricao= '$descricao',
    tempo_entrega= '$tempo_entrega', categoria= '$categoria',
    entrega_tipo= '$entrega', email= '$email', 
    senha= '$senha', imagem= '$filename' WHERE id=".$_GET['id'];
}else{
$sql = "UPDATE restaurantes SET taxa='$taxa', nome='$nome', endereco = '$endereco', cidade= '$cidade', descricao= '$descricao',
tempo_entrega= '$tempo_entrega', categoria= '$categoria',
entrega_tipo= '$entrega', email= '$email', 
senha= '$senha' WHERE id=".$_GET['id'];
}

if ($conn->query($sql) === TRUE) {
    header("Location: ../locais.php");
}