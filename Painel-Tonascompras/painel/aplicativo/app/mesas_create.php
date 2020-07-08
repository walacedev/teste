<?php
$nome = $_POST['nome'];
$de =  json_encode($_POST['de']);

require_once "../../../api/connection.php";
$sql = "INSERT INTO mesas(local, nome) VALUES ('{$de}', '{$nome}')";
        if($conn->query($sql) === TRUE){
           header("Location: ../mesas.php");
        }else{
            echo "error";
        }