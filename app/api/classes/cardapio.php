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

    public static function get($id)
    {      
        $paylist = array();
        require_once "connection.php";
        $sql = "SELECT * FROM produtos where restaurante = '$id' and status = 'ON'";
        $result = $conn->query($sql);
        if($result->num_rows > 0){
           while ($row = $result->fetch_assoc()){
               
               $sqlw = "SELECT * FROM cardapio where id = '{$row['de']}' order by nome";
               $resultz = $conn->query($sqlw);
               if ($resultz->num_rows > 0) {
                   while ($resz = $resultz->fetch_assoc()) {
                       
                       
                      array_push($paylist, $resz);
                       
                       
                   }
               }
               
               
               

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
