<?php
$id = $_GET['id'];


require_once "../../../api/connection.php";
$sql = "DELETE FROM cidades WHERE id=" . $id;
if ($conn->query($sql) === TRUE) {
    header("Location: ../cidades.php");
} else {
    echo "error";
}
