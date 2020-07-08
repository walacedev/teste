<?php
header("access-control-allow-origin: https://sandbox.pagseguro.uol.com.br");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
require_once '../../api/connection.php';
session_start();

$user = $_SESSION['user'];
$senha = $_SESSION['senha'];
$cardapiolist = array();
$sqlw = "SELECT * FROM funcionarios WHERE login = '{$user}' and senha = '{$senha}'";
$result = $conn->query($sqlw);
if ($result->num_rows > 0) {
    while ($usuario = $result->fetch_assoc()) {

        $sqlw = "SELECT * FROM produtos WHERE restaurante = '{$usuario['restaurante']}' order by preco desc";
        $result = $conn->query($sqlw);
        if ($result->num_rows > 0) {
            while ($pedido = $result->fetch_assoc()) {
                array_push($cardapiolist, $pedido['de']);
            }
        }

        $sqlw = "SELECT * FROM categorias WHERE id = '{$_GET['id']}'";
        $resulta = $conn->query($sqlw);
        if ($resulta->num_rows > 0) {
            while ($cat = $resulta->fetch_assoc()) {
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
                                    <a class="nav-link" href="mesas.php">
                                        <span>Mesas</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="subcategorias.php">
                                        <span>Sub categorias</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="produtos.php">
                                        <span>Produtos</span></a>
                                </li>

                                <li class="nav-item active">
                                    <a class="nav-link" href="complementos.php">
                                        <span>Complementos</span></a>
                                </li>
                            <?php } ?>
                            <?php if ($usuario['cargo'] == "ADMIN") { ?>
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

                                <br>
                                <div class="container-fluid">



                                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                                        <h1 class="h3 mb-0 text-gray-800">Complementos</h1>
                                        <a target="_blank" href="mailto:suporte@tonascompras.com" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-bug fa-sm text-white-50"></i> Reportar erro</a>
                                    </div>


                                    <div class="row">
                                        <div style="width: 100%;">
                                            <div class="card shadow h-100 py-2" style="padding-left: 10px;padding-right: 10px;">
                                                <p><b>Categorias de complementos</b></p>

                                                <hr class="sidebar-divider d-none d-md-block">
                                                <h4>Editar</h4>
                                                <form action="app/editar_categorias.php?id=<?php echo $cat['id'] ?>" method="post">
                                                    <div class="form-groups">
                                                        <div>
                                                            <div class="form-group">
                                                                <label><b>Nome</b></label>
                                                                <input type="text" required value='<?php echo $cat['nome'] ?>' name="nome" class="form-control" placeholder="Borda da pizza">
                                                            </div>
                                                            <div>

                                                                <label><b>Categoria de complemento dos produtos</b></label>
                                                                <?php

                                                                $sqlwa = "SELECT * FROM cardapio";
                                                                $arrayprodutos = json_decode($cat['de']);
                                                                $resulta = $conn->query($sqlwa);
                                                                if ($resulta->num_rows > 0) {
                                                                    while ($cardapio = $resulta->fetch_assoc()) {
                                                                        if (in_array($cardapio['id'], $cardapiolist)) {

                                                                            echo '<br><button type="button" class="btn btn-success" data-toggle="collapse" data-target="#demo' . $cardapio['id'] . '">' . $cardapio['nome'] . '</button>';

                                                                            $sqlw = "SELECT * FROM produtos where de = {$cardapio['id']} and restaurante = {$usuario['restaurante']}";
                                                                            $result = $conn->query($sqlw);
                                                                            if ($result->num_rows > 0) {

                                                                                while ($produto = $result->fetch_assoc()) {
                                                                                    if (in_array($produto['id'], $arrayprodutos)) {
                                                                ?>


                                                                                        <div id="demo<?php echo $cardapio['id'] ?>" class="collapse">
                                                                                            <div class="custom-control custom-checkbox">
                                                                                                <input type="checkbox" name="de[]" checked class="custom-control-input" id="customCheck<?php echo $produto['id'] ?>" value="<?php echo $produto['id'] ?>">
                                                                                                <label class="custom-control-label" for="customCheck<?php echo $produto['id'] ?>"> <?php echo ($produto['nome']) ?></label>
                                                                                            </div>
                                                                                        </div>
                                                                                    <?php } else { ?>
                                                                                        <div id="demo<?php echo $cardapio['id'] ?>" class="collapse">
                                                                                            <div class="custom-control custom-checkbox">
                                                                                                <input type="checkbox" name="de[]" class="custom-control-input" id="customCheck<?php echo $produto['id'] ?>" value="<?php echo $produto['id'] ?>">
                                                                                                <label class="custom-control-label" for="customCheck<?php echo $produto['id'] ?>"> <?php echo ($produto['nome']) ?></label>
                                                                                            </div>
                                                                                        </div>



                                                                <?php }
                                                                                }
                                                                            }
                                                                            echo "<br>";
                                                                        }
                                                                    }
                                                                } ?>

                                                            </div>
                                                            <br>
                                                            <div class="form-group">
                                                                <label><b>Mínimo</b></label>
                                                                <input required value='<?php echo $cat['minimo'] ?>' type="number" name="minimo" class="form-control"  min="1">
                                                            </div>
                                                            <div class="form-group">
                                                                <label><b>Escolher até</b></label>
                                                                <input required value='<?php echo $cat['quantidade'] ?>' type="number" name="quantidade" class="form-control"  min="1">
                                                            </div>
                                                            <div class="form-group">
                                                                <label><b>Quantidade de itens gratuitos</b></label>
                                                                <input value='<?php echo $cat['gratuito'] ?>' type="number" name="gratuito" class="form-control">
                                                            </div>
                                                            <div class="form-group">
                                                                <label><b>Prevalecer o preço do maior?</b></label>

                                                                <div class="custom-control custom-checkbox">
                                                                    <input type="radio" name="prevalecer" <?php if ($cat['prevalecer'] == "Sim") {
                                                                        echo "checked";
                                                                    } ?> class="custom-control-input" id="sim" value="Sim">
                                                                    <label class="custom-control-label" for="sim">Sim</label>
                                                                </div>
                                                                <div class="custom-control custom-checkbox">
                                                                    <input type="radio" name="prevalecer" class="custom-control-input"  <?php if ($cat['prevalecer'] == "Nao" or $cat['prevalecer'] == null) {
                                                                        echo "checked";
                                                                    } ?>   id="nao" value="Nao">
                                                                    <label class="custom-control-label" for="nao">Não</label>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <br>
                                                        <button class="btn btn-success">Editar</button>
                                                </form>

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