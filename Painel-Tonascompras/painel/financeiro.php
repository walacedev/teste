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
          <li class="nav-item">
            <a class="nav-link" href="painel.php">
              <i class="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span></a>
          </li>

          <li class="nav-item active">
            <a class="nav-link" href="financeiro.php">
              <i class="fas fa-fw fa-cash-register"></i>
              <span>Financeiro</span></a>
          </li>

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
                <a target="_blank" href="mailto:suporte@tonascompras.com" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-bug fa-sm text-white-50"></i> Reportar erro</a>
              </div>

              <!-- Content Row -->
              <div class="row">

                <div class="col-xl-3 col-md-6 mb-4">
                  <div class="card border-left-success shadow h-100 py-2">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                          <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Pedidos pagos</div>
                          <div class="h5 mb-0 font-weight-bold text-gray-800">R$

                            <?php
                                $total = 0;
                                $sqlw = "SELECT * FROM pedidos WHERE status = 'success'";
                                $result = $conn->query($sqlw);
                                if ($result->num_rows > 0) {
                                  while ($pedido = $result->fetch_assoc()) {
                                    $total_pedido = 0;
                                    //print_r(json_decode($pedido['itens']));
                                    foreach (json_decode($pedido['itens']) as $key) {
                                      $total_item = 0;
                                      $total_item = $total_item + $key->preco;
                                      foreach ($key->adicionais as $value) {
                                        $total_item = $total_item + $value->preco;
                                      }
                                      $total_item = $total_item * $key->quantidade;
                                      $total_pedido = $total_pedido + $total_item;
                                    }
                                    $total = $total + $total_pedido;
                                    $total = $total + $pedido['frete'];

                                    $cupom_s = $pedido['cupom'];


                                    if ($cupom_s == "") { } else {
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
                                  }

                                  echo $total;
                                }

                                ?>
                          </div>
                        </div>
                        <div class="col-auto">
                          <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



                <?php
                    $preparar = 0;
                    $entregar = 0;
                    $finalizar = 0;
                    if ($_SESSION['local'] == "ALL") {
                      $sqlw = "SELECT * FROM pedidos";
                    } else {
                      $sqlw = "SELECT * FROM pedidos WHERE local = '{$_SESSION['local']}'";
                    }
                    $result = $conn->query($sqlw);
                    if ($result->num_rows > 0) {
                      while ($pedido = $result->fetch_assoc()) {
                        if ($pedido['status'] == 'not_pay') {
                          $preparar = $preparar + 1;
                        } elseif ($pedido['status'] == 'preparing') {
                          $entregar = $entregar + 1;
                        } elseif ($pedido['status'] == 'quit_sender') {
                          $finalizar = $finalizar + 1;
                        }
                      }
                    }

                    ?>

                <!-- Earnings (Monthly) Card Example -->
                <div class="col-xl-3 col-md-6 mb-4">
                  <div class="card border-left-danger shadow h-100 py-2">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                          <div class="text-xs font-weight-bold text-danger text-uppercase mb-1">Pedidos para preparar</div>
                          <div class="h5 mb-0 font-weight-bold text-gray-800">
                            <?php echo $preparar; ?>
                          </div>
                        </div>
                        <div class="col-auto">
                          <i class="fas fa-plus-square fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Earnings (Monthly) Card Example -->
                <div class="col-xl-3 col-md-6 mb-4">
                  <div class="card border-left-info shadow h-100 py-2">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                          <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Aguardando entrega</div>
                          <div class="row no-gutters align-items-center">
                            <div class="col-auto">
                              <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800"><?php echo $entregar; ?></div>
                            </div>
                          </div>
                        </div>
                        <div class="col-auto">
                          <i class="fas fa-spinner fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Pending Requests Card Example -->
                <div class="col-xl-3 col-md-6 mb-4">
                  <div class="card border-left-warning shadow h-100 py-2">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                          <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Pedidos a caminho</div>
                          <div class="h5 mb-0 font-weight-bold text-gray-800"><?php echo $finalizar; ?></div>
                        </div>
                        <div class="col-auto">
                          <i class="fas fa-truck fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Content Row -->
              <div class="row">
                <?php
                    $perm = json_decode($usuario['perms']);
                    if (!in_array("FINANCEIRO", $perm)) {
                      echo '<div class="col-lg-6 mb-4" style="width: 100%">
                  <div class="card bg-danger text-white shadow">
                    <div class="card-body">
                    Você não tem permissão para acessar essa pagina.
                    </div>
                  </div>
                </div>';
                      return;
                    }
                    ?>
                <!-- Area Chart -->
                <div class="col-xl-8 col-lg-7">
                  <div class="card shadow mb-4">
                    <div class="card-header py-3">
                      <h6 class="m-0 font-weight-bold text-primary">Comparação</h6>
                    </div>
                    <div class="card-body">
                      <div class="chart-bar">




                        <canvas id="myBarChart"></canvas>
                      </div>
                      <hr>
                    </div>
                  </div>
                </div>

                <!-- Pie Chart -->
                <div class="col-xl-4 col-lg-5">
                  <div class="card shadow mb-4">
                    <!-- Card Header - Dropdown -->
                    <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 class="m-0 font-weight-bold text-primary">Ganhos</h6>
                      <div class="dropdown no-arrow">
                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                        </a>
                      </div>
                    </div>
                    <!-- Card Body -->
                    <div class="card-body">
                      <div class="chart-pie pt-4 pb-2">

                        <canvas id="myPieChart"></canvas>
                      </div>
                      <div class="mt-4 text-center small">
                        <span class="mr-2">
                          <i class="fas fa-circle text-primary"></i> Cartão de crédito
                        </span>
                        <span class="mr-2">
                          <i class="fas fa-circle text-success"></i> Entregues
                        </span>
                        <span class="mr-2">
                          <i class="fas fa-circle text-info"></i> Buscados
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">

                <div class="col-xl-8 col-lg-7">
                  <div class="card shadow mb-4">
                    <div class="card-header py-3">
                      <h6 class="m-0 font-weight-bold text-primary">Cartão de crédito</h6>
                    </div>
                    <div class="card-body">

                      <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                          <tr>
                            <th>#REF</th>
                            <th>Status do pedido</th>
                            <th>Status do pagamento</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <?php
                              $total = 0;

                              if ($_SESSION['local'] == "ALL") {
                                $sqlw = "SELECT * FROM pedidos WHERE pagamento = 'Cartao de credito' and status = 'success'";
                              } else {
                                $sqlw = "SELECT * FROM pedidos WHERE pagamento = 'Cartao de credito' and status = 'success' and local = '{$_SESSION['local']}'";
                              }
                              
                              $result = $conn->query($sqlw);
                              if ($result->num_rows > 0) {
                                while ($pedido = $result->fetch_assoc()) { {
                                    ?>

                                <tr>
                                <td><a href="acao.php?id=<?php echo $pedido['id']; ?>">#<?php echo $pedido['id']; ?>00</a></td>
                                  <td>
                                    <?php
                                              echo "Pedido entregue";

                                              $total = 0;
                                              //print_r(json_decode($pedido['itens']));
                                              foreach (json_decode($pedido['itens']) as $key) {
                                                $total_product = 0;
                                                $total_product = $total_product + $key->preco;
                                                foreach ($key->adicionais as $value) {
                                                  $total_product = $total_product + $value->preco;
                                                }
                                                $total_product = $total_product * $key->quantidade;
                                                $total = $total + $total_product;
                                              }
                                              $total = $total + $pedido['frete'];
                                              $cupom_s = $pedido['cupom'];


                                              if ($cupom_s == "") { } else {
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
                                              $total_cartao = $total;
                                              ?>
                                  </td>
                                  <td><?php

                                                if ($pedido['pay'] == "") {
                                                  echo "Aguardando análise";
                                                } else {
                                                  echo $pedido['pay'];
                                                }

                                                ?>


                                  </td>
                                  <td>R$<?php echo $total; ?></td>
                                </tr>

                          <?php }
                                }
                              } ?>

                        </tbody>
                      </table>

                    </div>
                  </div>
                </div>

                <div class="col-xl-8 col-lg-7">
                  <div class="card shadow mb-4">
                    <div class="card-header py-3">
                      <h6 class="m-0 font-weight-bold text-primary">Buscar no local</h6>
                    </div>
                    <div class="card-body">
                      <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                          <tr>
                            <th>#ID</th>
                            <th>Status do pedido</th>
                            <th>Status do pagamento</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <?php
                              $total = 0;

                              if ($_SESSION['local'] == "ALL") {
                                $sqlw = "SELECT * FROM pedidos WHERE pagamento = 'Buscar no local' and status = 'success'";
                              } else {
                                $sqlw = "SELECT * FROM pedidos WHERE pagamento = 'Buscar no local' and status = 'success' and local = '{$_SESSION['local']}'";
                              }
                              
                              $result = $conn->query($sqlw);
                              if ($result->num_rows > 0) {
                                while ($pedido = $result->fetch_assoc()) { {
                                    ?>

                                <tr>
                                <td><a href="acao.php?id=<?php echo $pedido['id']; ?>">#<?php echo $pedido['id']; ?>00</a></td>
                                  <td>
                                    <?php
                                              echo "Pedido entregue";

                                              $total = 0;
                                              //print_r(json_decode($pedido['itens']));
                                              foreach (json_decode($pedido['itens']) as $key) {
                                                $total_product = 0;
                                                $total_product = $total_product + $key->preco;
                                                foreach ($key->adicionais as $value) {
                                                  $total_product = $total_product + $value->preco;
                                                }
                                                $total_product = $total_product * $key->quantidade;
                                                $total = $total + $total_product;
                                              }
                                              $total = $total + $pedido['frete'];
                                              $cupom_s = $pedido['cupom'];


                                              if ($cupom_s == "") { } else {
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
                                              $total_buscar = $total;
                                              ?>



                                  </td>
                                  <td>Pagamento feito pessoalmente</td>
                                  <td>R$<?php echo $total; ?></td>
                                </tr>

                          <?php }
                                }
                              } ?>

                        </tbody>
                      </table>

                    </div>
                  </div>
                </div>

                <div class="col-xl-8 col-lg-7">
                  <div class="card shadow mb-4">
                    <div class="card-header py-3">
                      <h6 class="m-0 font-weight-bold text-primary">Receber em casa</h6>
                    </div>
                    <div class="card-body">
                      <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                          <tr>
                            <th>#ID</th>
                            <th>Status do pedido</th>
                            <th>Status do pagamento</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <?php
                              $total = 0;
                              if ($_SESSION['local'] == "ALL") {
                                $sqlw = "SELECT * FROM pedidos WHERE pagamento = 'Receber em casa' and status = 'success'";
                              } else {
                                $sqlw = "SELECT * FROM pedidos WHERE pagamento = 'Receber em casa' and status = 'success' and local = '{$_SESSION['local']}'";
                              }

                              
                              $result = $conn->query($sqlw);
                              if ($result->num_rows > 0) {
                                while ($pedido = $result->fetch_assoc()) { {
                                    ?>

                                <tr>
                                  <td><a href="acao.php?id=<?php echo $pedido['id']; ?>">#<?php echo $pedido['id']; ?>00</a></td>
                                  <td>
                                    <?php
                                              echo "Pedido entregue";

                                              $total = 0;
                                              //print_r(json_decode($pedido['itens']));
                                              foreach (json_decode($pedido['itens']) as $key) {
                                                $total_product = 0;
                                                $total_product = $total_product + $key->preco;
                                                foreach ($key->adicionais as $value) {
                                                  $total_product = $total_product + $value->preco;
                                                }
                                                $total_product = $total_product * $key->quantidade;
                                                $total = $total + $total_product;
                                              }
                                              $total = $total + $pedido['frete'];
                                              $cupom_s = $pedido['cupom'];


                                              if ($cupom_s == "") { } else {
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
                                              $total_entrega = $total;
                                              ?>

                                  </td>
                                  <td>Pagamento feito pessoalmente</td>
                                  <td>R$<?php echo $total; ?></td>
                                </tr>

                          <?php }
                                }
                              } ?>

                        </tbody>
                      </table>

                    </div>
                  </div>
                </div>



                <input id="cartao" style="display: none;" value="<?php echo $total_cartao ?>" />
                <input id="buscar" style="display: none;" value="<?php echo $total_buscar ?>" />
                <input id="entrega" style="display: none;" value="<?php echo $total_entrega ?>" />

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
      <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
              <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
            <div class="modal-footer">
              <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
              <a class="btn btn-primary" href="../login.html">Logout</a>
            </div>
          </div>
        </div>
      </div>

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
      <script src="../js/demo/chart-bar-demo.js"></script>
      <script src="../js/demo/chart-pie-demo.js"></script>

    </body>

    </html>
<?php }
} else {
  header("Location: ../login/");
} ?>