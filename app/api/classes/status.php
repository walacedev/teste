<?php
    class Status
    {
        
        public function get($id, $status)
        {
            require_once "connection.php";
            $sql = "UPDATE restaurantes SET status='$status' WHERE id='$id'";
            if ($conn->query($sql) === TRUE) {
                echo "OK";
                
            }else{
                echo $conn->error;
            }
        }
    
    }
