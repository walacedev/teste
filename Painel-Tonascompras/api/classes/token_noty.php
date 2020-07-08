<?php

class Token
{
    public function set($array, $email)
    {
       require_once "connection.php";
       $chaves = "";
       $valores = "";
       foreach ($array as $chave => $valor) {
        $chaves = $chaves . $chave . " ='{$valor}',";
       }
       $sql = "UPDATE clientes SET ".substr($chaves, 0, -1)." WHERE email='$email'";
       if ($conn->query($sql) === TRUE) {
        $sqlw = "SELECT * FROM clientes WHERE email = '{$email}'";
        $result = $conn->query($sqlw);
        if ($result->num_rows > 0) {
        while($usuario = $result->fetch_assoc()) {
              print_r(json_encode($usuario));
            }
        }else{
            echo "ERRO_USER_NOT_EXIST";
        }
       }else{
           echo $conn->error;
       }
    }
}