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

require_once "classes/destaque.php";
$destaque = new Destaque();

require_once "classes/bairros.php";
$bairros = new Bairros();

require_once "classes/atualizar.php";
$atualizar = new Atualizar();

require_once "classes/horario.php";
$horario = new Horario();

require_once "classes/cupom.php";
$cupom = new Cupom();

require_once "classes/token_noty.php";
$token_noty = new Token();

require_once "classes/locais.php";
$locais = new Locais();

require_once "classes/categorias.php";
$categorias = new Categorias();

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
            $horario->get();
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

    if ($path == "bairros") {
        if ($_SERVER['REQUEST_METHOD'] == "GET") {
            $bairros->get();
        }
    }

    if ($path == "cupom") {
        if ($_SERVER['REQUEST_METHOD'] == "GET") {
            $cupom->get($_GET['id']);
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


    if ($path == "login") {
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
            $tel = $r->tel;
            $frete = $r->frete;
            $pagamento = $r->pagamento;
            $code = $r->code;
            $troco = $r->troco;
            $local = $r->local;

            $cupom = $r->cupom;
            $horario = $r->horario;

            $obs = $r->obs;
            $estado = $r->estado;
            
            
            $dt = date('d/m/Y');
            $hr = date('H:i');
            
            
            $user_inicial = array(
                'code' => $code,
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
                'estado' => $estado
            );
            // print_r($user_inicial);
            $pedidos->criar_pedido($user_inicial);
			
			
			
			
        }
        if ($_SERVER['REQUEST_METHOD'] == "GET") {
            $de = $_GET['de'];
            $pedidos->get($de);
        }
    }


    if ($path == "cardapio") {
        if ($_SERVER['REQUEST_METHOD'] == "GET") {
            $cardapio->get();
        }
        if ($_SERVER['REQUEST_METHOD'] == "POST") {
            if ($path == "cardapio") {
                $cardapio->create($r->nome, $r->descricao);
            }
        }
    }

    if ($path == "produtos") {
        if ($_SERVER['REQUEST_METHOD'] == "GET") {
            $produtos->get($url['1']);
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
