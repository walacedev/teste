<?php
$id = $_GET['id'];


require_once "../../api/connection.php";
$sql = "DELETE FROM funcionarios WHERE id=" . $id;
if ($conn->query($sql) === TRUE) {
} else {
    echo "error";
}

$sql = "DELETE FROM clientes WHERE de=" . $id;
if ($conn->query($sql) === TRUE) {
    header("Location: ../funcionarios.php");
} else {
    echo "error";
}
