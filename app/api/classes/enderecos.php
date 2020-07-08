<?php
    class Enderecos
    {
        public function set($array, $email)
        {
            require_once "connection.php";
            $chaves = "";
            $valores = "";
            foreach ($array as $chave => $valor) {
                $chaves = $chaves . $chave . ',';
                $valores = $valores . " '". $valor . "' " . ',';
            }
            $sql = "INSERT INTO endereco (".substr($chaves, 0, -1).")
            VALUES (".substr($valores, 0, -1).")";
            if ($conn->query($sql) === TRUE) {
                print_r($array);
            }else{
                echo $conn->error;
            }
        }
        
        public function delete($id){
            require_once "connection.php";
            $sql = "DELETE FROM endereco WHERE id=" . $id;
            if ($conn->query($sql) === TRUE) {
            }
        }
        
        public function get($de)
        {
            $array = array();
            require_once "connection.php";
            $sqlw = "SELECT * FROM endereco WHERE de = '{$de}'";
            $result = $conn->query($sqlw);
            if ($result->num_rows > 0) {
                while($usuario = $result->fetch_assoc()) {
                    array_push($array, $usuario);
                }
            }else{
                echo "ERRO_USER_NOT_EXIST";
            }
            
            print_r(json_encode($array));
        }
    }
