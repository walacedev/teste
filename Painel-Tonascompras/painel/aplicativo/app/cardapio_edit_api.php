<?php
$nome = addslashes($_POST['nome']);
$descricao =  $_POST['descricao'];
$locais = json_encode($_POST['locais']);


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
$restaurante = $_POST['restaurante'];
if ($filename != null) {
    $sql = "UPDATE cardapio SET restaurante =  '$restaurante', nome='$nome', descricao='$descricao', local='$locais', img='$filename' WHERE id=".$_GET['id'];
}else{
    $sql = "UPDATE cardapio SET restaurante =  '$restaurante', nome='$nome', descricao='$descricao', local='$locais' WHERE id=".$_GET['id'];
}

if ($conn->query($sql) === TRUE) {
    header("Location: ../cardapio.php");
}else{
    echo $conn->error;
}