<?php error_reporting(0);
header("access-control-allow-origin: https://sandbox.pagseguro.uol.com.br");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
require_once '../../../api/connection.php';
session_start();
function getcliente($id, $string, $conn)
{
    $sqlw = "SELECT * FROM pedidos where de ='$id'";
    $result = $conn->query($sqlw);
    if ($result->num_rows > 0) {
        while ($cli = $result->fetch_assoc()) {
            return $cli[$string];
        }
    }
}
$user = $_SESSION['user'];
$senha = $_SESSION['senha'];

$sqlw = "SELECT * FROM funcionarios WHERE login = '{$user}' and senha = '{$senha}'";
$resultf = $conn->query($sqlw);
if ($resultf->num_rows > 0) {
    while ($usuario = $resultf->fetch_assoc()) {
        if (isset($_GET['nome'])) {
            $sqlw = "SELECT * FROM clientes where nome LIKE '%{$_GET['nome']}%'";
        }else{
            $sqlw = "SELECT * FROM clientes";
        }

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
                    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="../../../index.html">
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



                            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 class="h3 mb-0 text-gray-800">Usuários</h1>
                                <a target="_blank" href="mailto:suporte@tonascompras.com" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-bug fa-sm text-white-50"></i> Reportar erro</a>
                            </div>

                            <p>Você está listando <?php echo $clientesresult->num_rows ?> clientes</p>

                            <div class="row">
                                <div style="width: 100%;">
                                    <div class="table-responsive-lg">
                                        <form action="clientes">
                                            <input type="text" name="nome" placeholder="Buscar nome"><button>Buscar</button>
                                        </form>
                                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>Nome</th>
                                                    <th>Data de nascimento</th>
                                                    <th>Último local</th>
                                                    <th>Última visita</th>
                                                    <th>Gasto médio</th>
                                                    <th>Produto mais pedido</th>
                                                    <th>Ações</th>
                                                </tr>
                                            </thead>
                                            <tbody>


                                                <?php

                                                $pagina = (isset($_GET['pagina'])) ? $_GET['pagina'] : 1;
                                                $total = $clientesresult->num_rows;
                                                //seta a quantidade de itens por página, neste caso, 2 itens 
                                                $registros = 30;
                                                //calcula o número de páginas arredondando o resultado para cima 
                                                $numPaginas = ceil($total / $registros);
                                                //variavel para calcular o início da visualização com base na página atual 
                                                $inicio = ($registros * $pagina) - $registros;

                                                if (isset($_GET['nome'])) {
                                                    $sqlw = "SELECT * FROM clientes where nome LIKE '%{$_GET['nome']}%' limit $inicio,$registros";
                                                }else{
                                                    $sqlw = "SELECT * FROM clientes limit $inicio,$registros";
                                                }
                                                

                                                $resultz = $conn->query($sqlw);
                                                if ($resultz->num_rows > 0) {
                                                    while ($clientes = $resultz->fetch_assoc()) {
                                                ?>

                                                        <tr>
                                                            <td><?php echo $clientes['nome'] ?></td>
                                                            <td><?php
                                                                if ($clientes['aniversario'] == null) {
                                                                    echo "Sem registro";
                                                                } else {
                                                                    echo date('d/m/Y', strtotime($clientes['aniversario']));
                                                                }
                                                                ?></td>
                                                            <?php
                                                            $visits = 0;
                                                            $ultima = "";
                                                            $sqlw = "SELECT * FROM visita where de = '{$clientes['id']}' order by id asc";
                                                            $resultzav = $conn->query($sqlw);
                                                            if ($resultzav->num_rows > 0) {
                                                                while ($visita = $resultzav->fetch_assoc()) {
                                                                    $visits = $resultzav->num_rows;
                                                                    $ultimavisita = $visita['horario'];


                                                                    $sqlw = "SELECT * FROM restaurantes where id = '{$visita['restaurante']}'";
                                                                    $resultzavr = $conn->query($sqlw);
                                                                    if ($resultzavr->num_rows > 0) {
                                                                        while ($res = $resultzavr->fetch_assoc()) {
                                                                            $ultima = $res['nome'];
                                                                        }
                                                                    }
                                                                }
                                                            } else {
                                                                $ultima = "Sem registro";
                                                                $ultimavisita = "Sem registro";
                                                            }
                                                            ?>
                                                            <td><?php echo $ultima ?></td>
                                                            <td><?php

                                                                echo $ultimavisita;

                                                                ?></td>
                                                            <?php
                                                            $pratos = array();
                                                            $total = 0;
                                                            $totais = array();
                                                            $sqlw = "SELECT * FROM pedidos where status = 'success' and de = '{$clientes['id']}'";
                                                            $resultza = $conn->query($sqlw);
                                                            if ($resultza->num_rows > 0) {
                                                                while ($pedido = $resultza->fetch_assoc()) {

                                                                    $itens = json_decode($pedido['itens']);
                                                                    foreach ($itens as $key) {
                                                                        array_push($pratos, $key->nome);
                                                                    }
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

                                                                    array_push($totais, $total);
                                                                }
                                                                $prato = max($pratos);
                                                                $total_final =  'R$ ' . number_format(array_sum($totais) / count($totais), 2, ",", ".");;
                                                            } else {
                                                                $total_final = "Sem registro";
                                                                $prato = "Sem registro";
                                                            }
                                                            echo "<td>$total_final</td>";
                                                            echo "<td>$prato</td>";

                                                            ?>
                                                            <td><a href="cliente_view.php?id=<?php echo $clientes['id'] ?>">Ver</a></td>
                                                        </tr>

                                                <?php
                                                    }
                                                }
                                                ?>
                                            </tbody>
                                        </table>
                                        <?php 

                                        for ($i = 1; $i < $numPaginas + 1; $i++) {
                                            if (isset($_GET['nome'])) {
                                                echo "<a href='clientes.php?nome={$_GET['nome']}&pagina=$i'>" . $i . "</a> ";
                                            }else{
                                                echo "<a href='clientes.php?pagina=$i'>" . $i . "</a> ";
                                            }
                                            
                                        } 
                                        ?>
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