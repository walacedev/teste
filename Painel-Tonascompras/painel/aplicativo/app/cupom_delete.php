<?php
$id = $_GET['id'];


require_once "../../../api/connection.php";
$sql = "DELETE FROM cupom WHERE id=" . $id;
if ($conn->query($sql) === TRUE) {
    header("Location: ../cupom.php");
} else {
    echo "error";
}
