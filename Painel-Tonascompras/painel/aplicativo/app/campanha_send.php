<?php
require_once '../../../api/connection.php';


$registers_id = array();
$sqlw = "SELECT * FROM clientes where id < 1000";
$result = $conn->query($sqlw);
if ($result->num_rows > 0) {
    while ($cli = $result->fetch_assoc()) {
        array_push($registers_id, $cli['token']);
    }
}




$titulo = addslashes($_GET['titulo']);
$msg = addslashes($_GET['msg']);


  $url = 'https://fcm.googleapis.com/fcm/send';
  $fields = array(
    'registration_ids' => $registers_id,
    'notification' => array(
      "body" => $msg,
      "title" => $titulo,
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
  //print_r($result);
  curl_close($ch);


 
    //NOTY
          $dt = date('d/m/Y');
          $hr = date('H:i');
          $sqls = "INSERT INTO notificacoes(nome, data, texto, de) VALUES ('$titulo', '$dt as $hr', '$msg', 'ALL')";
            if($conn->query($sqls) === TRUE){
            }
          //END NOTY 

    $sql = "INSERT INTO campanhas(titulo, msg) VALUES ('{$titulo}', '{$msg}')";
        if($conn->query($sql) === TRUE){
           header("Location: ../campanhas.php");
        }else{
            echo "error";
        }

  



