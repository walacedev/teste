<?php

class Produtos 
{
    
    public static function create($de, $nome, $descricao, $preco)
    {
     require_once "connection.php";
     $sql = "INSERT INTO produtos(de, nome, descricao, preco) VALUES ('{$de}', '{$nome}', '{$descricao}', '{$preco}')";
        if($conn->query($sql) === TRUE){
            echo "sucesso {$nome}";
        }else{
            echo "error";
        }
    }

    public static function get_product($id){
        $paylist = array();
		$paylist2 = array();
        require_once "connection.php";
		
		$sqlaa = "SELECT * FROM categorias";
        $resultaa = $conn->query($sqlaa);
        if($resultaa->num_rows > 0){
           while ($rowa = $resultaa->fetch_assoc()){
             array_push($paylist2, $rowa);
               
               
           }
        }
        $sql = "SELECT * FROM produtos WHERE id = '$id'";
        $result = $conn->query($sql);
        if($result->num_rows > 0){
           while ($row = $result->fetch_assoc()){
               array_push($paylist, $row);

        $sqla = "SELECT * FROM adicionais";
        $resulta = $conn->query($sqla);
        if($resulta->num_rows > 0){
           while ($rowa = $resulta->fetch_assoc()){
             array_push($paylist, $rowa);
               
               
           }
        }
           }
        }
        
        print_r(json_encode(utf8_converter(array_merge($paylist, $paylist2)), JSON_UNESCAPED_UNICODE));
    }

    public function criar_pedido($array)
    {
       require_once "connection.php";
       $sqlw = "SELECT * FROM clientes WHERE email = '{$email}'";
        $result = $conn->query($sqlw);
        if ($result->num_rows == 1) {
          echo 'USER_EXIST';
          return;
        }
       $chaves = "";
       $valores = "";
       foreach ($array as $chave => $valor) {
        $chaves = $chaves . $chave . ',';
        $valores = $valores . " '". $valor . "' " . ',';
       }
       $sql = "INSERT INTO clientes (".substr($chaves, 0, -1).") 
        VALUES (".substr($valores, 0, -1).")";
       if ($conn->query($sql) === TRUE) {
       }else{
       	echo $conn->error;
       }
    }

    public static function get($id, $res)
    {      
        $paylist = array();
        require_once "connection.php";
        $sql = "SELECT * FROM produtos WHERE de = '$id' and status = 'ON' and restaurante = '$res'";
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
