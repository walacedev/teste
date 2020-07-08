<?php

class Cupom 
{
    
    public static function get($id)
    {      
        require_once "connection.php";
        $sql = "SELECT * FROM cupom WHERE nome = '$id'";
        $result = $conn->query($sql);
        if($result->num_rows > 0){
           while ($row = $result->fetch_assoc()){
            print_r(json_encode(utf8_converter($row), JSON_UNESCAPED_UNICODE));
           }
        }else{
            echo "ERRO";
        }
    }
}
