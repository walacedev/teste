<?php
require_once '../api/connection.php';
session_start();
$user = $_SESSION['user'];
$senha = $_SESSION['senha'];

$sqlw = "SELECT * FROM funcionarios WHERE login = '{$user}' and senha = '{$senha}'";
$result = $conn->query($sqlw);
if ($result->num_rows > 0) {
    while ($usuario = $result->fetch_assoc()) {


if($usuario['cargo'] == "ADMIN"){
  $id = $_GET['id'];
  $status = "";
  $sqlw = "SELECT * FROM restaurantes WHERE id = '{$id}'";
  $result = $conn->query($sqlw);
  if ($result->num_rows > 0) {
    while ($locals = $result->fetch_assoc()) {
     if ($locals['status'] != "ABERTO") {
        $status = "ABERTO";
     }else{
      $status = "FECHADO";
     }
    }
  }
  
  $atrib = "UPDATE restaurantes SET status = '$status' where id = '{$id}'";
  if ($conn->query($atrib) === TRUE){
      header("Location: setlocal.php");
  }
}else{
  $status = "";
$sqlw = "SELECT * FROM restaurantes WHERE id = '{$usuario['restaurante']}'";
$result = $conn->query($sqlw);
if ($result->num_rows > 0) {
  while ($locals = $result->fetch_assoc()) {
   if ($locals['status'] != "ABERTO") {
      $status = "ABERTO";
   }else{
    $status = "FECHADO";
   }
  }
}

$atrib = "UPDATE restaurantes SET status = '$status' where id = '{$usuario['restaurante']}'";
if ($conn->query($atrib) === TRUE){
    header("Location: home.php");
}
}




    }
  }
