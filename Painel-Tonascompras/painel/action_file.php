<?php
require_once '../api/connection.php';
function aa($id, $title_string, $msg_string, $fire_key)
{
  $registrationIds = array($id);

  $url = 'https://fcm.googleapis.com/fcm/send';
  $fields = array(
    'registration_ids' => $registrationIds,
    'notification' => array(
      "body" => $msg_string,
      "title" => $title_string,
      "sound" => "default"
    ),
    array("apns" => array(
      "payload" => array(
        "aps" => array(
          "badge" => 42
        )
      )
    ))
  );
  $fields = json_encode($fields);
  $headers = array(
    'Authorization: key=' . $fire_key,
    'Content-Type: application/json'
  );

  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_POST, true);
  curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);

  $result = curl_exec($ch);
  print_r($result);
  curl_close($ch);
}



$status = $_GET['status'];
$id = $_GET['id'];


$sqlw = "SELECT * FROM pedidos where id = '{$id}'";
$result = $conn->query($sqlw);
if ($result->num_rows > 0) {
  while ($pedido = $result->fetch_assoc()) {

    $sqlw = "SELECT * FROM restaurantes where id = '{$pedido['restaurante']}'";
    $resultrr = $conn->query($sqlw);
    if ($resultrr->num_rows > 0) {
      while ($res = $resultrr->fetch_assoc()) {

        $sqlww = "SELECT * FROM clientes where id = '{$pedido['de']}'";
        $resultc = $conn->query($sqlww);
        if ($resultc->num_rows > 0) {
          while ($cliente = $resultc->fetch_assoc()) {
            $token = $cliente['token'];


            if ($status == 'preparing') {
              $timer = $_GET['timer'];
              aa($token, '', "Olá, seu pedido já está sendo preparado", $fire_key);
              $aa = "UPDATE pedidos SET tempo_entrega = '$timer' where id = '{$id}'";

              //NOTY
              $dt = date('d/m/Y');
              $hr = date('H:i');
              $sqls = "INSERT INTO notificacoes(nome, data, texto, de) VALUES ('Produto sendo preparado!', '$dt as $hr', 'O produto {$id}00 está sendo preparado', '{$cliente['id']}')";
              if ($conn->query($sqls) === TRUE) {
              }
              //END NOTY
              if ($conn->query($aa) === TRUE) {
              }
            } elseif ($status == 'quit_sender') {
              aa($token, '', "Seu pedido já está a caminho", $fire_key);
            } elseif ($status == 'success') {
              date_default_timezone_set('America/Sao_Paulo');
              $hora = date('H');
              $minutos = date('i');
              $segundos = date('s');
              $data = $hora . ":" . $minutos;
              aa($token, '', 'Como foi o seu pedido? Vamos avaliar o estabelecimento?', $fire_key);
              
            }
          }
        }
      }
    }
  }
}
$atrib = "UPDATE pedidos SET status = '$status' where id = '{$id}'";
if ($conn->query($atrib) === TRUE) {

}
