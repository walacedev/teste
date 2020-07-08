<?php
header("access-control-allow-origin: https://sandbox.pagseguro.uol.com.br");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
require_once '../../api/connection.php';
session_start();

$user = $_SESSION['user'];
$senha = $_SESSION['senha'];

$sqlw = "SELECT * FROM funcionarios WHERE login = '{$user}' and senha = '{$senha}'";
$result = $conn->query($sqlw);
if ($result->num_rows > 0) {
    while ($usuario = $result->fetch_assoc()) {

        $sqlw = "SELECT * FROM horario WHERE id = '1'";
        $result = $conn->query($sqlw);
        if ($result->num_rows > 0) {
            while ($horario = $result->fetch_assoc()) {
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
                    <link href="../../vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
                    <link href="../../https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
                    <!-- Custom styles for this template-->
                    <link href="../../css/sb-admin-2.min.css" rel="stylesheet">
                </head>

                <body id="page-top">
                    <!-- Page Wrapper -->
                    <div id="wrapper">
                        <!-- Sidebar -->
                        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                            <!-- Sidebar - Brand -->
                            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="../../index.html">
                                <div class="sidebar-brand-icon rotate-n-15">
                                    <i class="fas cart"></i>
                                </div>
                                <div class="sidebar-brand-text mx-3"><?php echo $sistema_nome ?></div>
                            </a>

                            <!-- Divider -->
                            <hr class="sidebar-divider my-0">

                            <!-- Nav Item - Dashboard -->
                            <li class="nav-item">
                                <a class="nav-link" href="../painel.php">
                                    <i class="fas fa-fw fa-tachometer-alt"></i>
                                    <span>Dashboard</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="home.php">
                                    <span>Aplicativo</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="locais.php">
                                    <span>Locais</span></a>
                            </li>
                            <?php if ($usuario['cargo'] == "ADMIN") { ?>
                            <li class="nav-item">
                                <a class="nav-link" href="estados.php">
                                    <span>Estados</span></a>
                            </li>
                            <?php } ?>
                            <?php if ($usuario['cargo'] == "ADMIN") { ?>
                            <li class="nav-item">
                                <a class="nav-link" href="cidades.php">
                                    <span>Cidades</span></a>
                            </li>
                            <?php } ?>
                            <li class="nav-item">
                                <a class="nav-link" href="bairros.php">
                                    <span>Bairros</span></a>
                            </li>
                            <?php if ($usuario['cargo'] == "ADMIN") { ?>
                            <li class="nav-item">
                                <a class="nav-link" href="cardapio.php">
                                    <span>Categorias</span></a>
                            </li>
                            <?php } ?>
                            <?php if ($usuario['cargo'] != "ADMIN") { ?>
                            
                            
                            <li class="nav-item">
                                    <a class="nav-link" href="subcategorias.php">
                                        <span>Sub categorias</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="produtos.php">
                                        <span>Produtos</span></a>
                                </li>

                          
                            <?php } ?>
                            <li class="nav-item active">
                                <a class="nav-link" href="cupom.php">
                                    <span>Cupom de desconto</span></a>
                            </li>
                            <?php if ($usuario['cargo'] == "ADMIN") { ?>
                           <li class="nav-item">
                                <a class="nav-link" href="campanha.php">
                                    <span>Campanha</span></a>
                            </li>
                            <?php } ?>
                            <?php if ($usuario['cargo'] != "ADMIN") { ?>
                            <li class="nav-item">
                                <a class="nav-link" href="destaque.php">
                                    <span>Destaque</span></a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="horarios.php">
                                    <span>Horários e Opções</span></a>
                            </li>
                            <?php } ?>


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

                                <br><div class="container-fluid">
                                
                              
                                   
                                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                                        <h1 class="h3 mb-0 text-gray-800">Cupom de desconto</h1>
                                        <a target="_blank" href="mailto:suporte@tonascompras.com" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-bug fa-sm text-white-50"></i> Reportar erro</a>
                                    </div>


                                    <div class="row">
                                        <div style="width: 100%;">
                                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                                <thead>
                                                    <tr>
                                                   
                                                        <th>Nome</th>
                                                        <th>Tipo</th>
                                                        <th>Desconto</th>
                                                        <th>Ações</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <?php

                                                                    $sqlw = "SELECT * FROM cupom";

                                                                    $result = $conn->query($sqlw);
                                                                    if ($result->num_rows > 0) {
                                                                        while ($pedido = $result->fetch_assoc()) {

                                                                            ?>

                                                            <tr>
                                                              
                                                                <td><?php echo ($pedido['nome']) ?></td>
                                                                <td><?php echo ($pedido['tipo']) ?></td>
                                                                <td><?php echo ($pedido['desconto']) ?></td>
                                                                <td><a href="app/cupom_delete.php?id=<?php echo $pedido['id']; ?>">Excluir</a></td>
                                                            </tr>
                                                    <?php }
                                                                    } ?>


                                                </tbody>
                                            </table>



                                            <hr class="sidebar-divider d-none d-md-block">
                                            <h4>Criar novo</h4>
                                            <form action="app/cupom_create.php" method="post">
                                                <div class="form-groups">
                                                    <div>
                                                        <div class="form-group">
                                                            <label><b>Nome do cupom</b></label>
                                                            <input type="text" name="nome" class="form-control" placeholder="">
                                                        </div>
                                                        <div class="form-group">
                                                            <label><b>Valor mínimo</b></label>
                                                            <input type="text" onkeyup="k(this);" name="minimo" class="form-control" placeholder="">
                                                        </div>
                                                        <div class="form-group">
                                                            <select name="desconto" id="desconto" required>
                                                                <option selected disabled>Selecione um tipo</option>
                                                                <option value="FRETE_GRATIS">Frete grátis</option>
                                                                <option value="PORCENTAGEM">Desconto por %</option>
                                                                <option value="TOTAL">Desconto por R$</option>
                                                            </select>
                                                        </div>

                                                        <div id="FRETE_GRATIS" style="display: none;">
                                                            <p>
                                                                <font color="green">O cupom oferecerá frete grátis.</font>
                                                            </p>

                                                        </div>

                                                        <div id="TOTAL" style="display: none;">
                                                            <p>
                                                                <font color="green">O cupom oferecerá desconto no valor total.</font>
                                                            </p>
                                                            <div class="form-group">
                                                                <label><b>Em R$</b></label>
                                                                <input type="text" onkeyup="k(this);" name="total" class="form-control" placeholder="">
                                                            </div>
                                                        </div>

                                                        <div id="PORCENTAGEM" style="display: none;">
                                                            <p>
                                                                <font color="green">O cupom oferecerá desconto no valor total.</font>
                                                            </p>
                                                            <div class="form-group">
                                                                <label><b>Em %</b></label>
                                                                <input type="number" name="porcentagem" class="form-control" placeholder="">
                                                            </div>
                                                        </div>
                                                        <script>
                                                            function k(i) {
                                                                var v = i.value.replace(/\D/g, '');
                                                                v = (v / 100).toFixed(2) + '';
                                                                v = v.replace(".", ".");
                                                                v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
                                                                v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
                                                                i.value = v;
                                                            }
                                                        </script>


                                                    </div>
                                                    <button class="btn btn-success">Criar</button>
                                            </form>


                                            <script>
                                                $("#desconto").change(function(e) {
                                                    if ($("#desconto").val() == "FRETE_GRATIS") {
                                                        $('#FRETE_GRATIS').show();
                                                        $('#PORCENTAGEM').hide();
                                                        $('#TOTAL').hide();
                                                    }
                                                    if ($("#desconto").val() == "PORCENTAGEM") {
                                                        $('#FRETE_GRATIS').hide();
                                                        $('#PORCENTAGEM').show();
                                                        $('#TOTAL').hide();
                                                    }
                                                    if ($("#desconto").val() == "TOTAL") {
                                                        $('#FRETE_GRATIS').hide();
                                                        $('#PORCENTAGEM').hide();
                                                        $('#TOTAL').show();
                                                    }
                                                })
                                            </script>
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
                    <a class="scroll-to-top rounded" href="../../#page-top">
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
                                    <a class="btn btn-primary" href="../../login.html">Logout</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Bootstrap core JavaScript-->
                    <script src="../../vendor/jquery/jquery.min.js"></script>
                    <script src="../../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

                    <!-- Core plugin JavaScript-->
                    <script src="../../vendor/jquery-easing/jquery.easing.min.js"></script>

                    <!-- Custom scripts for all pages-->
                    <script src="../../js/sb-admin-2.min.js"></script>

                    <!-- Page level plugins -->
                    <script src="../../vendor/chart.js/Chart.min.js"></script>

                    <!-- Page level custom scripts -->
                    <script src="../../js/demo/chart-area-demo.js"></script>
                    <script src="../../js/demo/chart-pie-demo.js"></script>

                </body>

                </html>
<?php }
        }
    }
} else {
    header("Location: ../../login/");
} ?>