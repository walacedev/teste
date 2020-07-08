<?php

class Horario 
{
    
 public static function get($id)
    {
        $paylist = array();
        require_once "connection.php";
        $sql = "SELECT * FROM horario where restaurante = '$id'";
        $result = $conn->query($sql);
        if($result->num_rows > 0){
           while ($row = $result->fetch_assoc()){
            print_r(json_encode(utf8_converter($row), JSON_UNESCAPED_UNICODE));
           }
           
        }else{
            print_r(json_encode(array(
                "status" => 204,
                 "message" => 'Não possui nenhum item.'), 
                 JSON_UNESCAPED_UNICODE)
                );
        }
    }
}
