<?php
require_once '../../api/connection.php';
$array = array(
"10" => "Calçados",
"11" => "Carimbos e acessórios",
"12" => "Casa de carnes",
"13" => "Colchoes e enxovais",
"14" => "Comercio de produtos alimentícios",
"15" => "Componentes eletrônicos",
"16" => "Confecções",
"17" => "Copias e encadernação",
"18" => "Cosméticos e perfumaria",
"19" => "Decorações",
"20" => "Embalagens, plásticos, festa",
"21" => "Estofados",
"22" => "Ferragens, ferramentas, pregos",
"23" => "Flores",
"24" => "Gás",
"25" => "Importados",
"26" => "Informática componentes e sistemas",
"27" => "Lanches e bebidas",
"28" => "Lingerie e pijamas",
"29" => "Livraria e papelaria",
"30" => "Madeira, serraria",
"31" => "Máquinas e aparelhos eletrônicos",
"32" => "Materiais elétricos",
"33" => "Materiais para construção",
"34" => "Moveis eletrodomésticos geral",
"35" => "Ótica e relojoaria",
"36" => "Padaria, confeitaria",
"37" => "Produtos e equip. hospitalares",
"38" => "Produtos farmacêuticos",
"39" => "Refrigeração"
);

foreach ($array as $key => $value) {
  $sql = "INSERT INTO cardapio (id, nome) VALUES ('{$key}', '{$value}')";
        if($conn->query($sql) === TRUE){
        }
}