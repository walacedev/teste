<?php
$id = $_GET['id'];


require_once "../../../api/connection.php";
$sql = "DELETE FROM cardapio WHERE id=" . $id;
if ($conn->query($sql) === TRUE) {
    header("Location: ../cardapio.php");
} else {
    echo "error";
}
