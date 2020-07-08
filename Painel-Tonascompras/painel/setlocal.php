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

    if ($usuario['cargo'] == "ADMIN") {


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

      <body id="page-top" style="background-image: url(../img/background.png)">

        <!-- Page Wrapper -->
        <div id="wrapper">

          <!-- Sidebar -->
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
                  <h1 class="h3 mb-0 text-gray-800">Selecione o local</h1>
                  <a target="_blank" href="mailto:suporte@tonascompras.com" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-bug fa-sm text-white-50"></i> Reportar erro</a>
                </div>

                <!-- Content Row -->
                <div class="row">



                  <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-success shadow h-100 py-2">
                      <div class="card-body">
                        <div class="row no-gutters align-items-center">
                          <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                              Gerencial
                            </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800"><a href="setlocal_api.php?id=Gerencial">
                                Clique para acessar</a>


                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <?php

                  $sqlw = "SELECT * FROM restaurantes order by estado desc";
                  $result = $conn->query($sqlw);
                  if ($result->num_rows > 0) {
                    while ($local = $result->fetch_assoc()) {
                  ?>
                      <!-- Earnings (Monthly) Card Example -->
                      <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-success shadow h-100 py-2">
                          <div class="card-body">
                            <div class="row no-gutters align-items-center">
                              <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-success text-uppercase mb-1"><?php
                                                                                                        $sqlw = "SELECT * FROM cidades where id = " . $local['cidade'];
                                                                                                        $resulta = $conn->query($sqlw);
                                                                                                        if ($resulta->num_rows > 0) {
                                                                                                          while ($cd = $resulta->fetch_assoc()) {
                                                                                                            echo $cd['nome'];
                                                                                                          }
                                                                                                        }
                                                                                                        ?></div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800"><a href="setlocal_api.php?id=<?php echo $local['id'] ?>">
                                    <?php echo $local['nome'] ?></a>
                                    <br>
                                  <a href="local_status.php?id=<?php echo $local['id'] ?>"><?php

                                      if ($local['status'] != "ABERTO") {
                                        echo "<font color='green'>Abrir local</font>";
                                      } else {
                                        echo "<font color='red'>Fechar local</font>";
                                      }

                                      ?></a>
                                  <p>
                                    <a href="desativar.php?id=<?php echo $local['id'] ?>">
                                      <font size='3px'><?php

                                                        if ($local['estado'] != "ATIVADO") {
                                                          echo "<font color='green'>Ativar local</font>";
                                                        } else {
                                                          echo "<font color='red'>Desativar local</font>";
                                                        }

                                                        ?></font>
                                    </a>
                                  </p>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  <?php }
                  } ?>
                </div>

                <!-- Content Row -->


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
            <script src="../js/demo/chart-area-demo.js"></script>
            <script src="../js/demo/chart-pie-demo.js"></script>

      </body>

      </html>
<?php }
  }
} else {
  header("Location: ../login/");
} ?>