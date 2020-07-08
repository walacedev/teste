<?php error_reporting(0);
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
                            <li class="nav-item active">
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
                            
                            <li class="nav-item">
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
                                
                                    <?php
                                    if ($usuario['cargo'] == "ADMIN") {
                                    ?>
                                       
                                        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                                            <h1 class="h3 mb-0 text-gray-800">Bairros de entrega</h1>
                                            <a target="_blank" href="mailto:suporte@tonascompras.com" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-bug fa-sm text-white-50"></i> Reportar erro</a>
                                        </div>
                                        <div class="row">
                                            <div style="width: 100%;">

                                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                                    <thead>
                                                        <tr>
                                                         
                                                            <th>Nome</th>
                                                            <th>Cidade</th>
                                                            <th>Ações</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <?php
                                                        $sqlw = "SELECT * FROM bairros";
                                                        $resulta = $conn->query($sqlw);
                                                        if ($resulta->num_rows > 0) {
                                                            while ($pedido = $resulta->fetch_assoc()) {
                                                        ?>
                                                                <tr>
                                                                  
                                                                    <td><?php echo ($pedido['nome']) ?></td>
                                                                    <td><?php
                                                                        $sqlw = "SELECT * FROM cidades where id = '{$pedido['cidade']}'";

                                                                        $result = $conn->query($sqlw);
                                                                        if ($result->num_rows > 0) {
                                                                            while ($pp = $result->fetch_assoc()) {
                                                                                echo $pp['nome'];
                                                                            }
                                                                        }
                                                                        ?></td>
                                                                    <td><a href="app/bairro_delete.php?id=<?php echo $pedido['id']; ?>">Excluir</a>&nbsp;&nbsp;<a href="bairro_edit.php?id=<?php echo $pedido['id']; ?>">Editar</a></td>
                                                                </tr>
                                                        <?php }
                                                        } ?>
                                                    </tbody>
                                                </table>
                                                <hr class="sidebar-divider d-none d-md-block">
                                                <h4>Criar novo</h4>
                                                <form action="app/bairro_create.php" method="post">
                                                    <div class="form-groups">
                                                        <div>
                                                            <div class="form-group">
                                                                <label><b>Nome</b></label>
                                                                <input type="text" name="nome" class="form-control" placeholder="">
                                                            </div>
                                                            <div class="form-group">
                                                                <label><b>Cidade</b></label>
                                                                <select class="form-control" name="cidade" id="de">
                                                                    <?php
                                                                    $sqlw = "SELECT * FROM cidades";

                                                                    $result = $conn->query($sqlw);
                                                                    if ($result->num_rows > 0) {
                                                                        while ($produtoz = $result->fetch_assoc()) {
                                                                    ?>

                                                                            <option value="<?php echo $produtoz['id'] ?>"><?php echo utf8_decode($produtoz['nome']) ?></option>
                                                                    <?php }
                                                                    } ?>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button class="btn btn-success">Criar</button>
                                                </form>
                                            </div>
                                        </div>
                                    <?php
                                    } else {
                                    ?>
                                        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                                            <h1 class="h3 mb-0 text-gray-800">Custo de frete</h1>
                                            <a target="_blank" href="mailto:suporte@tonascompras.com" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-bug fa-sm text-white-50"></i> Reportar erro</a>
                                        </div>


                                        <form action="app/bairros_frete.php" method="post">
                                            <?php
                                            $sqlw = "SELECT * FROM restaurantes where id='{$usuario['restaurante']}'";
                                            $result = $conn->query($sqlw);
                                            if ($result->num_rows > 0) {
                                                while ($resta = $result->fetch_assoc()) {
                                                    if ($resta['fretes'] == "" or $resta['fretes'] == "null" or $resta['fretes'] == "[]") {
                                            ?>
                                                        <div class="form-row" id="bairro">
                                                            <div class="col">
                                                                <label>Bairro</label>
                                                                <select class="form-control" name="bairros[]" id="de">
                                                                    <?php
                                                                    $sqlw = "SELECT * FROM bairros order by nome";
                                                                    $result = $conn->query($sqlw);
                                                                    if ($result->num_rows > 0) {
                                                                        while ($produtoz = $result->fetch_assoc()) {

                                                                            echo "<option value='{$produtoz['id']}'>{$produtoz['nome']}</option>";


                                                                    ?>

                                                                    <?php
                                                                        }
                                                                    } ?>
                                                                </select>
                                                            </div>
                                                            <div class="col">
                                                                <label>Frete</label>
                                                                <input type="text" onkeyup="k(this);" name="fretes[]" class="form-control" placeholder="" value="<?php echo $value ?>">
                                                            </div>
                                                            <div class="col">
                                                                <label>Ações</label>
                                                                <button class="form-control apagar" id="apagar">Remover</button>
                                                            </div>
                                                        </div>
                                            <?php }
                                                }
                                            } ?>
                                            <input type="text" style="display: none" name="restaurante" class="form-control" value="<?php echo $usuario['restaurante'] ?>">
                                            <div id="bairros">
                                                <?php
                                                $sqlw = "SELECT * FROM restaurantes where id='{$usuario['restaurante']}'";
                                                $result = $conn->query($sqlw);
                                                if ($result->num_rows > 0) {
                                                    while ($resta = $result->fetch_assoc()) {

                                                        foreach (json_decode($resta['fretes']) as $key => $value) {

                                                ?>

                                                            <div class="form-row" id="bairro">
                                                                <div class="col">
                                                                    <label>Bairro</label>
                                                                    <select class="form-control" name="bairros[]" id="de">
                                                                        <?php
                                                                        $sqlw = "SELECT * FROM bairros order by nome";
                                                                        $result = $conn->query($sqlw);
                                                                        if ($result->num_rows > 0) {
                                                                            while ($produtoz = $result->fetch_assoc()) {

                                                                                if ($key == $produtoz['id']) {
                                                                                    echo "<option value='{$produtoz['id']}' selected>{$produtoz['nome']}</option>";
                                                                                } else {
                                                                                    echo "<option value='{$produtoz['id']}'>{$produtoz['nome']}</option>";
                                                                                }

                                                                        ?>

                                                                        <?php }
                                                                        } ?>
                                                                    </select>
                                                                </div>
                                                                <div class="col">
                                                                    <label>Frete</label>
                                                                    <input type="text" onkeyup="k(this);" name="fretes[]" class="form-control" placeholder="" value="<?php echo $value ?>">
                                                                </div>
                                                                <div class="col">
                                                                    <label>Ações</label>
                                                                    <button class="form-control apagar" id="apagar">Remover</button>
                                                                </div>
                                                            </div>
                                                <?php
                                                        }
                                                    }
                                                } ?>

                                            </div>
                                            <br><br>
                                            <button id="adicionar" class="btn btn-warning">Adicionar +</button>
                                            <button class="btn btn-success">Salvar</button>
                                        </form>


                                        <script>
                                            $("#adicionar").click(function(e) {
                                                var seuNode = document.getElementById('bairro');
                                                var seuNodes = document.getElementById('bairros'); //usei getElementById() por opção você pode resgatar a referência do seu node como quiser.
                                                var clone = seuNode.cloneNode(true); //aqui você terá seu clone armazenado em variável mas ainda não incluido no Documento, sem parentNode.
                                                var inputsClone = clone.getElementsByTagName('input'); // todos os inputs clonados

                                                for (var i = 0; i < inputsClone.length; i++) {
                                                    inputsClone[i].value = '';
                                                }
                                                seuNodes.appendChild(clone);

                                                e.preventDefault();
                                            })

                                            $("#bairros").on('click', '.apagar', function() {
                                                $(this).parent().parent().remove();
                                            });
                                        </script>




                                    <?php
                                    }
                                    ?>



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