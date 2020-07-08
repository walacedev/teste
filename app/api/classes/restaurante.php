<?php
    
    class Restaurante
    {
        
        public static function get($id, $cidade)
        {
            $paylist = array();
            require_once "connection.php";
            if($id == 'todos'){
            $sql = "SELECT * FROM restaurantes where estado = 'ATIVADO' and cidade = '$cidade' ORDER BY status = 'ABERTO' DESC";
            }else if($id != null and $cidade == null){
            $sql = "SELECT * FROM restaurantes where id = '$id'";
            }else{
                 $sql = "SELECT * FROM restaurantes";
            }
            $result = $conn->query($sql);
            if($result->num_rows > 0){
                while ($row = $result->fetch_assoc()){
                    array_push($paylist, $row);
                   
                }
                 print_r(json_encode(utf8_converter($paylist), JSON_UNESCAPED_UNICODE));
            }else{
                echo "ERRO_CIDADE";
            }
        }
    }

