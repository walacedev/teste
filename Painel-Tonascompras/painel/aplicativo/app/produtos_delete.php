<?php
$id = $_GET['id'];


require_once "../../../api/connection.php";
$sql = "DELETE FROM produtos WHERE id=" . $id;
if ($conn->query($sql) === TRUE) {
    header("Location: ../produtos.php");
} else {
    echo "error";
}
