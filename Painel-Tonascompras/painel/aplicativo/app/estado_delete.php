<?php
$id = $_GET['id'];
require_once "../../../api/connection.php";


$sqlw = "SELECT * FROM cidades WHERE estado = '{$id}'";
$result = $conn->query($sqlw);
if ($result->num_rows > 0) {
    while ($cidade = $result->fetch_assoc()) {

        $sqlw = "SELECT * FROM restaurantes WHERE cidade = '{$cidade['id']}'";
        $resultr = $conn->query($sqlw);
        if ($resultr->num_rows > 0) {
            while ($cidade = $resultr->fetch_assoc()) {

                $sql = "DELETE FROM produtos WHERE cidade = " . $cidade['id'];
                if ($conn->query($sql) === TRUE) {
                }


            }
        }

        $sql = "DELETE FROM restaurantes WHERE cidade = " . $cidade['id'];
        if ($conn->query($sql) === TRUE) {
        }

        $sql = "DELETE FROM bairros WHERE cidade = " . $cidade['id'];
        if ($conn->query($sql) === TRUE) {
        }
    }
}

$sql = "DELETE FROM cidades WHERE estado = " . $id;
if ($conn->query($sql) === TRUE) {
}


$sql = "DELETE FROM estados WHERE id=" . $id;
if ($conn->query($sql) === TRUE) {
    header("Location: ../estados.php");
} else {
    echo "error";
}
