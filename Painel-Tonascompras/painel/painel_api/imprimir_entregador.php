<?php
require('../pdf_js.php');

$pdf = new FPDF('P', 'mm', array(80, 200));

require_once '../../api/connection.php';
function get_categorias($id, $conn)
{
  $sqlw = "SELECT * FROM categorias WHERE id = '$id'";
  $result = $conn->query($sqlw);
  if ($result->num_rows > 0) {
    while ($pedido = ($result->fetch_assoc())) {
      return $pedido['nome'];
    }
  }
}
function getrestaurante($id, $conn)
{
  $sqlw = "SELECT * FROM restaurantes WHERE id = '$id'";
  $result = $conn->query($sqlw);
  if ($result->num_rows > 0) {
    while ($pedido = ($result->fetch_assoc())) {
      return $pedido['nome'];
    }
  }
}
function get_endereco($id, $string, $conn)
{
    $sqlw = "SELECT * FROM endereco WHERE id = '$id'";
    $result = $conn->query($sqlw);
    if ($result->num_rows > 0) {
        while ($pedido = ($result->fetch_assoc())) {
            return $pedido[$string];
        }
    }
}

function get_bairro($id, $conn)
{
    $sqlw = "SELECT * FROM bairros WHERE id = '$id'";
    $result = $conn->query($sqlw);
    if ($result->num_rows > 0) {
        while ($pedido = ($result->fetch_assoc())) {
            return $pedido['nome'];
        }
    }
}
function get_cidades($id, $conn)
{
    $sqlw = "SELECT * FROM cidades WHERE id = '$id'";
    $result = $conn->query($sqlw);
    if ($result->num_rows > 0) {
        while ($pedido = ($result->fetch_assoc())) {
            return $pedido['nome'];
        }
    }
}
session_start();
$total = 0;
$sqlw = "SELECT * FROM pedidos WHERE id = '{$_GET['id']}'";
$result = $conn->query($sqlw);
if ($result->num_rows > 0) {
  while ($pedidos = $result->fetch_assoc()) {

    $pdf->AddPage();
    $pdf->SetFont('Courier', 'B', 13);
    $pdf->Cell(0, 0, utf8_decode(getrestaurante($pedidos['restaurante'], $conn)), 0, 0, 'C');
    $pdf->Ln(20);
    $pdf->SetFont('Courier', 'B', 10);
    $pdf->Cell(0, 0, "Pedido: #{$pedidos['id']}00", 0, 0, 'D');
    $pdf->Ln(5);
    $pdf->Cell(0, 0, "Dados do cliente", 0, 0, 'D');
    $pdf->Ln(5);
    $nome = utf8_decode($pedidos['nome']);
    $pdf->Cell(0, 0, "Nome: {$nome}", 0, 0, 'D');
    
    if ($pedidos['pagamento'] != 'Buscar no local') {
    $pdf->Ln(5);
    $endereco = utf8_decode(get_endereco($pedidos['endereco'], 'endereco', $conn));
    $pdf->MultiCell(0, 5, "Endereco: {$endereco}", 0, 'L', false);
    $pdf->Ln(5);
    $bairro = utf8_decode(get_bairro(get_endereco($pedidos['endereco'], 'bairro', $conn), $conn));
    $pdf->Cell(0, 0, "Bairro: {$bairro}", 0, 0, 'D');
    $pdf->Ln(5);
    $cidade = utf8_decode(get_cidades(get_endereco($pedidos['endereco'], 'cidade', $conn), $conn));
    $pdf->Cell(0, 0, "Cidade: {$cidade}", 0, 0, 'D');
    $pdf->Ln(5);
    $complemento = utf8_decode(get_endereco($pedidos['endereco'], 'complemento', $conn));
    $pdf->Cell(0, 0, "COMP: {$complemento}", 0, 0, 'D');
    $pdf->Ln(5);
    $numero = utf8_decode(get_endereco($pedidos['endereco'], 'numero', $conn));
    $pdf->Cell(0, 0, "Numero: {$numero}", 0, 0, 'D');
    
    }
    $pdf->Ln(15);
    $pdf->Cell(0, 0, "Produtos", 0, 0, 'C');
    $pdf->Ln(7);
    $pdf->Cell(0, 0, "-------------------------------", 0, 0, 'C');
    $pdf->Ln(5);
    $total = 0;
    foreach (json_decode($pedidos['itens']) as $key) {

      $total_product = 0;
      $total_product = $total_product + $key->preco;
      $pdf->MultiCell(0, 5, 'P-' . utf8_decode($key->nome) . ' - QTD (' . $key->quantidade . ')'. " R$ ".utf8_decode($key->preco), 0, 'L', false);
      $pdf->SetFont('Courier', 'B', 10);
      $pdf->Ln(5);
      foreach ($key->adicionais as $value) {
        $pdf->SetFont('Courier', 'B', 10);
        $pdf->MultiCell(0, 5, "" . get_categorias($value->de, $conn), 0, 'L', false);
        $pdf->SetFont('Courier', 'B', 10);
        $pdf->MultiCell(0, 5, utf8_decode($value->nome). " R$ ".utf8_decode($value->preco), 0, 'L', false);
        $pdf->Ln(5);
        $vpreco = $value->preco * $value->quantidade;
        $total_product = $total_product + $vpreco;
      }
      foreach ($key->adicionais_gratis as $value) {
        $pdf->SetFont('Courier', 'B', 10);
        $pdf->MultiCell(0, 5, "" . get_categorias($value->de, $conn), 0, 'L', false);
        $pdf->SetFont('Courier', 'B', 10);
        $pdf->MultiCell(0, 5, utf8_decode($value->nome) . " R$ ".utf8_decode($value->preco), 0, 'L', false);
        $pdf->Ln(5);
        $vpreco = $value->preco * $value->quantidade;
        $total_product = $total_product + $vpreco;
      }
      $allprev = array();
      foreach ($key->adicionais_prev as $value) {
        $pdf->SetFont('Courier', 'B', 10);
        $pdf->MultiCell(0, 5, "" . get_categorias($value->de, $conn), 0, 'L', false);
        $pdf->SetFont('Courier', 'B', 10);
        $pdf->MultiCell(0, 5, utf8_decode($value->nome). " R$ ".utf8_decode($value->preco), 0, 'L', false);
        $pdf->Ln(5);
        array_push($allprev, $value->preco);
      }

      $total_product = $total_product + max($allprev);

      $pdf->Ln(5);
      $total_product = $total_product * $key->quantidade;
      $total = $total + $total_product;
      $pdf->Ln(5);
      $pdf->Cell(0, 0, "-------------------------------", 0, 0, 'C');
      $pdf->Ln(5);
    }
    $pdf->Ln(15);
    $metodo = $pedidos['pagamento'];
    $pdf->Cell(0, 0, "Pagamento: {$metodo}", 0, 0, 'D');
    $pdf->Ln(5);
    $taxa = $pedidos['frete'];
    $total = $total + $taxa;

    $cupom_s = $pedidos['cupom'];
    if ($cupom_s == "") {
    } else {
      $sqlw = "SELECT * FROM cupom WHERE nome = '{$cupom_s}'";
      $result = $conn->query($sqlw);
      if ($result->num_rows > 0) {
        while ($cupom = ($result->fetch_assoc())) {

          if ($cupom['tipo'] == "FRETE_GRATIS") {
            $total = $total - $pedido['frete'];
          } elseif ($cupom['tipo'] == "PORCENTAGEM") {
            $per = $total * ($cupom['desconto'] / 100);
            $total = $total - $per;
          }
          if ($cupom['tipo'] == "TOTAL") {
            $total = $total - $cupom['desconto'];
          }
        }
      }
    }
    $pdf->Cell(0, 0, "Taxa de entrega: R$" . $taxa, 0, 0, 'D');
    $pdf->Ln(10);
    $pdf->Cell(0, 0, "-------------------------------", 0, 0, 'C');
    $pdf->Ln(5);
    $troco = $pedidos['troco'];
    if($troco == null){
      $pdf->Cell(0, 0, "Sem troco", 0, 0, 'D');
    }else{
      $pdf->Cell(0, 0, "Troco para: R$$troco", 0, 0, 'D');
    }
    
    $pdf->Ln(5);
    $pdf->Cell(0, 0, "Cobrar do cliente: R$$total", 0, 0, 'D');
    $pdf->Ln(5);
    if (strpos($pedidos['obs'], "RCM") !== false) {
      $pdf->Cell(0, 0, "Receber por cartao", 0, 0, 'D');
      $pdf->Ln(5);
    }
    $pdf->Cell(0, 0, "-------------------------------", 0, 0, 'C');
    $pdf->Ln(20);
    $pdf->SetFont('Courier', '', 8);
    $pdf->Cell(0, 0, utf8_decode("Nota emitida pelo sistema $sistema_nome"), 0, 0, 'C');


    $pdf->Output();
  }
}






?>
<!DOCTYPE html>
<html>

<head>
  <script type="text/javascript">
    $(document).ready(function() {
      document.print();
    });
  </script>
</head>

<body>

</body>

</html>