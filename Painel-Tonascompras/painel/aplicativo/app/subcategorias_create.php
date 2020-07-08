<?php
$nome = addslashes($_POST['nome']);
$de =  $_POST['de'];

require_once "../../../api/connection.php";
$sql = "INSERT INTO sub_produtos(de, nome, restaurante) VALUES ('{$de}', '{$nome}', '{$_POST['restaurante']}')";
        if($conn->query($sql) === TRUE){
           header("Location: ../subcategorias.php");
        }else{
            echo "error";
        }