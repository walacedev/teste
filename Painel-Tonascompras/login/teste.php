<?php
date_default_timezone_set('America/Sao_Paulo');
$hora = date('H');
$minutos = date('i');
$segundos = date('s');

echo "Hora atual: {$hora}:{$minutos}:{$segundos}";
echo "<br><br>";

$pedido = explode("as", "1/11/2019 as 14:00");
$pedidohorario = explode(":", $pedido[1]);

$horapedido = $pedidohorario[0];
$minutospedido = $pedidohorario[1];

$tempo_hora = $hora - $horapedido;
$tempo_minutos = $minutos - $minutospedido;


$tempo = "";
if ($tempo_hora == 0) {
    $tempo = $tempo_minutos . " m atrás";
}else{
    $tempo = $tempo_hora . "h e {$tempo_minutos}m atrás";
}

if ($tempo_minutos > 5) {
    echo "<font color='green'>{$tempo}</font>";
}elseif ($tempo_minutos > 15) {
    echo "<font color='gold'>{$tempo}</font>";
}if ($tempo_minutos > 30) {
    echo "<font color='red'>{$tempo}</font>";
}
