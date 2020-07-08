<?php
$nome = addslashes($_POST['nome']);
$endereco =  addslashes($_POST['endereco']);
$cidade = $_POST['cidade'];
$descricao = addslashes($_POST['descricao']);
$tempo_entrega = $_POST['tempo_entrega'];
$categoria = $_POST['categoria'];
$entrega = $_POST['entrega'];
$taxa = $_POST['taxa'];
$email = $_POST['email'];
$senha = $_POST['senha'];

$filename = $_FILES['img']['name'];

// Valid file extensions
$valid_extensions = array("jpg", "jpeg", "png");

// File extension
$extension = pathinfo($filename, PATHINFO_EXTENSION);

// Check extension
if (in_array(strtolower($extension), $valid_extensions)) {

    // Upload file
    if (move_uploaded_file($_FILES['img']['tmp_name'], "../imgs/" . $filename)) {
        
    } else {
        
    }
} else {
   
}


require_once "../../../api/connection.php";
$sql = "INSERT INTO restaurantes(taxa, email, senha, nome, endereco, cidade, descricao, tempo_entrega, categoria, entrega_tipo, imagem) VALUES ('{$taxa}','{$email}','{$senha}','{$nome}', '{$endereco}', '{$cidade}', '{$descricao}', '{$tempo_entrega}', '{$categoria}', '{$entrega}', '{$filename}')";
        if($conn->query($sql) === TRUE){

        $last_id = $conn->insert_id;
        $sql = "INSERT INTO `horario` (`id`, `segunda`, `terca`, `quarta`, `quinta`, `sexta`, `sabado`, `domingo`, `feriado`, `restaurante`) VALUES (NULL, 'NA', '{\"de\":\"09:00\",\"ate\":\"18:00\"}', '{\"de\":\"09:00\",\"ate\":\"18:00\"}', '{\"de\":\"09:00\",\"ate\":\"23:50\"}', '{\"de\":\"09:00\",\"ate\":\"18:00\"}', '{\"de\":\"09:00\",\"ate\":\"18:00\"}', '{\"de\":\"09:00\",\"ate\":\"18:00\"}', 'NA', '$last_id')";

        if ($conn->query($sql) === TRUE) {
           
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
        $sqls = "INSERT INTO funcionarios(login, senha, nome, restaurante) VALUES ('{$email}','{$senha}', '$nome', '{$last_id}')";
        if($conn->query($sqls) === TRUE){
            $last_funcionario = $conn->insert_id;
            $sqls = "INSERT INTO clientes(email, senha, nome, de, restaurante) VALUES ('{$email}','{$senha}', '$nome', '{$last_funcionario}', '$last_id')";
            if($conn->query($sqls) === TRUE){
                header("Location: ../locais.php");
            }else{
                echo "error ". $conn->error;
            }
        }else{
            echo "error ". $conn->error;
        }

        }else{
            echo "error ". $conn->error;
        }