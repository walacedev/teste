<?php
$id = $_GET['id'];


require_once "../../../api/connection.php";
$sql = "DELETE FROM mesas WHERE id=" . $id;
if ($conn->query($sql) === TRUE) {
    header("Location: ../mesas.php");
} else {
    echo "error";
}
