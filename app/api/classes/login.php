<?php
class Login
{
    public function criar_usuario($array, $email)
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

    public function getlogin($email)
    {
        require_once "connection.php";
        $sqlw = "SELECT * FROM clientes WHERE email = '{$email}'";
        $result = $conn->query($sqlw);
        if ($result->num_rows > 0) {
        while($usuario = $result->fetch_assoc()) {
              print_r(json_encode($usuario));
            }
        }else{
            echo "ERRO_USER_NOT_EXIST";
        }
    }
}
