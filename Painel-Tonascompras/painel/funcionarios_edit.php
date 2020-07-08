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

        $sqlw = "SELECT * FROM funcionarios WHERE id = '{$_GET['id']}'";
        $result = $conn->query($sqlw);
        if ($result->num_rows > 0) {
            while ($fun = $result->fetch_assoc()) {
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

                    <li class="nav-item">
            <a class="nav-link" href="aplicativo/relatorios/produtos.php">
              <i class="fas fa-fw fa-book"></i>
              <span>Relatórios</span></a>
          </li>

                    <li class="nav-item active">
                        <a class="nav-link" href="funcionarios.php">
                            <i class="fas fa-fw fa-users"></i>
                            <span>Funcionários</span></a>
                    </li>

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
                   
                                

                            <!-- Content Row -->

                            <div class="row">
                                <div style="width: 100%;">
                                    <div class="card shadow h-100 py-2" style="padding-left: 10px;padding-right: 10px;">
                                        <h4>Funcionário <?php echo $fun['nome'] ?></h4>
                                        <br>
                                        <form action="painel_api/funcionario_edit_api.php?id=<?php echo $fun['id'] ?>" method="post">
                                            <div class="form-groups">
                                                <div>
                                                <input type="text" name="restaurante" class="form-control" value="<?php echo $usuario['restaurante'] ?>" style="display: none">
                                                    <div class="form-group">
                                                        <label><b>Nome</b></label>
                                                        <input type="text" value="<?php echo $fun['nome'] ?>" name="nome" class="form-control" placeholder="João da Silva">
                                                    </div>
                                                    <div class="form-group">
                                                        <label><b>Usuário</b></label>
                                                        <input type="text" value="<?php echo $fun['login'] ?>" name="login" class="form-control" placeholder="username">
                                                    </div>
                                                    <div class="form-group">
                                                        <label><b>Senha</b></label>
                                                        <input type="text" value="<?php echo $fun['senha'] ?>" name="senha" class="form-control">
                                                    </div>
                                                </div>
                                                <button class="btn btn-success">Editar</button>
                                        </form>



                                    </div>
                                </div>
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
        <?php }}}
} else {
    header("Location: ../login/");
} ?>