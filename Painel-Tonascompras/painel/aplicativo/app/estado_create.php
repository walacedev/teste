<?php
$nome = addslashes($_POST['nome']);

require_once "../../../api/connection.php";
$sql = "INSERT INTO estados(nome) VALUES ('{$nome}')";
        if($conn->query($sql) === TRUE){
           header("Location: ../estados.php");
        }else{
            echo "error";
        }