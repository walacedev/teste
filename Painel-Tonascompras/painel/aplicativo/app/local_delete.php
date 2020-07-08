<?php
$id = $_GET['id'];


require_once "../../../api/connection.php";
$sql = "DELETE FROM restaurantes WHERE id=" . $id;
if ($conn->query($sql) === TRUE) {
    header("Location: ../locais.php");
} else {
    echo "error";
}
