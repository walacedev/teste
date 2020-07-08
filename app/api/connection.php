<?php error_reporting(0);
date_default_timezone_set('America/Sao_Paulo');
function utf8_converter($array)
{
    array_walk_recursive($array, function(&$item, $key){
        if(!mb_detect_encoding($item, 'utf-8', true)){
            $item = utf8_encode($item);
        }
    });

    return $array;
}
$servername = "localhost";
$username = "walles47_wall";
$password = "Wallace@123";
$database = "walles47_wallfood";
$conn = new mysqli($servername, $username, $password, $database);
        
 if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
 } 



$sistema_nome = "TchauFome";
$email_aviso = "walacevitor@gmail.com";

//dados firebase
$fire_key = "AAAAFUlJgQw:APA91bHk4MAmOaHdunuKN0fR8kPr4YpzZDy-8d0VnuqEDV32XKs8Bf5OdEmb63yazF1pMjoO0RTGi3-Qj1OzJ9G3DihzhSzmgpGjf86MIAZRErxMQwGSbqmV-8NPBqZVuvzU0C5xSzDb";
