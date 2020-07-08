<?php
$id = $_GET['id'];


require_once "../../../api/connection.php";
$sql = "DELETE FROM bairros WHERE id=" . $id;
if ($conn->query($sql) === TRUE) {
    header("Location: ../bairros.php");
} else {
    echo "error";
}
