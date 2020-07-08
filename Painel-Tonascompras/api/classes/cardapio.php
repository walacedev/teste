<?php

class Cardapio 
{
    
    public static function create($nome, $descricao)
    {
     require_once "connection.php";
     $sql = "INSERT INTO cardapio(nome, descricao) VALUES ('{$nome}', '{$descricao}')";
        if($conn->query($sql) === TRUE){
            echo "sucesso {$nome}";
        }else{
            echo "error";
        }
    }

    public static function get()
    {      
        $paylist = array();
        require_once "connection.php";
        $sql = "SELECT * FROM cardapio";
        $result = $conn->query($sql);
        if($result->num_rows > 0){
           while ($row = $result->fetch_assoc()){
              array_push($paylist, $row);
           }
           print_r(json_encode(utf8_converter($paylist), JSON_UNESCAPED_UNICODE));
        }else{
            print_r(json_encode(array(
                "status" => 204,
                 "message" => 'Não possui nenhum item.'), 
                 JSON_UNESCAPED_UNICODE)
                );
        }
    }
}
