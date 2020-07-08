<?php
$id = $_GET['id'];


require_once "../../../api/connection.php";
$sql = "DELETE FROM sub_produtos WHERE id=" . $id;
if ($conn->query($sql) === TRUE) {
    header("Location: ../subcategorias.php");
} else {
    echo "error";
}
