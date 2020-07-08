<?php error_reporting(0);
function utf8_converter($array)
{
    array_walk_recursive($array, function(&$item, $key){
        if(!mb_detect_encoding($item, 'utf-8', true)){
            $item = utf8_encode($item);
        }
    });

    return $array;
}
$servername = "108.179.252.193";
$username = "walles47_wall";
$password = "Wallace@123";
$database = "walles47_tonascompras";
$conn = new mysqli($servername, $username, $password, $database);
        
 if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
 } 



$sistema_nome = "Tô nas compras";
$email_aviso = "walacevitor@gmail.com";

//dados firebase
$fire_key = "AAAAHi2mWzM:APA91bF2VmmWYDCJ5ywaXEzct03Su-ZlYha8O9GPUU2ExSXf2bY4YH9WmNT54Ll1hJzWTin9BhtkidSrKamNlRVLUR21eF09pzLbk1Aa73uD5jqtythIt7BovnPe8vDKh-Yt1-H1MedC";