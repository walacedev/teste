<?php
$id = $_GET['id'];


require_once "../../../api/connection.php";


$sqlw = "SELECT * FROM produtos WHERE id=" . $id;
$result = $conn->query($sqlw);
if ($result->num_rows > 0) {
    while ($pedido = $result->fetch_assoc()) {

        if ($pedido['status'] == "ON" or $pedido['status'] == "") {
            $sql = "UPDATE produtos SET status='OFF'WHERE id=" . $_GET['id'];
        } else {
            $sql = "UPDATE produtos SET status='ON'WHERE id=" . $_GET['id'];
         }

         if ($conn->query($sql) === TRUE) {
            header("Location: ../produtos.php");
        }
    }
}

