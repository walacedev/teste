<?php
if ($_POST['segunda'] == true) {
    $segunda_de = $_POST['segunda-de'];
    $segunda_ate = $_POST['segunda-ate'];
    $segunda = json_encode(array('de' => $segunda_de, 'ate' => $segunda_ate));
} else {
    $segunda = "NA";
}

if ($_POST['terca'] == true) {
    $terca_de = $_POST['terca-de'];
    $terca_ate = $_POST['terca-ate'];
    $terca = json_encode(array('de' => $terca_de, 'ate' => $terca_ate));
} else {
    $terca = "NA";
}

if ($_POST['quarta'] == true) {
    $quarta_de = $_POST['quarta-de'];
    $quarta_ate = $_POST['quarta-ate'];
    $quarta = json_encode(array('de' => $quarta_de, 'ate' => $quarta_ate));
} else {
    $quarta = "NA";
}

if ($_POST['quinta'] == true) {
    $quinta_de = $_POST['quinta-de'];
    $quinta_ate = $_POST['quinta-ate'];
    $quinta = json_encode(array('de' => $quinta_de, 'ate' => $quinta_ate));
} else {
    $quinta = "NA";
}

if ($_POST['sexta'] == true) {
    $sexta_de = $_POST['sexta-de'];
    $sexta_ate = $_POST['sexta-ate'];
    $sexta = json_encode(array('de' => $sexta_de, 'ate' => $sexta_ate));
} else {
    $sexta = "NA";
}

if ($_POST['sabado'] == true) {
    $sabado_de = $_POST['sabado-de'];
    $sabado_ate = $_POST['sabado-ate'];
    $sabado = json_encode(array('de' => $sabado_de, 'ate' => $sabado_ate));
} else {
    $sabado = "NA";
}

if ($_POST['domingo'] == true) {
    $domingo_de = $_POST['domingo-de'];
    $domingo_ate = $_POST['domingo-ate'];
    $domingo = json_encode(array('de' => $domingo_de, 'ate' => $domingo_ate));
} else {
    $domingo = "NA";
}

if ($_POST['feriado'] == true) {
    $feriado_de = $_POST['feriado-de'];
    $feriado_ate = $_POST['feriado-ate'];
    $feriado = json_encode(array('de' => $feriado_de, 'ate' => $feriado_ate));
} else {
    $feriado = "NA";
}

$telefone = $_POST['telefone'];

require_once "../../../api/connection.php";
$atrib = "UPDATE horario SET telefone='$telefone', feriado = '$feriado', segunda = '$segunda', terca = '$terca', quarta = '$quarta', quinta = '$quinta', sexta =  '$sexta', sabado = '$sabado', domingo = '$domingo'  where restaurante = '{$_GET['id']}'";
       if ($conn->query($atrib) === TRUE){
           header('Location: ../horarios.php');
        }