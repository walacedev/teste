<?php error_reporting(0);
header("access-control-allow-origin: https://sandbox.pagseguro.uol.com.br");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
require_once '../../../api/connection.php';
session_start();

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

$user = $_SESSION['user'];
$senha = $_SESSION['senha'];

$sqlw = "SELECT * FROM funcionarios WHERE login = '{$user}' and senha = '{$senha}'";
$result = $conn->query($sqlw);
if ($result->num_rows > 0) {
    while ($usuario = $result->fetch_assoc()) {

        $sqlw = "SELECT * FROM pedidos where restaurante = {$usuario['restaurante']}";
        $clientesresult = $conn->query($sqlw);



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
            <link href="../../../vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
            <link href="../../../https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
            <!-- Custom styles for this template-->
            <link href="../../../css/sb-admin-2.min.css" rel="stylesheet">
        </head>

        <body id="page-top">
            <!-- Page Wrapper -->
            <div id="wrapper">
                <!-- Sidebar -->
                <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                    <!-- Sidebar - Brand -->
                    <a class="sidebar-brand d-flex align-items-center justify-content-center">
                        <div class="sidebar-brand-icon rotate-n-15">
                            <i class="fas cart"></i>
                        </div>
                        <div class="sidebar-brand-text mx-3"><?php echo $sistema_nome ?></div>
                    </a>

                    <!-- Divider -->
                    <hr class="sidebar-divider my-0">

                    <!-- Nav Item - Dashboard -->
                    <li class="nav-item">
                        <a class="nav-link" href="../../home.php">
                            <i class="fas fa-fw fa-tachometer-alt"></i>
                            <span>Voltar</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="clientes.php">
                            <span>Seus clientes</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="pedidos.php">
                            <span>Pedidos</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="faturamento.php">
                            <span>Faturamento</span></a>
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
                        <div class="container-fluid">

                            <!-- Page Heading -->
                            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 class="h3 mb-0 text-gray-800">Vendas</h1>
                                <a target="_blank" href="mailto:suporte@tonascompras.com" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-bug fa-sm text-white-50"></i> Reportar erro</a>
                            </div>



                            <?php
                            $totalz = array();
                            $sqlw = "SELECT * FROM pedidos where status = 'success' and restaurante = {$usuario['restaurante']}";
                            $resultss = $conn->query($sqlw);
                            if ($resultss->num_rows > 0) {
                                while ($pedido = $resultss->fetch_assoc()) {
                                    foreach (json_decode($pedido['itens']) as $key) {
                                        $total_product = 0;
                                        $total_product = $total_product + $key->preco;
                                        foreach ($key->adicionais as $value) {
                                            $vpreco = $value->preco * $value->quantidade;
                                            $total_product = $total_product + $vpreco;
                                        }
                                        foreach ($key->adicionais_gratis as $value) {

                                            $vpreco = $value->preco * $value->quantidade;
                                            $total_product = $total_product + $vpreco;
                                        }
                                        $allprev = array();
                                        foreach ($key->adicionais_prev as $value) {
                                            array_push($allprev, $value->preco);
                                        }

                                        $total_product = $total_product + max($allprev);
                                        $total_product = $total_product * $key->quantidade;
                                        $totala = $totala + $total_product;
                                    }
                                    $cupom_s = $pedido['cupom'];
                                    $totala = $totala + $pedido['frete'];
                                    if ($cupom_s == "") {
                                    } else {
                                        $sqlw = "SELECT * FROM cupom WHERE nome = '{$cupom_s}'";
                                        $resultl = $conn->query($sqlw);
                                        if ($resultl->num_rows > 0) {
                                            while ($cupom = ($resultl->fetch_assoc())) {

                                                if ($cupom['tipo'] == "FRETE_GRATIS") {
                                                    $totala = $totala - $pedido['frete'];
                                                } elseif ($cupom['tipo'] == "PORCENTAGEM") {
                                                    $per = $total * ($cupom['desconto'] / 100);
                                                    $totala = $totala - $per;
                                                }
                                                if ($cupom['tipo'] == "TOTAL") {
                                                    $totala = $totala - $cupom['desconto'];
                                                }
                                            }
                                        }
                                    }
                                    array_push($totalz, $totala);
                                }
                            }



                            echo 'Valor recebido em todo período R$ ' . number_format(array_sum($totalz), 2, ",", ".");


                            ?>
                            <p>Atualmente você tem <?php echo $clientesresult->num_rows ?> vendas</p>

                            <form action="vendas.php" method="get">





                                <?php
                                $data = new DateTime(date('Y-m-d'));
                                $data->setDate(date("Y"), date("m") - 1, date("d"));

                                if (isset($_GET['de'])) {
                                    $dataate = date("Y-m-d", strtotime($_GET['ate']));
                                    $datade = date("Y-m-d", strtotime($_GET['de']));
                                } else {
                                    $datade = $data->format('Y-m-d');
                                    $dataate = date('Y-m-d');
                                }


                                ?>

                                De:
                                <input name="de" type="date" placeholder="De" value="<?php


                                                                                        if (isset($_GET['de'])) {
                                                                                            echo $datade;
                                                                                        } else {
                                                                                            $data = new DateTime(date('Y-m-d'));
                                                                                            $data->setDate(date("Y"), date("m") - 1, date("d"));
                                                                                            echo $data->format('Y-m-d');
                                                                                        }




                                                                                        ?>">
                                Até:
                                <input name="ate" type="date" placeholder="De" value="<?php


                                                                                        echo $dataate;


                                                                                        ?>">
                                <button>Exibir</button>
                            </form>
                            <br><br>




                            <div class="row">
                                <div style="width: 100%;">
                                    <div class="table-responsive-lg">


                                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>#ID</th>
                                                    <th>Entregar</th>
                                                    <th>Data</th>
                                                    <th>Status</th>
                                                    <th>Total com desconto</th>
                                                    <th>Total sem desconto</th>
                                                    <th>Ações</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <?php

                                                if (isset($_GET['local'])) {
                                                    $locais = "";
                                                    foreach ($_GET['local'] as $key) {
                                                        $locais = $locais . "local = '$key' or ";
                                                    }

                                                    $sqlw = "SELECT * FROM pedidos where " . substr($locais, 0, -4);
                                                } else {
                                                    $sqlw = "SELECT * FROM pedidos where restaurante = {$usuario['restaurante']}";
                                                }

                                                $resulta = $conn->query($sqlw);
                                                if ($resulta->num_rows > 0) {
                                                    while ($pedido = $resulta->fetch_assoc()) {
                                                        $horapedidoa = substr(str_replace("/", "-", $pedido['horario']), 0, 10);
                                                        $horapedido = date("Y-m-d", strtotime($horapedidoa));






                                                        if (strtotime($horapedido) >= strtotime($datade) and strtotime($horapedido) <= strtotime($dataate)) {
                                                            # code...
                                                ?>
                                                            <tr>
                                                                <td>#<?php echo $pedido['id'] ?>00</td>
                                                                <td>
                                                                    <?php


                                                                    if ($pedido['pagamento'] == "Buscar no local") {
                                                                        echo "Buscar no local";
                                                                    } else {
                                                                        echo get_bairro(get_endereco($pedido['endereco'], 'bairro', $conn), $conn);;
                                                                    }





                                                                    ?>
                                                                </td>
                                                                <td><?php echo $pedido['horario'] ?></td>
                                                                <td><?php
                                                                    if ($pedido['status'] == 'not_pay') {
                                                                        echo "Aguardando preparo";
                                                                    } elseif ($pedido['status'] == 'preparing') {
                                                                        echo "Aguardando entrega";
                                                                    } elseif ($pedido['status'] == 'quit_sender') {
                                                                        echo "Pedido sendo entregue";
                                                                    } elseif ($pedido['status'] == 'success') {
                                                                        echo "Pedido finalizado";
                                                                    } elseif ($pedido['status'] == 'canceled') {
                                                                        echo "Pedido cancelado";
                                                                    }
                                                                    ?></td>
                                                                <td>
                                                                    <?php

                                                                    $total = 0;
                                                                    //print_r(json_decode($pedido['itens']));
                                                                    foreach (json_decode($pedido['itens']) as $key) {
                                                                        $total_product = 0;
                                                                        $total_product = $total_product + $key->preco;
                                                                        foreach ($key->adicionais as $value) {
                                                                            $vpreco = $value->preco * $value->quantidade;
                                                                            $total_product = $total_product + $vpreco;
                                                                        }
                                                                        foreach ($key->adicionais_gratis as $value) {
                                                                            $vpreco = $value->preco * $value->quantidade;
                                                                            $total_product = $total_product + $vpreco;
                                                                        }
                                                                        $allprev = array();
                                                                        foreach ($key->adicionais_prev as $value) {
                                                                            array_push($allprev, $value->preco);
                                                                        }

                                                                        $total_product = $total_product + max($allprev);
                                                                        $total_product = $total_product * $key->quantidade;
                                                                        $total = $total + $total_product;
                                                                    }
                                                                    $frete = 0;
                                                                    $frete = $frete + $pedido['frete'];
                                                                    $frete = $frete + $pedido['taxa'];
                                                                    $total = $total + $frete;
                                                                    $cupom_s = $pedido['cupom'];
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
                                                                    echo 'R$ ' . number_format($total, 2, ",", ".");
                                                                    ?>
                                                                </td>
                                                                <td> <?php

                                                                        $total = 0;
                                                                        //print_r(json_decode($pedido['itens']));
                                                                        foreach (json_decode($pedido['itens']) as $key) {
                                                                            $total_product = 0;
                                                                            $total_product = $total_product + $key->preco;
                                                                            foreach ($key->adicionais as $value) {
                                                                                $vpreco = $value->preco * $value->quantidade;
                                                                                $total_product = $total_product + $vpreco;
                                                                            }
                                                                            foreach ($key->adicionais_gratis as $value) {
                                                                                $vpreco = $value->preco * $value->quantidade;
                                                                                $total_product = $total_product + $vpreco;
                                                                            }
                                                                            $allprev = array();
                                                                            foreach ($key->adicionais_prev as $value) {
                                                                                array_push($allprev, $value->preco);
                                                                            }

                                                                            $total_product = $total_product + max($allprev);
                                                                            $total_product = $total_product * $key->quantidade;
                                                                            $total = $total + $total_product;
                                                                        }
                                                                        $frete = 0;
                                                                        $frete = $frete + $pedido['frete'];
                                                                        $frete = $frete + $pedido['taxa'];
                                                                        $total = $total + $frete;
                                                                        echo 'R$ ' . number_format($total, 2, ",", ".");
                                                                        ?></td>
                                                                <td><a href="../../acao?id=<?php echo $pedido['id'] ?>">Ver</a></td>
                                                            </tr>


                                                <?php }
                                                    }
                                                } ?>
                                            </tbody>


                                        </table>






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
            <a class="scroll-to-top rounded" href="../../../#page-top">
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
                            <a class="btn btn-primary" href="../../../login.html">Logout</a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bootstrap core JavaScript-->
            <script src="../../../vendor/jquery/jquery.min.js"></script>
            <script src="../../../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

            <!-- Core plugin JavaScript-->
            <script src="../../../vendor/jquery-easing/jquery.easing.min.js"></script>

            <!-- Custom scripts for all pages-->
            <script src="../../../js/sb-admin-2.min.js"></script>

            <!-- Page level plugins -->
            <script src="../../../vendor/chart.js/Chart.min.js"></script>

            <!-- Page level custom scripts -->
            <script src="../../../js/demo/chart-area-demo.js"></script>
            <script src="../../../js/demo/chart-pie-demo.js"></script>

        </body>

        </html>
<?php }
} else {
    header("Location: ../../../login/");
}
?>