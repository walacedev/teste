<?php

class Noty
{
    public static function post($notificationCode)
    {
        require_once "connection.php";
        {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_URL, "https://ws.pagseguro.uol.com.br/v3/transactions/notifications/{$notificationCode}?email=wemerson.macielm@gmail.com&token=9dea99bd-fa20-4939-b61a-a867f401b7fa105fe0a8454da7e718e2cb741b3c77c9eb8c-e975-428f-87cb-637ea4ccbf55");
        $result = curl_exec($ch);
        curl_close($ch);

        $xml = simplexml_load_string($result);
        $json = json_encode($xml);
        $array = json_decode($json, TRUE);

        print_r($array);
        $statuspay = "";
        if ($array['status'] == 1) {
            $statuspay = "Aguardando pagamento";
        } elseif ($array['status'] == 2) {
            $statuspay = "Em analise";
        } elseif ($array['status'] == 3) {
            $statuspay = "Paga";
        } elseif ($array['status'] == 4) {
            $statuspay = "Disponivel";
        } elseif ($array['status'] == 5) {
            $statuspay = "Em disputa";
        } elseif ($array['status'] == 6) {
            $statuspay = "Devolvida";
        } elseif ($array['status'] == 7) {
            $statuspay = "Cancelada";
        } elseif ($array['status'] == 8) {
            $statuspay = "Debitado";
        } elseif ($array['status'] == 9) {
            $statuspay = "Retencao temporaria";
        }
       
       $code = $array['reference'];
       echo $code;
       $atrib = "UPDATE pedidos SET pay = '$statuspay' where code = '{$code}'";
       if ($conn->query($atrib) === TRUE){

        }}

        {
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_URL, "https://ws.pagseguro.uol.com.br/v3/transactions/{$notificationCode}?email=wemerson.macielm@gmail.com&token=9dea99bd-fa20-4939-b61a-a867f401b7fa105fe0a8454da7e718e2cb741b3c77c9eb8c-e975-428f-87cb-637ea4ccbf55");
            $result = curl_exec($ch);
            curl_close($ch);
    
            $xml = simplexml_load_string($result);
            $json = json_encode($xml);
            $array = json_decode($json, TRUE);
    
            print_r($array);
            $statuspay = "";
            if ($array['status'] == 1) {
                $statuspay = "Aguardando pagamento";
            } elseif ($array['status'] == 2) {
                $statuspay = "Em analise";
            } elseif ($array['status'] == 3) {
                $statuspay = "Paga";
            } elseif ($array['status'] == 4) {
                $statuspay = "Disponivel";
            } elseif ($array['status'] == 5) {
                $statuspay = "Em disputa";
            } elseif ($array['status'] == 6) {
                $statuspay = "Devolvida";
            } elseif ($array['status'] == 7) {
                $statuspay = "Cancelada";
            } elseif ($array['status'] == 8) {
                $statuspay = "Debitado";
            } elseif ($array['status'] == 9) {
                $statuspay = "Retencao temporaria";
            }
           
           $code = $array['reference'];
           echo $code;
           $atrib = "UPDATE pedidos SET pay = '$statuspay' where code = '{$code}'";
           if ($conn->query($atrib) === TRUE){
    
            }}

    }

    public static function gt_code($notificationCode)
    {
        require_once "connection.php";
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_URL, "https://ws.pagseguro.uol.com.br/v3/transactions/{$notificationCode}?email=wemerson.macielm@gmail.com&token=9dea99bd-fa20-4939-b61a-a867f401b7fa105fe0a8454da7e718e2cb741b3c77c9eb8c-e975-428f-87cb-637ea4ccbf55");
        $result = curl_exec($ch);
        curl_close($ch);
        $xml = simplexml_load_string($result);
        $json = json_encode($xml);
        $array = json_decode($json, TRUE);

        print_r($array);
        $statuspay = "";
        if ($array['status'] == 1) {
            $statuspay = "Aguardando pagamento";
        } elseif ($array['status'] == 2) {
            $statuspay = "Em analise";
        } elseif ($array['status'] == 3) {
            $statuspay = "Paga";
        } elseif ($array['status'] == 4) {
            $statuspay = "Disponivel";
        } elseif ($array['status'] == 5) {
            $statuspay = "Em disputa";
        } elseif ($array['status'] == 6) {
            $statuspay = "Devolvida";
        } elseif ($array['status'] == 7) {
            $statuspay = "Cancelada";
        } elseif ($array['status'] == 8) {
            $statuspay = "Debitado";
        } elseif ($array['status'] == 9) {
            $statuspay = "Retenção temporaria";
        }
       
       $code = $array['reference'];
       echo $code;
       $atrib = "UPDATE pedidos SET pay = '$statuspay' where code = '{$code}'";
       if ($conn->query($atrib) === TRUE){

        }

    }
}
