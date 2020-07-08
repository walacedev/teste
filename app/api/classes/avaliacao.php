<?php
    class Avaliacao{
        public function set($array)
        {
            require_once "connection.php";
            $chaves = "";
            $valores = "";
            foreach ($array as $chave => $valor) {
                $chaves = $chaves . $chave . ',';
                $valores = $valores . " '". $valor . "' " . ',';
            }
            $sql = "INSERT INTO avaliacoes (".substr($chaves, 0, -1).")
            VALUES (".substr($valores, 0, -1).")";
            if ($conn->query($sql) === TRUE) {
                
            }else{
                echo $conn->error;
            }
        }
        
        public function get($id)
        {
            $paylist = array();
            require_once "connection.php";
            
            
        
                    $sql = "SELECT * FROM avaliacoes where restaurante = '{$id}' order by id desc LIMIT 5";
                    $result = $conn->query($sql);
                    if($result->num_rows > 0){
                        while ($row = $result->fetch_assoc()){
                            
                            $sql = "SELECT * FROM clientes where id = '{$row['de']}'";
                            $resulta = $conn->query($sql);
                            if($resulta->num_rows > 0){
                                while ($rowa = $resulta->fetch_assoc()){
                                    
                                    array_push($paylist, array('usuario'=>$rowa, 'avaliacao'=>$row));
                                    
                                }
                            }
                            
                            
                            
                        }
                        
                    }else{
                        
                        
            }
            print_r(json_encode(utf8_converter($paylist), JSON_UNESCAPED_UNICODE));
            
            
            
            
        }
    }
