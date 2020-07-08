<?php
$nome = addslashes($_POST['nome']);

require_once "../../../api/connection.php";

$sql = "UPDATE estados SET nome='$nome' WHERE id=".$_GET['id'];

if ($conn->query($sql) === TRUE) {
    header("Location: ../estados.php");
}else{
    echo $conn->error;
}