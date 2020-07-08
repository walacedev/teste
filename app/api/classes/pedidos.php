<?php
    error_reporting(0);
class Pedidos 
{
    
    public function criar_pedido($array)
    {
       require_once "connection.php";
       $chaves = "";
       $valores = "";
       foreach ($array as $chave => $valor) {
        $chaves = $chaves . $chave . ',';
        $valores = $valores . " '". $valor . "' " . ',';
       }
       $sql = "INSERT INTO pedidos (".substr($chaves, 0, -1).") 
        VALUES (".substr($valores, 0, -1).")";
       if ($conn->query($sql) === TRUE) {
       }else{
       	echo $conn->error;
       }
    }

    public static function get($de)
    {      
        $paylist = array();
        require_once "connection.php";
        $sqlz = "";
        $sql = "SELECT * FROM clientes WHERE id = '$de'";
        $resultc = $conn->query($sql);
        if($resultc->num_rows > 0){
            while ($cliente = $resultc->fetch_assoc()){
                
                
                
                $sql = "SELECT * FROM funcionarios WHERE id = '{$cliente['de']}'";
                $resultcf = $conn->query($sql);
                if($resultcf->num_rows > 0){
                    while ($funcionario = $resultcf->fetch_assoc()){
                        
                        
                        if($funcionario['cargo'] == "ADMIN"){
                            $sqlz = "SELECT * FROM pedidos ORDER BY id DESC";
                        }else{
                            $sqlz = "SELECT * FROM pedidos WHERE restaurante = '{$cliente['restaurante']}' ORDER BY id DESC";
                        }
                        
                    }
                }else{
                    $sqlz = "SELECT * FROM pedidos WHERE de = '$de' ORDER BY id DESC";
                }
                
                
                
            }
        }
        
        
        
        
        
        $result = $conn->query($sqlz);
        if($result->num_rows > 0){
           while ($row = $result->fetch_assoc()){
              array_push($paylist, $row);
           }
           print_r(json_encode(utf8_converter($paylist), JSON_UNESCAPED_UNICODE));
        }else{
            print_r(json_encode(array(
                "status" => 204,
                 "message" => 'Não possui nenhum pedido.'), 
                 JSON_UNESCAPED_UNICODE)
                );
        }
    }
    
    
    public static function get_app_change($status, $id)
    {
        
        require_once "connection.php";
        function aa($id, $title_string, $msg_string, $fire_key)
        {
            $registrationIds = array($id);
            // prep the bundle
            $msg = array(
                         'message' => $msg_string,
                         'title' => $title_string
                         );
            $fields = array(
                            'registration_ids' => $registrationIds,
                            'data' => $msg
                            );
            
            $headers = array(
                             'Authorization: key=' . $fire_key,
                             'Content-Type: application/json'
                             );
            
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fields));
            $rr = curl_exec($ch);
            curl_close($ch);
        }
        
        
        
        $statusid = "";
        
        if ($status == 'not_pay') {
            $statusid = "preparing";
        } elseif ($status == 'preparing') {
            $statusid = "quit_sender";
        } elseif ($status == 'quit_sender') {
            $statusid = "success";
        }
        
        
        $sqlw = "SELECT * FROM pedidos where id = '{$id}'";
        $result = $conn->query($sqlw);
        if ($result->num_rows > 0) {
            while ($pedido = $result->fetch_assoc()) {
                
                $sqlww = "SELECT * FROM clientes where id = '{$pedido['de']}'";
                $resultc = $conn->query($sqlww);
                if ($resultc->num_rows > 0) {
                    while ($cliente = $resultc->fetch_assoc()) {
                        $token = $cliente['token'];
                        
                        
                        if ($status == 'not_pay') {
                            $timer = $_GET['timer'];
                            aa($token, 'Pedido #' . $id . '00', 'Seu pedido esta sendo preparado, será entregue em: ' . $timer, $fire_key);
                            $aa = "UPDATE pedidos SET tempo_entrega = '$timer' where id = '{$id}'";
                            if ($conn->query($aa) === TRUE) { }
                        } elseif ($status == 'preparing') {
                            aa($token, 'Pedido #' . $id . '00', 'Seu pedido saiu para entrega.', $fire_key);
                        } elseif ($status == 'quit_sender') {
                            date_default_timezone_set('America/Sao_Paulo');
                            $hora = date('H');
                            $minutos = date('i');
                            $segundos = date('s');
                            $data = $hora . ":" . $minutos;
                            $atrib = "UPDATE pedidos SET horario_entrega = '$data' where id = '{$id}'";
                            if ($conn->query($atrib) === TRUE) {
                            }
                            
                            aa($token, 'Pedido #' . $id . '00', 'Seu pedido foi entregue.', $fire_key);
                        }
                    }
                }
            }
        }
        
        $atrib = "UPDATE pedidos SET status = '$statusid' where id = '{$id}'";
        if ($conn->query($atrib) === TRUE) {
           
        }

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    }

}
