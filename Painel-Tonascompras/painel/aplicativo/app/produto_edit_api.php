<?php
$nome = addslashes($_POST['nome']);
$preco =  $_POST['preco'];
$de =  $_POST['de'];
$desc =  addslashes($_POST['desc']);

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
    $sql = "UPDATE produtos SET sub_produtos='{$_POST['sub_produtos']}', nome='$nome', preco='$preco', de='$de', descricao='$desc', img='$filename' WHERE id=".$_GET['id'];

}else{
    $sql = "UPDATE produtos SET sub_produtos='{$_POST['sub_produtos']}', nome='$nome', preco='$preco', de='$de', descricao='$desc' WHERE id=".$_GET['id'];

}


if ($conn->query($sql) === TRUE) {
    header("Location: ../produtos.php");
}else{
    echo $conn->error;
}