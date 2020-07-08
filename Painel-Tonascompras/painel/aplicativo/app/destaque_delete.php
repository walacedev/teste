<?php


require_once "../../../api/connection.php";
$sql = "DELETE FROM destaque";
if ($conn->query($sql) === TRUE) {
    header("Location: ../destaque.php");
} else {
    echo "error";
}
