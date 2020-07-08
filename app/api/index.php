<?php //error_reporting(0);
header("access-control-allow-origin: https://sandbox.pagseguro.uol.com.br");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
require_once "classes/adicionais.php";
$adicionais = new Adicionais();
require_once "classes/cardapio.php";
$cardapio = new Cardapio();
require_once "classes/produtos.php";
$produtos = new Produtos();
require_once "classes/login.php";
$login = new Login();
require_once "classes/pedidos.php";
$pedidos = new Pedidos();
    require_once "classes/visita.php";
    $visita = new Visita();
require_once "classes/visita.php";
$visita = new Visita();

    require_once "classes/config.php";
    $config = new Config();
    
require_once "classes/change.php";
$change = new Change();
    
    require_once "classes/status.php";
    $status = new Status();
    
require_once "classes/destaque.php";
$destaque = new Destaque();
    
require_once "classes/cidades.php";
$cidades = new Cidades();

    require_once "classes/email.php";
    $email = new Email();
    
require_once "classes/bairros.php";
$bairros = new Bairros();

require_once "classes/atualizar.php";
$atualizar = new Atualizar();

require_once "classes/horario.php";
$horario = new Horario();

require_once "classes/cupom.php";
$cupom = new Cupom();

    require_once "classes/notificacoes.php";
    $notificacoes = new Notificacoes();
    
require_once "classes/token_noty.php";
$token_noty = new Token();

require_once "classes/locais.php";
$locais = new Locais();
    
    require_once "classes/enderecos.php";
    $enderecos = new Enderecos();
    
require_once "classes/avaliacao.php";
$avaliacao = new Avaliacao();

require_once "classes/categorias.php";
$categorias = new Categorias();
    
require_once "classes/restaurante.php";
$restaurante = new Restaurante();
    
    require_once "classes/mesas.php";
    $mesas = new Mesas();

