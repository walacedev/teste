<?php

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
        $sql = "SELECT * FROM pedidos WHERE de = '$de' ORDER BY id DESC";
        $result = $conn->query($sql);
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

}
