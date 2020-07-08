<?php
$nome = addslashes($_POST['nome']);
$de =  $_POST['de'];
$preco = $_POST['preco'];
$desc = addslashes($_POST['desc']);
$gratuito = $_POST['gratuito'];
$sub_produto = $_POST['sub_produto'];
require_once "../../../api/connection.php";
$sql = "INSERT INTO adicionais(sub_produto, de, nome, preco, descricao, gratuito) VALUES ('{$sub_produto}','{$de}', '{$nome}', '{$preco}', '{$desc}', '{$gratuito}')";
        if($conn->query($sql) === TRUE){
           header("Location: ../complementos.php");
        }else{
            echo "error";
        }