require_once "classes/noty.php";
$noty = new Noty();
$retorno = file_get_contents('php://input');
$r = json_decode($retorno);
$url = explode("/", $_REQUEST['url']);
$path = $url[0];
if (class_exists($path) or ($path == 'produto')) {

    if ($path == "noty") {
        if ($_SERVER['REQUEST_METHOD'] == "POST") {
            parse_str(file_get_contents("php://input"), $data);
            // Cast it to an object
            $data = (object) $data;

            $noty->post($data->notificationCode);
        }
    }

    if ($path == "horario") {
        if ($_SERVER['REQUEST_METHOD'] == "GET") {
            $horario->get($_GET['id']);
        }
    }
    
    if ($path == "mesas") {
        if ($_SERVER['REQUEST_METHOD'] == "GET") {
            $mesas->get($_GET['id']);
        }
    }
    
    if ($path == "cidades") {
        if ($_SERVER['REQUEST_METHOD'] == "GET") {
            $cidades->get();
        }
    }
    
    if ($path == "config") {
        if ($_SERVER['REQUEST_METHOD'] == "GET") {
            $config->get();
        }
    }

    if ($path == "categorias") {
        if ($_SERVER['REQUEST_METHOD'] == "GET") {
            $categorias->get();
        }
    }

    if ($path == "locais") {
        if ($_SERVER['REQUEST_METHOD'] == "GET") {
            $locais->get();
        }
    }
	
	if ($path == "destaque") {
        if ($_SERVER['REQUEST_METHOD'] == "GET") {
            $destaque->get();
        }
    }
    
    if ($path == "status") {
        if ($_SERVER['REQUEST_METHOD'] == "GET") {
            $status->get($_GET['id'], $_GET['status']);
        }
    }

    if ($path == "bairros") {
        if ($_SERVER['REQUEST_METHOD'] == "GET") {
            $bairros->get();
        }
    }
    if ($path == "visita") {
        if ($_SERVER['REQUEST_METHOD'] == "GET") {
            $restaurante = $_GET['restaurante'];
            $de = $_GET['de'];
            $dt = date('d/m/Y');
            $hr = date('H:i');
            $user_inicial = array(
                                  'restaurante' => $restaurante,
                                  'de' => $de,
                                  'horario' => $dt . " as " . $hr
                                  );
            $visita->set($user_inicial);
        }
    }

    
    if ($path == "enderecos") {
        if($_SERVER['REQUEST_METHOD'] == "DELETE"){
            $enderecos->delete($_GET['id']);
        }
        if ($_SERVER['REQUEST_METHOD'] == "GET") {
            $enderecos->get($_GET['id']);
        }else{
            $endereco = $r->endereco;
            $numero = $r->numero;
            $bairro = $r->bairro;
            $de = $r->de;
            $cidade = $r->cidade;
            $complemento = $r->complemento;
            
            $user_inicial = array(
                                  'de' => $de,
                                  'endereco' => $endereco,
                                  'cidade' => $cidade,
                                  'bairro' => $bairro,
                                  'complemento' => $complemento,
                                  'numero' => $numero
                                  );
            $enderecos->set($user_inicial, $_GET['id']);
        }
    }

    if ($path == "cupom") {
        if ($_SERVER['REQUEST_METHOD'] == "GET") {
            $cupom->get($_GET['id']);
        }
    }
    
    if ($path == "email") {
        if ($_SERVER['REQUEST_METHOD'] == "POST") {
            $nome = $r->nome;
            $telefone = $r->telefone;
            $emaill = $r->email;
            $assunto = $r->assunto;
            $msg = $r->msg;
            $email->send($nome, $emaill, $assunto, $telefone, $msg);
        }
    }
    
    
    
    if ($path == "restaurante") {
        if ($_SERVER['REQUEST_METHOD'] == "GET") {
            if(isset($_GET['id'])){
                $restaurante->get($_GET['id'], '');
            }else if(isset($_GET['cidade'])){
                $restaurante->get('todos', $_GET['cidade']);
            }else{
                $restaurante->get('', '');
            }
            
        }
    }


    if ($path == "atualizar") {
        if ($_SERVER['REQUEST_METHOD'] == "POST") {
            $nome = $r->nome;
            $endereco = str_replace(',', '', $r->endereco);
            $cep = $r->cep;
            $cidade = str_replace(',', '', $r->uf);
            $bairro = $r->bairro;
            $complemento = $r->complemento;
            $numero = $r->numero;
            $email = $r->email;
            $tel = $r->tel;
            $aniversario = $r->aniversario;
            $senha = $r->senha;
            $user_inicial = array(
                'nome' => $nome,
                'endereco' => $endereco,
                'cep' => $cep,
                'cidade' => $cidade,
                'bairro' => $bairro,
                'complemento' => $complemento,
                'numero' => $numero,
                'email' => $email,
                'aniversario' => $aniversario,
                'tel' => $tel,
                'senha' => $senha
            );
            $atualizar->set($user_inicial, $email);
        }
    }

    if ($path == "token") {
        if ($_SERVER['REQUEST_METHOD'] == "GET") {
            $token = $_GET['token'];
            $email = $_GET['email'];
            $user_inicial = array(
                'token' => $token
            );
            $token_noty->set($user_inicial, $email);
        }
    }

    if ($path == "visita") {
        if ($_SERVER['REQUEST_METHOD'] == "GET") {
            $restaurante = $_GET['restaurante'];
            $de = $_GET['de'];
            $dt = date('d/m/Y');
            $hr = date('H:i');
            $user_inicial = array(
                'restaurante' => $restaurante,
                'de' => $de,
                'horario' => $dt . " as " . $hr
            );
            $visita->set($user_inicial);
        }
    }


    if ($path == "login") {
        if ($_SERVER['REQUEST_METHOD'] == "POST") {
            $nome = $r->nome;
            $endereco = str_replace(',', '', $r->endereco);
            $cep = $r->cep;
            $cidade = str_replace(',', '', $r->uf);
            $bairro = $r->bairro;
            $complemento = $r->complemento;
            $numero = $r->numero;
            $aniversaio = $r->aniversario;
            $email = $r->email;
            $tel = $r->tel;
            $senha = $r->senha;
            $user_inicial = array(
                'nome' => $nome,
                'endereco' => $endereco,
                'cep' => $cep,
                'cidade' => $cidade,
                'aniversaio' => $aniversario,
                'bairro' => $bairro,
                'complemento' => $complemento,
                'numero' => $numero,
                'email' => $email,
                'tel' => $tel,
                'senha' => $senha
            );
            $login->criar_usuario($user_inicial, $r->email);
        }
        if ($_SERVER['REQUEST_METHOD'] == "GET") {
            $email = $_GET['email'];
            $login->getlogin($email);
        }
    }

    if ($path == "pedidos") {
        if ($_SERVER['REQUEST_METHOD'] == "POST") {
            $de = $r->de;
            $nome = $r->nome;
            $endereco = $r->endereco;
            $cep = $r->cep;
            $cidadez = $r->cidade;
            $bairro = $r->bairro;
            $complemento = $r->complemento;
            $numero = $r->numero;
            $itens = $r->itens;
            $taxa = $r->taxa;
            $tel = $r->tel;
            $frete = $r->frete;
            $pagamento = $r->pagamento;
            $code = $r->code;
            $troco = $r->troco;
            $local = $r->local;
            $restaurante = $r->restaurante;

            $cupom = $r->cupom;
            $horario = $r->horario;

            $obs = $r->obs;
            $estado = $r->estado;
            
            
            $dt = date('d/m/Y');
            $hr = date('H:i');
            
            
            $user_inicial = array(
                'code' => $code,
                'restaurante' => $restaurante,
                'status' => 'not_pay',
                'de' => $de,
                'pagamento' => $pagamento,
                'nome' => $nome,
                'endereco' => $endereco,
                'cep' => $cidadez,
                'itens' => $itens,
                'cupom' => $cupom,
                'horario' => $dt . " as " . $hr,
                'troco' => $troco,
                'obs' => $obs,
                'local' => $local,
                'frete' => $frete,
                'cidade' => $cidadez,
                'bairro' => $bairro,
                'complemento' => $complemento,
                'numero' => $numero,
                'tel' => $tel,
                'estado' => $estado,
                'taxa' => $taxa
            );
            // print_r($user_inicial);
            $pedidos->criar_pedido($user_inicial);
			
			
			
			
        }
        if ($_SERVER['REQUEST_METHOD'] == "GET") {
            $de = $_GET['de'];
            $pedidos->get($de);
        }
    }
    
    

    if($path == "change"){
        $status = $_GET['status'];
        $id = $_GET['id'];
        $change->get_app_change($status, $id);
    }
    
    
    if ($path == "avaliacao") {
        if ($_SERVER['REQUEST_METHOD'] == "GET") {
            $avaliacao->get($_GET['id']);
        }
        if ($_SERVER['REQUEST_METHOD'] == "POST") {
            $de = $r->de;
            $qualidade = $r->qualidade;
            $entrega = $r->entrega;
            $avaliacao = $r->avaliacao;
            $texto = $r->texto;
            $dt = date('d/m/Y');
            $hr = date('H:i');
            
            
            
            $user_inicial = array(
                                  'data' => $dt . " as " . $hr,
                                  'de' => $de,
                                  'qualidade' => $qualidade,
                                  'entrega'=> $entrega,
                                  'avaliacao' => $avaliacao,
                                  'texto' => $texto,
                                  'restaurante' => $r->restaurante
                                  );
            require_once "connection.php";
            $chaves = "";
            $valores = "";
            foreach ($user_inicial as $chave => $valor) {
                $chaves = $chaves . $chave . ',';
                $valores = $valores . " '". $valor . "' " . ',';
            }
            $sql = "INSERT INTO avaliacoes (".substr($chaves, 0, -1).")
            VALUES (".substr($valores, 0, -1).")";
            if ($conn->query($sql) === TRUE) {
                
            }else{
                echo $conn->error;
            }
        }
    }

    if ($path == "cardapio") {
        if ($_SERVER['REQUEST_METHOD'] == "GET") {
            $cardapio->get($_GET['id']);
        }
        if ($_SERVER['REQUEST_METHOD'] == "POST") {
            if ($path == "cardapio") {
                $cardapio->create($r->nome, $r->descricao);
            }
        }
    }

    if ($path == "produtos") {
        if ($_SERVER['REQUEST_METHOD'] == "GET") {
            $produtos->get($url['1'], $url['2']);
            //$produtos->create("6", "Suco de açai 500ml", "Suco de 500ml", '8');
        }
        if ($_SERVER['REQUEST_METHOD'] == "POST") {
            if ($path == "produtos") {
                $produtos->create($r->de, $r->nome, $r->descricao, $r->preco);
            }
        }
    }

    if ($path == "produto") {
        if ($_SERVER['REQUEST_METHOD'] == "GET") {
            $produtos->get_product($url['1']);
            //$produtos->create("6", "Suco de açai 500ml", "Suco de 500ml", '8');
        }
    }
    
    if ($path == "notificacoes") {
        if ($_SERVER['REQUEST_METHOD'] == "GET") {
            $notificacoes->get($_GET['id']);
            //$produtos->create("6", "Suco de açai 500ml", "Suco de 500ml", '8');
        }
    }

    if ($path == "adicionais") {
        if ($_SERVER['REQUEST_METHOD'] == "GET") {
            //$adicionais->get($url['1']);
            $array = array(1, 2, 3, 4);
            $adicionaisjson = json_encode($array);
            $adicionais->create($adicionaisjson, "Molho especial", "", '1');
        }
        if ($_SERVER['REQUEST_METHOD'] == "POST") {
            if ($path == "adicionais") {
                $adicionais->create($r->de, $r->nome, $r->descricao, $r->preco);
            }
        }
    }
} else {
    print_r(array("status" => 404, "message" => "A classe " . $path . " não existe."));
}
