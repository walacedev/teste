<?php
    
    class Config
    {
        
        public static function get()
        {
            $paylist = array();
            require_once "connection.php";
            $sql = "SELECT * FROM configs";
            $result = $conn->query($sql);
            if($result->num_rows > 0){
                while ($row = $result->fetch_assoc()){
                    array_push($paylist, $row);
                    
                }
                print_r(json_encode(utf8_converter($paylist), JSON_UNESCAPED_UNICODE));
            }else{
                echo "ERRO_CONFIG";
            }
        }
    }
    
