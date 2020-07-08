<?php
$nome = addslashes($_POST['nome']);
$de =  $_POST['desconto'];
$porcentagem = $_POST['porcentagem'];
$total = $_POST['total'];
$minimo = $_POST['minimo'];

$desc = "";

if ($de == "FRETE_GRATIS") {
    $desc = "FRETE_GRATIS";
}
if ($de == "PORCENTAGEM") {
    $desc = $porcentagem;
}
if ($de == "TOTAL") {
    $desc = $total;
}

require_once "../../../api/connection.php";


$sql = "INSERT INTO cupom(minimo, nome, tipo, desconto) VALUES ('{$minimo}','{$nome}', '{$de}', '{$desc}')";
        if($conn->query($sql) === TRUE){
           header("Location: ../cupom.php");
        }else{
            echo "error";
        }
    