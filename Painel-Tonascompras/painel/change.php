<?php
$id = $_GET['id'];
$change = $_GET['change'];

$sqlw = "SELECT * FROM pedidos";
$result = $conn->query($sqlw);

if ($result->num_rows > 0) {
    while ($pedido = $result->fetch_assoc()) {
          
        

     }
}
