<?php
header("access-control-allow-origin: https://sandbox.pagseguro.uol.com.br");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
require_once '../api/connection.php';
session_start();
$user = $_SESSION['user'];
$senha = $_SESSION['senha'];

$sqlw = "SELECT * FROM funcionarios WHERE login = '{$user}' and senha = '{$senha}'";
$result = $conn->query($sqlw);
if ($result->num_rows > 0) {
  while ($usuario = $result->fetch_assoc()) {

    $sqlw = "SELECT * FROM pedidos WHERE id = '{$_GET['id']}'";
    $result = $conn->query($sqlw);
    if ($result->num_rows > 0) {
      while ($pedido = ($result->fetch_assoc())) {

        $sqlwr = "SELECT * FROM restaurantes WHERE id = '{$pedido['restaurante']}'";
        $resultr = $conn->query($sqlwr);
        if ($resultr->num_rows > 0) {
          while ($res = ($resultr->fetch_assoc())) {

?>
            <!DOCTYPE html>
            <html lang="en">

            <head>

              <meta charset="utf-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
              <meta name="description" content="">
              <meta name="author" content="">

              <title><?php echo $sistema_nome ?> - Admin</title>
              <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
              <!-- Custom fonts for this template-->
              <link href="../vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
              <link href="../https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

              <!-- Custom styles for this template-->
              <link href="../css/sb-admin-2.min.css" rel="stylesheet">

            </head>

            <body id="page-top">

              <!-- Page Wrapper -->
              <div id="wrapper">

                <!-- Sidebar -->
                <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                  <!-- Sidebar - Brand -->
                  <a class="sidebar-brand d-flex align-items-center justify-content-center" href="../index.html">
                    <div class="sidebar-brand-icon rotate-n-15">
                      <i class="fas cart"></i>
                    </div>
                    <div class="sidebar-brand-text mx-3"><?php echo $sistema_nome ?></div>
                  </a>

                  <!-- Divider -->
                  <hr class="sidebar-divider my-0">

                  <!-- Nav Item - Dashboard -->
                  <li class="nav-item active">
                    <a class="nav-link" href="painel.php">
                      <i class="fas fa-fw fa-tachometer-alt"></i>
                      <span>Voltar para pedidos</span></a>
                  </li>

                  <?php if ($usuario['cargo'] == "ADMIN") { ?>
                    <li class="nav-item">
                      <a class="nav-link" href="aplicativo/relatorios_gerencial/clientes">
                        <i class="fas fa-fw fa-book"></i>
                        <span>Relatórios</span></a>
                    </li>
                  <?php } ?>

                  <?php if ($usuario['cargo'] != "ADMIN") { ?>
                    <li class="nav-item">
                      <a class="nav-link" href="aplicativo/relatorios_restaurantes/clientes">
                        <i class="fas fa-fw fa-book"></i>
                        <span>Relatórios</span></a>
                    </li>
                  <?php } ?>

                  <?php if ($usuario['cargo'] != "ADMIN") { ?>
                    <li class="nav-item">
                      <a class="nav-link" href="funcionarios.php">
                        <i class="fas fa-fw fa-users"></i>
                        <span>Funcionários</span></a>
                    </li>
                  <?php } ?>

                  <li class="nav-item">
                    <a class="nav-link" href="aplicativo/">
                      <i class="fas fa-fw fa-mobile-alt"></i>
                      <span>Aplicativo</span></a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="sair.php">
                      <i class="fas fa-fw fa-sign-out-alt"></i>
                      <span>Sair</span></a>
                  </li>

                  <hr class="sidebar-divider d-none d-md-block">

                  <!-- Sidebar Toggler (Sidebar) -->
                  <div class="text-center d-none d-md-inline">
                    <button class="rounded-circle border-0" id="sidebarToggle"></button>
                  </div>

                </ul>
                <!-- End of Sidebar -->

                <!-- Content Wrapper -->
                <div id="content-wrapper" class="d-flex flex-column">

                  <!-- Main Content -->
                  <div id="content">

                    <br>
                    <!-- End of Topbar -->

                    <!-- Begin Page Content -->
                    <div class="container-fluid">

                      <!-- Page Heading -->
                      <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Pedido nº<?php echo $pedido['id'] ?>00</h1>
                        <p class="text-gray"><?php echo $pedido['horario'] ?></p>
                        <a target="_blank" href="mailto:suporte@tonascompras.com" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-bug fa-sm text-white-50"></i> Reportar erro</a>
                      </div>

                      <!-- Content Row -->
                      <div class="row">

                        <div class="col-lg mb-4">

                          <!-- Approach -->
                          <div class="card shadow mb-4">
                            <div class="card-body">
                             
                              <?php
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

                              function get_cidade($id, $conn)
                              {
                                $sqlw = "SELECT * FROM cidades WHERE id = '$id'";
                                $result = $conn->query($sqlw);
                                if ($result->num_rows > 0) {
                                  while ($pedido = ($result->fetch_assoc())) {
                                    return $pedido['nome'];
                                  }
                                }
                              }
                              if ($pedido['pagamento'] != 'Buscar no local') {
                              ?>
                               <h4><b>Endereço para entrega</b></h4>
                              <b>Cidade</b>: <?php echo get_cidade(get_endereco($pedido['endereco'], 'cidade', $conn), $conn) ?><br>
                              <b>Endereço</b>: <?php echo (get_endereco($pedido['endereco'], 'endereco', $conn)) ?><br>
                              <b>Número</b>: <?php echo (get_endereco($pedido['endereco'], 'numero', $conn)) ?><br>
                              <b>Complemento</b>: <?php echo (get_endereco($pedido['endereco'], 'complemento', $conn)) ?><br>
                              <b>Bairro</b>: <?php echo get_bairro(get_endereco($pedido['endereco'], 'bairro', $conn), $conn) ?><br>
                              <br>
                              <?php } ?>
                              <h4><b>Dados do cliente</b></h4>
                              <b>Nome do cliente</b>: <?php echo ($pedido['nome']) ?><br>
                              <b>Contato</b>: <?php echo ($pedido['tel']) ?><br>
                              <b>Pagamento</b>: <?php
                                                if ($pedido['pagamento'] == "Cartao de credito") {
                                                  echo "<font color='red'>Pago on-line</font>";
                                                } else {
                                                  echo $pedido['pagamento'];
                                                }

                                                ?><br>
                              <?php
                              if (strpos($pedido['obs'], "RCM") !== false) {
                                echo "<b>Pagamento por</b>: Cartão de crédito ou debito";
                              }

                              ?>
                              <br> <br>
                              <h4><b>Itens do pedido</b></h4>
                              <?php


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



                              $total = 0;
                              //print_r(json_decode($pedido['itens']));
                              echo "-=-=-=--=-=-=--=-=-=-=--=-=-=-=--=-=-=-=-=-=-=-=<br>";
                              foreach (json_decode($pedido['itens']) as $key) {
                                $total_product = 0;
                                $total_product = $total_product + $key->preco;
                                echo "<b>Produto: (QTD $key->quantidade)</b> <br>";
                                echo ($key->nome) . " - R$" . $key->preco;
                                echo "<br>";
                                foreach ($key->adicionais as $value) {
                                  echo "<br><b>" . get_categorias($value->de, $conn) . "<br></b>";
                                  echo ($value->nome) . " - R$" . $value->preco . "<br>";
                                  $vpreco = $value->preco * $value->quantidade;
                                  $total_product = $total_product + $vpreco;
                                }
                                foreach ($key->adicionais_gratis as $value) {
                                  echo "<br><b>" . get_categorias($value->de, $conn) . "<br></b>";
                                  echo ($value->nome) . " - R$" . $value->preco . "<br>";

                                  $vpreco = $value->preco * $value->quantidade;
                                  $total_product = $total_product + $vpreco;
                                }
                                $allprev = array();
                                foreach ($key->adicionais_prev as $value) {
                                  echo "<br><b>" . get_categorias($value->de, $conn) . "<br></b>";
                                  echo ($value->nome) . " - R$" . $value->preco . "<br>";
                                  array_push($allprev, $value->preco);
                                }

                                $total_product = $total_product + max($allprev);
                                $total_product = $total_product * $key->quantidade;
                                $total = $total + $total_product;
                                echo "<br>-=-=-=--=-=-=--=-=-=-=--=-=-=-=--=-=-=-=-=-=-=-=<br>";
                              }
                              echo "<br>";
                              echo "<h3><b>Observações</b></h3><br>";

                              if ($pedido['obs'] != 'RCM undefined') {
                                echo str_replace("RCM", " ", $pedido['obs']);
                              }else{
                                echo 'Sem observações';
                              }
                              

                              echo "<br>";
                              $frete = 0;
                              $frete = $frete + $pedido['frete'];
                              $frete = $frete + $res['taxa'];
                              $total = $total + $frete;





                              $cupom_s = $pedido['cupom'];


                              if ($cupom_s == "") {
                                echo "<br><b>Cupom de desconto: Sem cupom</b><br>";
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
                                echo "<br><b>Cupom de desconto: $cupom_s</b><br>";
                              }
                              $troco = $pedido['troco'];
                              if ($troco == "" or $troco == 0) {
                                echo "<br><b>TROCO PARA: Sem troco</b><br>";
                              } else {
                                echo "<br><b>TROCO PARA: R$$troco</b><br>";
                              }

                              echo "<b>FRETE: R$ {$frete}</b><br>";
                              echo "<h2><b>TOTAL: R$$total</b></h2><br>";
                              echo "<br><br><br>";





                              if ($pedido['pagamento'] == "Cartao de credito") {
                                if ($pedido['pay'] != 'Paga') {
                                  if ($pedido['pay'] == "") {
                                    echo "<br> <h4><b>Aviso</b></h4>";
                                    echo "<font color='red'>O pagamento está em: análise</font>";
                                  } else {
                                    echo "<br> <h4><b>Aviso</b></h4>";
                                    echo "<font color='red'>O pagamento está em: {$pedido['pay']}</font>";
                                  }
                                }
                              }
                              echo "<br>";
                              if ($pedido['status'] == 'not_pay') {
                                echo "<br> <h4><b>Ação</b></h4>";
                              ?>

                              <?php
                                echo "<br> <h4><b>Imprimir nota</b></h4>";
                                echo "<a class='btn btn-primary' target='_blank' href='painel_api/imprimir_cozinha.php?id={$pedido['id']}'>Interna</a>&nbsp;&nbsp;";
                                echo "<a class='btn btn-primary' target='_blank' href='painel_api/imprimir_entregador.php?id={$pedido['id']}'>Entregador</a><br>"; {
                                  echo "<br> <h4><b>Cancelar pedido</b></h4>";
                                  echo "<a class='btn btn-danger' href='painel_api/acao_cancel.php?id={$pedido['id']}'>Cancelar pedido</a>";
                                }
                              } elseif ($pedido['status'] == 'preparing') {
                                echo "<br> <h4><b>Ação</b></h4>";
                                echo "<br> <h4><b>Imprimir nota</b></h4>";
                                echo "<a class='btn btn-primary' target='_blank' href='painel_api/imprimir_cozinha.php?id={$pedido['id']}'>Interna</a>&nbsp;&nbsp;";
                                echo "<a class='btn btn-primary' target='_blank' href='painel_api/imprimir_entregador.php?id={$pedido['id']}'>Entregador</a><br>"; {
                                  echo "<br> <h4><b>Cancelar pedido</b></h4>";
                                  echo "<a class='btn btn-danger' href='painel_api/acao_cancel.php?id={$pedido['id']}'>Cancelar pedido</a>";
                                }
                              } elseif ($pedido['status'] == 'quit_sender') {
                                echo "<br> <h4><b>Ação</b></h4>";
                                echo "<br> <h4><b>Imprimir nota</b></h4>";
                                echo "<a class='btn btn-primary' target='_blank' href='painel_api/imprimir_cozinha.php?id={$pedido['id']}'>Interna</a>&nbsp;&nbsp;";
                                echo "<a class='btn btn-primary' target='_blank' href='painel_api/imprimir_entregador.php?id={$pedido['id']}'>Entregador</a><br>"; {
                                  echo "<br> <h4><b>Cancelar pedido</b></h4>";
                                  echo "<a class='btn btn-danger' href='painel_api/acao_cancel.php?id={$pedido['id']}'>Cancelar pedido</a>";
                                }
                              }


                              ?>



                            </div>
                          </div>

                        </div>
                      </div>

                    </div>
                    <!-- /.container-fluid -->

                  </div>
                  <!-- End of Main Content -->

                  <!-- Footer -->
                  <footer class="sticky-footer bg-white">
                    <div class="container my-auto">
                      <div class="copyright text-center my-auto">
                        <span><?php echo $sistema_nome ?>&copy;</span>
                      </div>
                    </div>
                  </footer>
                  <!-- End of Footer -->

                </div>
                <!-- End of Content Wrapper -->

              </div>
              <!-- End of Page Wrapper -->

              <!-- Scroll to Top Button-->
              <a class="scroll-to-top rounded" href="../#page-top">
                <i class="fas fa-angle-up"></i>
              </a>

              <!-- Logout Modal-->


              <!-- Bootstrap core JavaScript-->
              <script src="../vendor/jquery/jquery.min.js"></script>
              <script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

              <!-- Core plugin JavaScript-->
              <script src="../vendor/jquery-easing/jquery.easing.min.js"></script>

              <!-- Custom scripts for all pages-->
              <script src="../js/sb-admin-2.min.js"></script>

              <!-- Page level plugins -->
              <script src="../vendor/chart.js/Chart.min.js"></script>

              <!-- Page level custom scripts -->
              <script src="../js/demo/chart-area-demo.js"></script>
              <script src="../js/demo/chart-pie-demo.js"></script>

            </body>

            </html>
<?php }
        }
      }
    } else {
      header("Location: ../login/");
    }
  }
} ?>