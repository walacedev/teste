<?php error_reporting(0);
$id = $_GET['id'];
require_once '../../api/connection.php';


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

  $atrib = "UPDATE pedidos SET status = 'canceled' where id = '{$id}'";
            if ($conn->query($atrib) === TRUE) {  }

$sqlw = "SELECT * FROM pedidos WHERE id = '{$id}'";
$result = $conn->query($sqlw);
if ($result->num_rows > 0) {
    while ($pedido = $result->fetch_assoc()) {
        if ($pedido['pagamento'] == "Cartao de credito") {
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_URL, "https://ws.pagseguro.uol.com.br/v3/transactions?email=fernandavieira141@gmail.com&token=a0ab1251-1ffd-40b0-b918-421ec73fbd10ab1b1d02418d962ed671295ac105f4e50a0e-d61e-48a9-8a8a-881fe071a56b&reference=" . $pedido['code']);
            $result = curl_exec($ch);
            curl_close($ch);
            $xml = simplexml_load_string($result);
            $json = json_encode($xml);
            $array = json_decode($json, TRUE);
            //print_r($array);
            if ($array["transactions"]['transaction'][0]['status'] == 1 or $array["transactions"]['transaction'][0]['status'] == 2) {
                $ch = curl_init("https://ws.pagseguro.uol.com.br/v2/transactions/cancels?email=fernandavieira141@gmail.com&token=a0ab1251-1ffd-40b0-b918-421ec73fbd10ab1b1d02418d962ed671295ac105f4e50a0e-d61e-48a9-8a8a-881fe071a56b&transactionCode=" . $array["transactions"]['transaction'][0]['code']);
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                curl_setopt($ch, CURLINFO_HEADER_OUT, true);
                curl_setopt($ch, CURLOPT_POST, true);
                $result = curl_exec($ch);
                curl_close($ch);



                $sqlww = "SELECT * FROM clientes where id = '{$pedido['de']}'";
                $resultc = $conn->query($sqlww);
                if ($resultc->num_rows > 0) {
                    while ($cliente = $resultc->fetch_assoc()) {
                      $token = $cliente['token'];
        
        
                        aa($token, 'Pedido #'.$id.'00', 'Faça seu pedido novamente, seu cartão não aprovou :(', $fire_key);
                      
        
        
                    
                     }
                }



                $atrib = "UPDATE pedidos SET status = 'canceled' where id = '{$id}'";
                if ($conn->query($atrib) === TRUE) { header("Location: ../home.php"); }
                 
                return;
            }elseif ($array["transactions"]['transaction'][0]['status'] == 3 or $array["transactions"]['transaction'][0]['status'] == 4 or $array["transactions"]['transaction'][0]['status'] == 5) {


                $ch = curl_init("https://ws.pagseguro.uol.com.br/v2/transactions/refunds?email=fernandavieira141@gmail.com&token=a0ab1251-1ffd-40b0-b918-421ec73fbd10ab1b1d02418d962ed671295ac105f4e50a0e-d61e-48a9-8a8a-881fe071a56b&transactionCode=" . $array["transactions"]['transaction'][0]['code']);
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                curl_setopt($ch, CURLINFO_HEADER_OUT, true);
                curl_setopt($ch, CURLOPT_POST, true);
                $result = curl_exec($ch);
                curl_close($ch);



                
                $sqlww = "SELECT * FROM clientes where id = '{$pedido['de']}'";
                $resultc = $conn->query($sqlww);
                if ($resultc->num_rows > 0) {
                    while ($cliente = $resultc->fetch_assoc()) {
                      $token = $cliente['token'];
        
        
                        aa($token, 'Pedido #'.$id.'00', 'Pedido cancelado e dinheiro estornado ao cartão', $fire_key);
                      
        
        
                    
                     }
                }


                $atrib = "UPDATE pedidos SET status = 'estorned' where id = '{$id}'";
                if ($conn->query($atrib) === TRUE) { header("Location: ../home.php"); }

                return;
            }else{
                header("Location: ../home.php");
            }
        }else{
            $atrib = "UPDATE pedidos SET status = 'canceled' where id = '{$id}'";
            if ($conn->query($atrib) === TRUE) { header("Location: ../home.php"); }
        }
    }
}
