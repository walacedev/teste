<?php
    
    class Notificacoes
    {
        
        public static function get($id)
        {
            $paylist = array();
            require_once "connection.php";
            $sql = "SELECT * FROM notificacoes where de = $id or de = 'ALL' order by id desc limit 5";
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
