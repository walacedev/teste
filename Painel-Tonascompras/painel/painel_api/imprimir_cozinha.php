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
$total = 0;
$sqlw = "SELECT * FROM pedidos WHERE id = '{$_GET['id']}'";
$result = $conn->query($sqlw);
if ($result->num_rows > 0) {
  while ($pedidos = $result->fetch_assoc()) {
    $pdf->AddPage();
    $pdf->SetFont('Courier', 'B', 13);
    $pdf->Cell(0, 0, utf8_decode(getrestaurante($pedidos['restaurante'], $conn)), 0, 0, 'C');
    $pdf->Ln(15);
    $pdf->SetFont('Courier', 'B', 10);
    $pdf->Cell(0, 0, "Pedido: #{$pedidos['id']}00", 0, 0, 'C');
    $pdf->Ln(15);
    $pdf->Cell(0, 0, "Produtos", 0, 0, 'C');
    $pdf->Ln(7);
    $pdf->Cell(0, 0, "-------------------------------", 0, 0, 'C');
    $pdf->Ln(5);
    $total = 0;
    foreach (json_decode($pedidos['itens']) as $key) {

      $total_product = 0;
      $total_product = $total_product + $key->preco;
      $pdf->MultiCell(0, 5, 'P-' . utf8_decode($key->nome) . ' - QTD (' . $key->quantidade . ')', 0, 'L', false);
      $pdf->SetFont('Courier', 'B', 10);
      $pdf->Ln(5);
      foreach ($key->adicionais as $value) {
        $pdf->SetFont('Courier', 'B', 13);
        $pdf->MultiCell(0, 5, "" . get_categorias($value->de, $conn), 0, 'L', false);
        $pdf->SetFont('Courier', 'B', 10);
        $pdf->MultiCell(0, 5, utf8_decode($value->nome), 0, 'L', false);
        $pdf->Ln(5);
        $vpreco = $value->preco * $value->quantidade;
        $total_product = $total_product + $vpreco;
      }
      foreach ($key->adicionais_gratis as $value) {
        $pdf->SetFont('Courier', 'B', 13);
        $pdf->MultiCell(0, 5, "" . get_categorias($value->de, $conn), 0, 'L', false);
        $pdf->SetFont('Courier', 'B', 10);
        $pdf->MultiCell(0, 5, utf8_decode($value->nome), 0, 'L', false);
        $pdf->Ln(5);
        $vpreco = $value->preco * $value->quantidade;
        $total_product = $total_product + $vpreco;
      }
      $allprev = array();
      foreach ($key->adicionais_prev as $value) {
        $pdf->SetFont('Courier', 'B', 13);
        $pdf->MultiCell(0, 5, "" . get_categorias($value->de, $conn), 0, 'L', false);
        $pdf->SetFont('Courier', 'B', 10);
        $pdf->MultiCell(0, 5, utf8_decode($value->nome), 0, 'L', false);
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
    $pdf->Ln(5);
    $pdf->Cell(0, 0, "P = Produto", 0, 0, 'C');
    $pdf->Ln(10);
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