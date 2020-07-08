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

        $sqlw = "SELECT * FROM clientes WHERE id = '{$_GET['id']}'";
        $resultid = $conn->query($sqlw);
        if ($resultid->num_rows > 0) {
            while ($cliente = $resultid->fetch_assoc()) {
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

                            <li class="nav-item">
                                <a class="nav-link" href="../../home.php">
                                    <i class="fas fa-fw fa-tachometer-alt"></i>
                                    <span>Voltar</span></a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="clientes.php">
                                    <span>Usuários</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="restaurantes.php">
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
                                        <h1 class="h3 mb-0 text-gray-800">Usuários</h1>
                                        <a target="_blank" href="mailto:suporte@tonascompras.com" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-bug fa-sm text-white-50"></i> Reportar erro</a>
                                    </div>
                                    <?php
                                    $visits = 0;
                                    $ultimorestaurate = "";
                                    $ultima = "";
                                    $horarios = array();
                                    $trinta = 0;
                                    $sessenta = 0;
                                    $comandaultima = "";
                                    $datae = new DateTime(date('Y-m-d'));
                                    $data = $datae->format('Y-m-d');
                                    $sqlw = "SELECT * FROM visita where de = '{$cliente['id']}'";
                                    $resultzav = $conn->query($sqlw);
                                    if ($resultzav->num_rows > 0) {
                                        while ($visita = $resultzav->fetch_assoc()) {
                                            $visits = $resultzav->num_rows;
                                            $ultima = $visita['horario'];
                                            $sqlw = "SELECT * FROM restaurantes where id = '{$visita['restaurante']}'";
                                            $resultzavr = $conn->query($sqlw);
                                            if ($resultzavr->num_rows > 0) {
                                                while ($res = $resultzavr->fetch_assoc()) {
                                                    $ultimorestaurate = $res['nome'];
                                                }
                                            }
                                            array_push($horarios, array(
                                                "horario" => $visita['horario'],
                                                "restaurante" => $visita['restaurante']
                                            ));
                                        }
                                    }
                                    $restaurantes30 = "";
                                    $restaurantes60 = "";
                                    $array = array();
                                    $arrayz = array();
                                    foreach ($horarios as $key) {
                                        $horapedidoa = substr(str_replace("/", "-", $key['horario']), 0, 10);
                                        $horapedido = date("Y-m-d", strtotime($horapedidoa));
                                        $conta = strtotime($data) - strtotime($horapedido);
                                        $dias = $conta / 86400;
                                        if ($dias <= 31) {
                                            $trinta++;

                                            $sqlw = "SELECT * FROM restaurantes where id = '{$key['restaurante']}'";
                                            $resultzavr = $conn->query($sqlw);
                                            if ($resultzavr->num_rows > 0) {
                                                while ($res = $resultzavr->fetch_assoc()) {
                                                    array_push($arrayz, $res['nome']);
                                                }
                                            }
                                        }
                                        if ($dias <= 61) {
                                            $sessenta++;

                                            $sqlw = "SELECT * FROM restaurantes where id = '{$key['restaurante']}'";
                                            $resultzavr = $conn->query($sqlw);
                                            if ($resultzavr->num_rows > 0) {
                                                while ($res = $resultzavr->fetch_assoc()) {
                                                    array_push($array, $res['nome']);
                                                }
                                            }
                                        }
                                    }
                                    foreach (array_unique($array) as $key60) {
                                        $restaurantes60 = $restaurantes60 . $key60 . ", ";
                                    }
                                    foreach (array_unique($arrayz) as $key30) {
                                        $restaurantes30 = $restaurantes30 . $key30 . ", ";
                                    }
                                    date_default_timezone_set('UTC');
                                    $sqlw = "SELECT * FROM comandas where de = '{$cliente['id']}'";
                                    $resultzavc = $conn->query($sqlw);
                                    if ($resultzavc->num_rows > 0) {
                                        while ($comanda = $resultzavc->fetch_assoc()) {
                                            $comandaultima = $comanda['data'];
                                        }
                                    }
                                    $horacomanda = substr($comandaultima, -5);
                                    $horacomandas = date("H:m", strtotime($horacomanda));
                                    $horapedidoz = substr($ultima, -5);
                                    $horapedidoc = date("H:m", strtotime($horapedidoa));
                                    $tempomediostr =  ($horapedidoc) - ($horacomandas);


                                    $pratos = array();
                                    $total = 0;
                                    $totais = array();
                                    $sqlw = "SELECT * FROM pedidos where de = '{$cliente['id']}'";
                                    $resultza = $conn->query($sqlw);
                                    if ($resultza->num_rows > 0) {
                                        while ($pedido = $resultza->fetch_assoc()) {

                                            $itens = json_decode($pedido['itens']);
                                            foreach ($itens as $key) {
                                                array_push($pratos, $key->nome);
                                            }
                                            $total = 0;
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

                                            $total = $total + $pedido['frete'];
                                            array_push($totais, $total);
                                        }
                                    }
                                    $prato = max($pratos);
                                    $total_final =  number_format(array_sum($totais) / count($totais), 2, ",", ".");;







                                    ?>
                                    <p><b>Perfil de cliente:</b> <?php echo $cliente['nome'] ?></p>

                                    <h2><b>USUÁRIO NO <?php echo strtoupper($sistema_nome); ?></b></h2>
                                    <p><b>E-mail:</b> <?php echo $cliente['email'] ?></p>
                                    <p><b>Contato:</b> <?php echo $cliente['tel'] ?></p>
                                    <p><b>Último local:</b> <?php echo $ultimorestaurate ?></p>
                                    <p><b>Local mais visitados nos ultimos 30 dias:</b> <?php echo substr($restaurantes30, 0, -2); ?></p>
                                    <p><b>Local mais visitados nos ultimos 60 dias:</b> <?php echo substr($restaurantes60, 0, -2); ?></p>
                                    <p><b>Utilização nos ultimos 30 dias</b>: <?php echo $trinta ?></p>
                                    <p><b>Utilização nos ultimos 60 dias</b>: <?php echo $sessenta ?></p>
                                    <p><b>Última visita</b>: <?php echo $ultima ?></p>
                                    <br>
                                    <p><b>Produto mais pedido no app</b>: <?php echo $prato ?></p>
                                    <p><b>Segundo produto mais pedido no app</b>: <?php
                                                                                    echo max(1, $pratos)[2]

                                                                                    ?></p>
                                    <p><b>Média de gastos</b>: R$ <?php echo $total_final ?></p>
                                    <br>
                                    <?php
                                    $nota = 0;
                                    $comentario = "";
                                    $sqlw = "SELECT * FROM avaliacoes where de = '{$cliente['id']}' and restaurante = '{$usuario['restaurante']}'";
                                    $resultzaa = $conn->query($sqlw);
                                    if ($resultzaa->num_rows > 0) {
                                        while ($avaliacao = $resultzaa->fetch_assoc()) {
                                            $nota = $avaliacao['avaliacao'];
                                            $comentario = $avaliacao['texto'];
                                        }
                                    }

                                    ?>
                                    <h5>Últimos pedidos</h5>
                                    <div class="row">
                                        <div style="width: 100%;">
                                            <div class="table-responsive-lg">

                                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                                    <thead>
                                                        <tr>
                                                            <th>#ID</th>
                                                            <th>Entrega</th>
                                                            <th>Data</th>
                                                            <th>Status</th>
                                                            <th>Total</th>
                                                            <th>Ações</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <?php

                                                        $sqlw = "SELECT * FROM pedidos where de = '{$cliente['id']}'";
                                                        $resulta = $conn->query($sqlw);
                                                        if ($resulta->num_rows > 0) {
                                                            while ($pedido = $resulta->fetch_assoc()) {


                                                        ?>
                                                                <tr>
                                                                    <td>#<?php echo $pedido['id']; ?></td>
                                                                    <td><?php
                                                                         if ($pedido['pagamento'] == "Buscar no local") {
                                                                            echo "Buscar no local";
                                                                        } else {
                                                                            echo get_bairro(get_endereco($pedido['endereco'], 'bairro', $conn), $conn);;
                                                                        }?></td>
                                                                    <td><?php echo ($pedido['horario']) ?></td>
                                                                    <td><?php
                                                                        if ($pedido['status'] == 'not_pay') {
                                                                            echo "Aguardando preparo";
                                                                        } elseif ($pedido['status'] == 'preparing') {
                                                                            echo "Aguardando entrega";
                                                                        } elseif ($pedido['status'] == 'quit_sender') {
                                                                            echo "Pedido sendo entregue";
                                                                        } elseif ($pedido['status'] == 'success') {
                                                                            echo "Pedido finalizado";
                                                                        }elseif ($pedido['status'] == 'canceled') {
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
                                                                    <td><a href="../../acao?id=<?php echo $pedido['id'] ?>">Ver</a></td>
                                                                </tr>
                                                        <?php  }
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
        }
    }
} else {
    header("Location: ../../../login/");
}

?>