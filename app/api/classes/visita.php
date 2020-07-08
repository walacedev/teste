<?php
    class Visita{
        public function set($array)
        {
            require_once "connection.php";
            $chaves = "";
            $valores = "";
            foreach ($array as $chave => $valor) {
                $chaves = $chaves . $chave . ',';
                $valores = $valores . " '". $valor . "' " . ',';
            }
            $sql = "INSERT INTO visita (".substr($chaves, 0, -1).")
            VALUES (".substr($valores, 0, -1).")";
            if ($conn->query($sql) === TRUE) {
                
            }else{
                echo $conn->error;
            }
        }
        
    }
