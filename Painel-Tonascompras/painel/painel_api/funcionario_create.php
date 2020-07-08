<?php
$nome = $_POST['nome'];
$restaurante = $_POST['restaurante'];
$login = $_POST['login'];
$senha = $_POST['senha'];

require_once "../../api/connection.php";
$sql = "INSERT INTO funcionarios(nome, login, senha, restaurante) VALUES ('{$nome}', '{$login}', '{$senha}', {$restaurante})";
        if($conn->query($sql) === TRUE){
            $last_funcionario = $conn->insert_id;
            $sqls = "INSERT INTO clientes(email, senha, nome, de, restaurante) VALUES ('{$login}','{$senha}', '$nome', '{$last_funcionario}', '$restaurante')";
            if($conn->query($sqls) === TRUE){
                header("Location: ../funcionarios.php");
            }else{
                echo "error ". $conn->error;
            }

        }else{
            echo "error";
        }