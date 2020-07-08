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
                        <a class="nav-link" href="painel.php">
                            <i class="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span></a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="financeiro.php">
                            <i class="fas fa-fw fa-cash-register"></i>
                            <span>Financeiro</span></a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="funcionarios.php">
                            <i class="fas fa-fw fa-users"></i>
                            <span>Funcionários</span></a>
                    </li>

                    <li class="nav-item active">
                        <a class="nav-link" href="aplicativo.php">
                            <i class="fas fa-fw fa-mobile-alt"></i>
                            <span>Aplicativo</span></a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="sair.php">
                            <i class="fas fa-fw fa-sign-out-alt"></i>
                            <span>Sair</span></a>
                    </li>
                    <li class="nav-item">
                                <a class="nav-link" href="destaque.php">
                                    <span>Destaque</span></a>
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
                        

                           
                            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 class="h3 mb-0 text-gray-800">Seu restaurante</h1>
                                <a target="_blank" href="mailto:suporte@tonascompras.com" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-bug fa-sm text-white-50"></i> Reportar erro</a>
                            </div>

                            <!-- Content Row -->
                            <div class="row">

                                <!-- Earnings (Monthly) Card Example -->
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
                                        $sqlw = "SELECT * FROM pedidos";
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


                                <div class="col-xl-3 col-md-6 mb-4">
                                    <form action="../../painel/app/atualizar_horarios.php" method="post">
                                    <div class="card shadow h-100 py-2" style="padding-left: 10px;padding-right: 10px;">
                                        <p><b>Horário de funcionamento</b></p>
                                        <hr class="sidebar-divider d-none d-md-block">
                                        <div class="form-groups">
                                            <div class='form-group' class='col-md-15'>
                                                <div class="form-row">
                                                    <div class="form-group col-md-15">
                                                        <label for="inputEmail4">Segunda-feira de</label>
                                                    <?php $segunda = json_decode($horario['segunda']);
                                                     
                                                    ?>
                                                        <input type="time" class="form-control" name="segunda-de" placeholder="DE" min="00:00" max="24:00" value="<?php echo $segunda->de ?>">
                                                    </div>
                                                    <div class="form-group col-md-15">
                                                        <label for="inputPassword4">Até</label>
                                                        <input type="time" class="form-control" name="segunda-ate" placeholder="ATÉ" min="00:00" max="24:00" value="<?php echo $segunda->ate ?>">
                                                    </div>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" name="segunda" class="custom-control-input" id="customChecksegunda" <?php if($horario['segunda']!='NA'){
                                                            echo "checked";
                                                        } ?>>
                                                        <label class="custom-control-label" for="customChecksegunda">Funciona segunda-feira?</label>
                                                    </div>
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
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" name="terca" class="custom-control-input" id="customCheck1terca" <?php if($horario['terca']!='NA'){
                                                            echo "checked";
                                                        } ?>>
                                                        <label class="custom-control-label" for="customCheck1terca">Funciona terça-feira?</label>
                                                    </div>
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
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" name="quarta" class="custom-control-input" id="customCheck1quarta" <?php if($horario['quarta']!='NA'){
                                                            echo "checked";
                                                        } ?>>
                                                        <label class="custom-control-label" for="customCheck1quarta">Funciona quarta-feira?</label>
                                                    </div>
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
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" name="quinta" class="custom-control-input" id="customCheck1quinta" <?php if($horario['quinta']!='NA'){
                                                            echo "checked";
                                                        } ?>>
                                                        <label class="custom-control-label" for="customCheck1quinta">Funciona quinta-feira?</label>
                                                    </div>
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
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" name="sexta" class="custom-control-input" id="customCheck1sexta" <?php if($horario['sexta']!='NA'){
                                                            echo "checked";
                                                        } ?>>
                                                        <label class="custom-control-label" for="customCheck1sexta">Funciona sexta-feira?</label>
                                                    </div>
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
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" name="sabado" class="custom-control-input" id="customCheck1sabado" <?php if($horario['sabado']!='NA'){
                                                            echo "checked";
                                                        } ?>>
                                                        <label class="custom-control-label" for="customCheck1sabado">Funciona sábado?</label>
                                                    </div>
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
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" name="domingo" class="custom-control-input" id="customCheck1domingo" <?php if($horario['domingo']!='NA'){
                                                            echo "checked";
                                                        } ?>>
                                                        <label class="custom-control-label" for="customCheck1domingo">Funciona domingo?</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <button class="btn btn-success">Atualizar</button>

                                        </div>
                                    </div>
                                    </form>
                                </div>

                                <div class="col-xl-4 col-md-5 mb-4">
                                    <div class="card shadow h-100 py-2" style="padding-left: 10px;padding-right: 10px;">
                                        <p><b>Categorias pricipais</b></p>
                                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>#ID</th>
                                                    <th>Nome</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <?php

                                                        $sqlw = "SELECT * FROM cardapio";
                                                        
                                                        $result = $conn->query($sqlw);
                                                        if ($result->num_rows > 0) {
                                                            while ($pedido = $result->fetch_assoc()) {

                                                                ?>

                                                        <tr>
                                                            <td>#<?php echo $pedido['id']; ?></td>
                                                            <td><?php echo utf8_decode($pedido['nome']) ?></td>

                                                        </tr>
                                                <?php }
                                                        } ?>


                                            </tbody>
                                        </table>



                                        <hr class="sidebar-divider d-none d-md-block">
                                        <h4>Criar novo</h4>
                                        <form action="../../painel/app/criar_cardapio.php" method="post">
                                            <div class="form-groups">
                                                <div>
                                                    <div class="form-group">
                                                        <label><b>Nome</b></label>
                                                        <input type="text" name="nome" class="form-control" placeholder="Pizzas">
                                                    </div>
                                                    <div class="form-group">
                                                        <label><b>Descrição</b></label>
                                                        <input type="text" name="desc" class="form-control" placeholder="Pizzas com a melhor qualidade">
                                                    </div>
                                                </div>
                                            </div>
                                            <button class="btn btn-success">Criar</button>
                                        </form>



                                    </div>
                                </div>
                                <div class="col-xl-5 col-md-5 mb-4">
                                    <div class="card shadow h-100 py-2" style="padding-left: 10px;padding-right: 10px;">
                                        <p><b>Produtos</b></p>
                                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>#ID</th>
                                                    <th>Nome</th>
                                                    <th>Preço</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <?php

                                                        $sqlw = "SELECT * FROM produtos";
                                                        
                                                        $result = $conn->query($sqlw);
                                                        if ($result->num_rows > 0) {
                                                            while ($pedido = $result->fetch_assoc()) {

                                                                ?>

                                                        <tr>
                                                            <td>#<?php echo $pedido['id']; ?></td>
                                                            <td><?php echo utf8_decode($pedido['nome']) ?></td>
                                                            <td>R$<?php echo utf8_decode($pedido['preco']) ?></td>
                                                        </tr>
                                                <?php }
                                                        } ?>


                                            </tbody>
                                        </table>
                                        <hr class="sidebar-divider d-none d-md-block">
                                        <h4>Criar novo</h4>
                                        <form action="../../painel/app/criar_produto.php" method="post">
                                            <div class="form-groups">
                                                <div>
                                                    <div class="form-group">
                                                        <label><b>Nome</b></label>
                                                        <input type="text" name="nome" class="form-control" placeholder="Pizza P">
                                                    </div>
                                                    <div class="form-group">
                                                        <label><b>Preço</b></label>
                                                        <input type="number" name="preco" class="form-control" placeholder="24">
                                                    </div>
                                                    <div class="form-group">
                                                        <label><b>Descrição</b></label>
                                                        <input type="text" name="desc" class="form-control" placeholder="Pizza com 4 pedaços">
                                                    </div>
                                                    <div class="form-group">
                                                        <label><b>De</b></label>
                                                        <select class="form-control" name="de" id="">
                                                            <?php

                                                                    $sqlw = "SELECT * FROM cardapio";
                                                                    
                                                                    $result = $conn->query($sqlw);
                                                                    if ($result->num_rows > 0) {
                                                                        while ($produto = $result->fetch_assoc()) {
                                                                            ?>

                                                                    <option value="<?php echo $produto['id'] ?>"><?php echo utf8_decode($produto['nome']) ?></option>


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
                                <div class="col-xl-5 col-md-5 mb-4">
                                    <div class="card shadow h-100 py-2" style="padding-left: 10px;padding-right: 10px;">
                                        <p><b>Categorias de complementos</b></p>
                                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>#ID</th>
                                                    <th>Nome</th>
                                                    <th>Escolher até</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <?php

                                                        $sqlw = "SELECT * FROM categorias";
                                                        
                                                        $result = $conn->query($sqlw);
                                                        if ($result->num_rows > 0) {
                                                            while ($pedido = $result->fetch_assoc()) {

                                                                ?>

                                                        <tr>
                                                            <td>#<?php echo $pedido['id']; ?></td>
                                                            <td><?php echo utf8_decode($pedido['nome']) ?></td>
                                                            <td><?php echo utf8_decode($pedido['quantidade']) ?></td>
                                                        </tr>
                                                <?php }
                                                        } ?>


                                            </tbody>
                                        </table>
                                        <hr class="sidebar-divider d-none d-md-block">
                                        <h4>Criar novo</h4>
                                        <form action="../../painel/app/criar_categorias.php" method="post">
                                            <div class="form-groups">
                                                <div>
                                                    <div class="form-group">
                                                        <label><b>Nome</b></label>
                                                        <input type="text" name="nome" class="form-control" placeholder="Borda da pizza">
                                                    </div>
                                                    <div class="form-group">
                                                        <label><b>De</b></label>
                                                        <?php

                                                                $sqlw = "SELECT * FROM produtos";
                                                                
                                                                $result = $conn->query($sqlw);
                                                                if ($result->num_rows > 0) {
                                                                    while ($produto = $result->fetch_assoc()) {
                                                                        ?>

                                                                <div class="custom-control custom-checkbox">
                                                                    <input type="checkbox" name="de[]" class="custom-control-input" id="customCheck<?php echo $produto['id'] ?>" value="<?php echo $produto['id'] ?>">
                                                                    <label class="custom-control-label" for="customCheck<?php echo $produto['id'] ?>"> <?php echo utf8_decode($produto['nome']) ?></label>
                                                                </div>


                                                        <?php }
                                                                } ?>

                                                    </div>
                                                    <div class="form-group">
                                                        <label><b>Escolher até</b></label>
                                                        <input type="number" name="quantidade" class="form-control" value="1" min="1">
                                                    </div>
                                                </div>
                                                <button class="btn btn-success">Criar</button>
                                        </form>

                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-5 col-md-5 mb-4">
                                <div class="card shadow h-100 py-2" style="padding-left: 10px;padding-right: 10px;">
                                    <p><b>Complementos</b></p>
                                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>#ID</th>
                                                <th>Nome</th>
                                                <th>Categoria</th>
                                                <th>Preço</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php

                                                    $sqlw = "SELECT * FROM adicionais";
                                                    
                                                    $result = $conn->query($sqlw);
                                                    if ($result->num_rows > 0) {
                                                        while ($pedido = $result->fetch_assoc()) {

                                                            ?>

                                                    <tr>
                                                        <td>#<?php echo $pedido['id']; ?></td>
                                                        <td><?php echo utf8_decode($pedido['nome']) ?></td>
                                                        <td><?php echo utf8_decode($pedido['de']) ?></td>
                                                        <td><?php echo utf8_decode($pedido['preco']) ?></td>
                                                    </tr>
                                            <?php }
                                                    } ?>


                                        </tbody>
                                    </table>

                                    <hr class="sidebar-divider d-none d-md-block">
                                    <h4>Criar novo</h4>
                                    <form action="../../painel/app/criar_complementos.php" method="post">
                                        <div class="form-groups">
                                            <div>
                                                <div class="form-group">
                                                    <label><b>Nome</b></label>
                                                    <input type="text" name="nome" class="form-control" placeholder="Borda de chocolate">
                                                </div>
                                                <div class="form-group">
                                                    <label><b>Preço</b></label>
                                                    <input type="number" name="preco" class="form-control" placeholder="100">
                                                </div>
                                                <div class="form-group">
                                                    <label><b>Descrição</b></label>
                                                    <input type="text" name="desc" class="form-control" placeholder="Borda rechedada de chocolate...">
                                                </div>
                                                <div class="form-group">
                                                    <label><b>De</b></label>
                                                    <select class="form-control" name="de" id="">
                                                        <?php

                                                                $sqlw = "SELECT * FROM categorias";
                                                                
                                                                $result = $conn->query($sqlw);
                                                                if ($result->num_rows > 0) {
                                                                    while ($produto = $result->fetch_assoc()) {
                                                                        ?>

                                                                <option value="<?php echo $produto['id'] ?>"><?php echo utf8_decode($produto['nome']) ?></option>


                                                        <?php }
                                                                } ?>
                                                    </select>

                                                </div>
                                            </div>
                                            <button class="btn btn-success">Criar</button>
                                    </form>
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
} else {
    header("Location: ../../login/");
}}} ?>