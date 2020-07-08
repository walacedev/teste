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

        $sqlw = "SELECT * FROM horario WHERE restaurante = '{$usuario['restaurante']}'";
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

                          
                            
                            <li class="nav-item">
                                <a class="nav-link" href="cupom.php">
                                    <span>Cupom de desconto</span></a>
                            </li>
                       
                            <?php } ?>
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

                            <li class="nav-item active">
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
                                        <h1 class="h3 mb-0 text-gray-800">Horários de funcionamento</h1>
                                        <a target="_blank" href="mailto:suporte@tonascompras.com" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-bug fa-sm text-white-50"></i> Reportar erro</a>
                                    </div>


                                    <div class="row">
                                        <div>
                                            <form action="app/atualizar_horarios.php?id=<?php echo $usuario['restaurante'] ?>" method="post">

                                                <div style="padding-left: 10px;">

                                                    <hr class="sidebar-divider d-none d-md-block">
                                                    <div class="form-groups">
                                                        <div class='form-group'>
                                                            <div class="form-row">
                                                                <div class="form-group col-md-30">
                                                                    <label for="inputEmail4">Segunda-feira de</label>
                                                                    <?php $segunda = json_decode($horario['segunda']);
                                                                                    ?>
                                                                    <input type="time" class="form-control" name="segunda-de" placeholder="DE" min="00:00" max="24:00" value="<?php echo $segunda->de ?>">
                                                                </div>
                                                                <div class="form-group col-md-15">
                                                                    <label for="inputPassword4">Até</label>
                                                                    <input type="time" class="form-control" name="segunda-ate" placeholder="ATÉ" min="00:00" max="24:00" value="<?php echo $segunda->ate ?>">
                                                                </div>

                                                            </div>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" name="segunda" class="custom-control-input" id="customChecksegunda" <?php if ($horario['segunda'] != 'NA') {
                                                                                                                                                                                echo "checked";
                                                                                                                                                                            } ?>>
                                                                <label class="custom-control-label" for="customChecksegunda">Funciona segunda-feira?</label>
                                                            </div>
                                                        </div>
                                                        <hr class="sidebar-divider d-none d-md-block">
                                                        <div class='form-group' class='col-md-15'>
                                                            <div class="form-row">
                                                                <div class="form-group col-md-15">
                                                                    <label for="inputEmail4">Terça-feira de</label>
                                                                    <?php $terca = json_decode($horario['terca']);

                                                                                    ?>
                                                                    <input type="time" class="form-control" name="terca-de" placeholder="DE" min="00:00" max="24:00" value="<?php echo $terca->de ?>">
                                                                </div>
                                                                <div class="form-group col-md-15">
                                                                    <label for="inputPassword4">Até</label>
                                                                    <input type="time" class="form-control" name="terca-ate" placeholder="ATÉ" min="00:00" max="24:00" value="<?php echo $terca->ate ?>">
                                                                </div>

                                                            </div>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" name="terca" class="custom-control-input" id="customCheck1terca" <?php if ($horario['terca'] != 'NA') {
                                                                                                                                                                            echo "checked";
                                                                                                                                                                        } ?>>
                                                                <label class="custom-control-label" for="customCheck1terca">Funciona terça-feira?</label>
                                                            </div>
                                                        </div>
                                                        <hr class="sidebar-divider d-none d-md-block">
                                                        <div class='form-group' class='col-md-15'>
                                                            <div class="form-row">
                                                                <div class="form-group col-md-15">
                                                                    <label for="inputEmail4">Quarta-feira de</label>
                                                                    <?php $quarta = json_decode($horario['quarta']);

                                                                                    ?>
                                                                    <input type="time" class="form-control" name="quarta-de" placeholder="DE" min="00:00" max="24:00" value="<?php echo $quarta->de ?>">
                                                                </div>
                                                                <div class="form-group col-md-15">
                                                                    <label for="inputPassword4">Até</label>
                                                                    <input type="time" class="form-control" name="quarta-ate" placeholder="ATÉ" min="00:00" max="24:00" value="<?php echo $quarta->ate ?>">
                                                                </div>

                                                            </div>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" name="quarta" class="custom-control-input" id="customCheck1quarta" <?php if ($horario['quarta'] != 'NA') {
                                                                                                                                                                                echo "checked";
                                                                                                                                                                            } ?>>
                                                                <label class="custom-control-label" for="customCheck1quarta">Funciona quarta-feira?</label>
                                                            </div>
                                                        </div>
                                                        <hr class="sidebar-divider d-none d-md-block">
                                                        <div class='form-group' class='col-md-15'>
                                                            <div class="form-row">
                                                                <div class="form-group col-md-15">
                                                                    <label for="inputEmail4">Quinta-feira de</label>
                                                                    <?php $quinta = json_decode($horario['quinta']);

                                                                                    ?>
                                                                    <input type="time" class="form-control" name="quinta-de" placeholder="DE" min="00:00" max="24:00" value="<?php echo $quinta->de ?>">
                                                                </div>
                                                                <div class="form-group col-md-15">
                                                                    <label for="inputPassword4">Até</label>
                                                                    <input type="time" class="form-control" name="quinta-ate" placeholder="ATÉ" min="00:00" max="24:00" value="<?php echo $quinta->ate ?>">
                                                                </div>

                                                            </div>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" name="quinta" class="custom-control-input" id="customCheck1quinta" <?php if ($horario['quinta'] != 'NA') {
                                                                                                                                                                                echo "checked";
                                                                                                                                                                            } ?>>
                                                                <label class="custom-control-label" for="customCheck1quinta">Funciona quinta-feira?</label>
                                                            </div>
                                                        </div>
                                                        <hr class="sidebar-divider d-none d-md-block">
                                                        <div class='form-group' class='col-md-15'>
                                                            <div class="form-row">
                                                                <div class="form-group col-md-15">
                                                                    <label for="inputEmail4">Sexta-feira de</label>
                                                                    <?php $sexta = json_decode($horario['sexta']);

                                                                                    ?>
                                                                    <input type="time" class="form-control" name="sexta-de" placeholder="DE" min="00:00" max="24:00" value="<?php echo $sexta->de ?>">
                                                                </div>
                                                                <div class="form-group col-md-15">
                                                                    <label for="inputPassword4">Até</label>
                                                                    <input type="time" class="form-control" name="sexta-ate" placeholder="ATÉ" min="00:00" max="24:00" value="<?php echo $sexta->ate ?>">
                                                                </div>

                                                            </div>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" name="sexta" class="custom-control-input" id="customCheck1sexta" <?php if ($horario['sexta'] != 'NA') {
                                                                                                                                                                            echo "checked";
                                                                                                                                                                        } ?>>
                                                                <label class="custom-control-label" for="customCheck1sexta">Funciona sexta-feira?</label>
                                                            </div>
                                                        </div>
                                                        <hr class="sidebar-divider d-none d-md-block">
                                                        <div class='form-group' class='col-md-15'>
                                                            <div class="form-row">
                                                                <div class="form-group col-md-15">
                                                                    <label for="inputEmail4">Sábado de</label>
                                                                    <?php $sabado = json_decode($horario['sabado']);

                                                                                    ?>
                                                                    <input type="time" class="form-control" name="sabado-de" placeholder="DE" min="00:00" max="24:00" value="<?php echo $sabado->de ?>">
                                                                </div>
                                                                <div class="form-group col-md-15">
                                                                    <label for="inputPassword4">Até</label>
                                                                    <input type="time" class="form-control" name="sabado-ate" placeholder="ATÉ" min="00:00" max="24:00" value="<?php echo $sabado->ate ?>">
                                                                </div>

                                                            </div>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" name="sabado" class="custom-control-input" id="customCheck1sabado" <?php if ($horario['sabado'] != 'NA') {
                                                                                                                                                                                echo "checked";
                                                                                                                                                                            } ?>>
                                                                <label class="custom-control-label" for="customCheck1sabado">Funciona sábado?</label>
                                                            </div>
                                                        </div>
                                                        <hr class="sidebar-divider d-none d-md-block">
                                                        <div class='form-group' class='col-md-15'>
                                                            <div class="form-row">
                                                                <div class="form-group col-md-15">
                                                                    <label for="inputEmail4">Domingo de</label>
                                                                    <?php $domingo = json_decode($horario['domingo']);

                                                                                    ?>
                                                                    <input type="time" class="form-control" name="domingo-de" placeholder="DE" min="00:00" max="24:00" value="<?php echo $domingo->de ?>">
                                                                </div>
                                                                <div class="form-group col-md-15">
                                                                    <label for="inputPassword4">Até</label>
                                                                    <input type="time" class="form-control" name="domingo-ate" placeholder="ATÉ" min="00:00" max="24:00" value="<?php echo $domingo->ate ?>">
                                                                </div>

                                                            </div>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" name="domingo" class="custom-control-input" id="customCheck1domingo" <?php if ($horario['domingo'] != 'NA') {
                                                                                                                                                                                echo "checked";
                                                                                                                                                                            } ?>>
                                                                <label class="custom-control-label" for="customCheck1domingo">Funciona domingo?</label>
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                                    <label><b>Telefone para cancelamento</b></label>
                                                                    <input type="number" name="telefone" value="<?php echo $horario['telefone'] ?>" class="form-control" placeholder="Apenas numeros">
                                                                </div>
                                                        <button class="btn btn-success">Atualizar</button>

                                                    </div>
                                                </div>
                                            </form>
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
} ?>