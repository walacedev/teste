<?php
$id = $_GET['id'];


require_once "../../../api/connection.php";
$sql = "DELETE FROM adicionais WHERE id=" . $id;
if ($conn->query($sql) === TRUE) {
    header("Location: ../complementos.php");
} else {
    echo "error";
}