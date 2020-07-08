<?php
require_once '../api/connection.php';
$id = $_GET['id'];



$sqlw = "SELECT * FROM restaurantes WHERE id = " . $id;
$result = $conn->query($sqlw);
if ($result->num_rows > 0) {
    while ($res = $result->fetch_assoc()) {

        if ($res['estado'] != "ATIVADO") {
            $sql = "UPDATE restaurantes SET estado='ATIVADO' WHERE id=" . $_GET['id'];
        }else{
            $sql = "UPDATE restaurantes SET estado='DESATIVADO' WHERE id=" . $_GET['id'];
        }
        if ($conn->query($sql) === TRUE) {
            header("Location: setlocal.php");
        }else{
            echo $conn->error;
        }
        
    }
}
