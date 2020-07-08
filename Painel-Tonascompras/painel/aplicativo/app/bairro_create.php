<?php
$nome = addslashes($_POST['nome']);
$cidade =  addslashes($_POST['cidade']);

require_once "../../../api/connection.php";
$sql = "INSERT INTO bairros(cidade, nome) VALUES ('{$cidade}', '{$nome}')";
        if($conn->query($sql) === TRUE){
           header("Location: ../bairros.php");
        }else{
            echo "error";
        }