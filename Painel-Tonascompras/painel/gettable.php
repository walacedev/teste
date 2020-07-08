<?php error_reporting(0);

require_once '../api/connection.php';
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
function aa($id, $title_string, $msg_string, $fire_key)
{
  $registrationIds = array($id);

  $url = 'https://fcm.googleapis.com/fcm/send';
  $fields = array(
    'registration_ids' => $registrationIds,
    'notification' => array(
      "body" => $msg_string,
      "title" => $title_string,
      "sound" => "default"
    ),
    array("apns" => array(
      "payload" => array(
        "aps" => array(
          "badge" => 42
        )
      )
    ))
  );
  $fields = json_encode($fields);
  $headers = array(
    'Authorization: key=' . $fire_key,
    'Content-Type: application/json'
  );

  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_POST, true);
  curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);

  $result = curl_exec($ch);
  curl_close($ch);
}

session_start();
$local = "";
$user = $_SESSION['user'];
$senha = $_SESSION['senha'];
$sqlw = "SELECT * FROM funcionarios WHERE login = '{$user}' and senha = '{$senha}'";
$result = $conn->query($sqlw);
if ($result->num_rows > 0) {
  while ($usuario = $result->fetch_assoc()) {
    $id = $usuario['restaurante'];

    date_default_timezone_set('America/Sao_Paulo');
    $hora = date('H');
    $minutos = date('i');
    $segundos = date('s');

?>
    <html>


    <div class="table-responsive-lg">
      <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
        <thead>
          <tr>
            <th>#COD</th>
            <th>Cliente</th>
         

            <?php if ($usuario['cargo'] == "ADMIN") { ?>
              <th>Local</th>
            <?php } ?>
            <th>Entrega</th>
            <th>Status do pedido</th>
            <th>Outros</th>
          </tr>
        </thead>
        <tbody>
          <?php

          $new = 0;
          $sqlw = "SELECT * FROM pedidos WHERE status = 'not_pay' WHERE restaurante = '{$id}'";
          $result = $conn->query($sqlw);
          if ($result->num_rows > 0) {
            while ($pedido = $result->fetch_assoc()) {
              if ($pedido['pagamento'] != "Cartao de credito") {
                $new++;
              }
            }
          }
          $sqlw = "SELECT * FROM pedidos WHERE pagamento = 'Cartao de credito' and status ='not_pay' WHERE restaurante = '{$id}'";
          $result = $conn->query($sqlw);
          if ($result->num_rows > 0) {
            while ($pedido = $result->fetch_assoc()) {
              if ($pedido['pay'] == "Paga") {
                $new++;
              }
            }
          }




          $total = 0;
          if ($usuario['cargo'] == "ADMIN") {
            $sqlw = "SELECT * FROM pedidos";
          } else {
            $sqlw = "SELECT * FROM pedidos WHERE restaurante = '{$id}'";
          }

          $result = $conn->query($sqlw);
          if ($result->num_rows > 0) {
            while ($pedido = $result->fetch_assoc()) {

              $pedidoz = explode("as", $pedido['horario']);
              $pedidohorario = explode(":", $pedidoz[1]);

              $horapedido = $pedidohorario[0];
              $minutospedido = $pedidohorario[1];

              $tempo_new =  date('H:i', strtotime($hora . ":" .  $minutos));
              $tempo_hora =  date('H:i', strtotime($horapedido . ":" .  $minutospedido));
              $tempo = "";


              $intervalo  = abs(strtotime($hora . ":" . $minutos . ":00") - strtotime($horapedido . ":" . $minutospedido . ":00"));

              $mm   = round($intervalo / 60, 2);
              $tempo = $mm . " m";

              if ($tempo > 20 and $pedido['status'] == 'not_pay' and $pedido['atraso'] == '') {
                $sqlw = "SELECT * FROM locais WHERE id = '{$pedido['local']}'";
                $result = $conn->query($sqlw);
                if ($result->num_rows > 0) {
                  while ($locais = $result->fetch_assoc()) {
                    $message = "<!doctype html>
          <html>
            <head>
              <meta name='viewport' content='width=device-width' />
              <meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
              <title>Simple Transactional Email</title>
              <style>
                /* -------------------------------------
                    GLOBAL RESETS
                ------------------------------------- */
                
                /*All the styling goes here*/
                
                img {
                  border: none;
                  -ms-interpolation-mode: bicubic;
                  max-width: 100%; 
                }
                body {
                  background-color: #f6f6f6;
                  font-family: sans-serif;
                  -webkit-font-smoothing: antialiased;
                  font-size: 14px;
                  line-height: 1.4;
                  margin: 0;
                  padding: 0;
                  -ms-text-size-adjust: 100%;
                  -webkit-text-size-adjust: 100%; 
                }
                table {
                  border-collapse: separate;
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  width: 100%; }
                  table td {
                    font-family: sans-serif;
                    font-size: 14px;
                    vertical-align: top; 
                }
                /* -------------------------------------
                    BODY & CONTAINER
                ------------------------------------- */
                .body {
                  background-color: #f6f6f6;
                  width: 100%; 
                }
                /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
                .container {
                  display: block;
                  margin: 0 auto !important;
                  /* makes it centered */
                  max-width: 580px;
                  padding: 10px;
                  width: 580px; 
                }
                /* This should also be a block element, so that it will fill 100% of the .container */
                .content {
                  box-sizing: border-box;
                  display: block;
                  margin: 0 auto;
                  max-width: 580px;
                  padding: 10px; 
                }
                /* -------------------------------------
                    HEADER, FOOTER, MAIN
                ------------------------------------- */
                .main {
                  background: #ffffff;
                  border-radius: 3px;
                  width: 100%; 
                }
                .wrapper {
                  box-sizing: border-box;
                  padding: 20px; 
                }
                .content-block {
                  padding-bottom: 10px;
                  padding-top: 10px;
                }
                .footer {
                  clear: both;
                  margin-top: 10px;
                  text-align: center;
                  width: 100%; 
                }
                  .footer td,
                  .footer p,
                  .footer span,
                  .footer a {
                    color: #999999;
                    font-size: 12px;
                    text-align: center; 
                }
                /* -------------------------------------
                    TYPOGRAPHY
                ------------------------------------- */
                h1,
                h2,
                h3,
                h4 {
                  color: #000000;
                  font-family: sans-serif;
                  font-weight: 400;
                  line-height: 1.4;
                  margin: 0;
                  margin-bottom: 30px; 
                }
                h1 {
                  font-size: 35px;
                  font-weight: 300;
                  text-align: center;
                  text-transform: capitalize; 
                }
                p,
                ul,
                ol {
                  font-family: sans-serif;
                  font-size: 14px;
                  font-weight: normal;
                  margin: 0;
                  margin-bottom: 15px; 
                }
                  p li,
                  ul li,
                  ol li {
                    list-style-position: inside;
                    margin-left: 5px; 
                }
                a {
                  color: #3498db;
                  text-decoration: underline; 
                }
                /* -------------------------------------
                    BUTTONS
                ------------------------------------- */
                .btn {
                  box-sizing: border-box;
                  width: 100%; }
                  .btn > tbody > tr > td {
                    padding-bottom: 15px; }
                  .btn table {
                    width: auto; 
                }
                  .btn table td {
                    background-color: #ffffff;
                    border-radius: 5px;
                    text-align: center; 
                }
                  .btn a {
                    background-color: #ffffff;
                    border: solid 1px #3498db;
                    border-radius: 5px;
                    box-sizing: border-box;
                    color: #3498db;
                    cursor: pointer;
                    display: inline-block;
                    font-size: 14px;
                    font-weight: bold;
                    margin: 0;
                    padding: 12px 25px;
                    text-decoration: none;
                    text-transform: capitalize; 
                }
                .btn-primary table td {
                  background-color: #3498db; 
                }
                .btn-primary a {
                  background-color: #3498db;
                  border-color: #3498db;
                  color: #ffffff; 
                }
                /* -------------------------------------
                    OTHER STYLES THAT MIGHT BE USEFUL
                ------------------------------------- */
                .last {
                  margin-bottom: 0; 
                }
                .first {
                  margin-top: 0; 
                }
                .align-center {
                  text-align: center; 
                }
                .align-right {
                  text-align: right; 
                }
                .align-left {
                  text-align: left; 
                }
                .clear {
                  clear: both; 
                }
                .mt0 {
                  margin-top: 0; 
                }
                .mb0 {
                  margin-bottom: 0; 
                }
                .preheader {
                  color: transparent;
                  display: none;
                  height: 0;
                  max-height: 0;
                  max-width: 0;
                  opacity: 0;
                  overflow: hidden;
                  mso-hide: all;
                  visibility: hidden;
                  width: 0; 
                }
                .powered-by a {
                  text-decoration: none; 
                }
                hr {
                  border: 0;
                  border-bottom: 1px solid #f6f6f6;
                  margin: 20px 0; 
                }
                /* -------------------------------------
                    RESPONSIVE AND MOBILE FRIENDLY STYLES
                ------------------------------------- */
                @media only screen and (max-width: 620px) {
                  table[class=body] h1 {
                    font-size: 28px !important;
                    margin-bottom: 10px !important; 
                  }
                  table[class=body] p,
                  table[class=body] ul,
                  table[class=body] ol,
                  table[class=body] td,
                  table[class=body] span,
                  table[class=body] a {
                    font-size: 16px !important; 
                  }
                  table[class=body] .wrapper,
                  table[class=body] .article {
                    padding: 10px !important; 
                  }
                  table[class=body] .content {
                    padding: 0 !important; 
                  }
                  table[class=body] .container {
                    padding: 0 !important;
                    width: 100% !important; 
                  }
                  table[class=body] .main {
                    border-left-width: 0 !important;
                    border-radius: 0 !important;
                    border-right-width: 0 !important; 
                  }
                  table[class=body] .btn table {
                    width: 100% !important; 
                  }
                  table[class=body] .btn a {
                    width: 100% !important; 
                  }
                  table[class=body] .img-responsive {
                    height: auto !important;
                    max-width: 100% !important;
                    width: auto !important; 
                  }
                }
                /* -------------------------------------
                    PRESERVE THESE STYLES IN THE HEAD
                ------------------------------------- */
                @media all {
                  .ExternalClass {
                    width: 100%; 
                  }
                  .ExternalClass,
                  .ExternalClass p,
                  .ExternalClass span,
                  .ExternalClass font,
                  .ExternalClass td,
                  .ExternalClass div {
                    line-height: 100%; 
                  }
                  .apple-link a {
                    color: inherit !important;
                    font-family: inherit !important;
                    font-size: inherit !important;
                    font-weight: inherit !important;
                    line-height: inherit !important;
                    text-decoration: none !important; 
                  }
                  #MessageViewBody a {
                    color: inherit;
                    text-decoration: none;
                    font-size: inherit;
                    font-family: inherit;
                    font-weight: inherit;
                    line-height: inherit;
                  }
                  .btn-primary table td:hover {
                    background-color: #34495e !important; 
                  }
                  .btn-primary a:hover {
                    background-color: #34495e !important;
                    border-color: #34495e !important; 
                  } 
                }
              </style>
            </head>
            <body class=''>
              <span class='preheader'>Veja o pedido em atraso no seu restaurante.</span>
              <table role='presentation' border='0' cellpadding='0' cellspacing='0' class='body'>
                <tr>
                  <td>&nbsp;</td>
                  <td class='container'>
                    <div class='content'>
          
                      <!-- START CENTERED WHITE CONTAINER -->
                      <table role='presentation' class='main'>
          
                        <!-- START MAIN CONTENT AREA -->
                        <tr>
                          <td class='wrapper'>
                            <table role='presentation' border='0' cellpadding='0' cellspacing='0'>
                              <tr>
                                <td>
                                  <p>Olá, temos um problema!</p>
                                  <p>A um pedido no restaurante <b>{$locais['nome']}</b> atrasado à mais de {$tempo} minutos.</p>
                                  <table role='presentation' border='0' cellpadding='0' cellspacing='0'>
                                    <tbody>
                                      <tr>
                                        <td align='left'>
                                          <table role='presentation' border='0' cellpadding='0' cellspacing='0'>
                                            <tbody>
                                              <tr>
                                             <h2>Número do pedido:</h2>
                                             <a class='btn btn-primary'><b><font color='red'>#{$pedido['id']}00</b></font></a>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <p>Não deixe seus clientes esperando.</p>
                                  <p>Bom trabalho.</p>
                      <p>E-mail enviado pelo sistema Fast Food System</p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
          
                      <!-- END MAIN CONTENT AREA -->
                      </table>
                      <!-- END CENTERED WHITE CONTAINER -->
          
                      <!-- START FOOTER -->
                      <div class='footer'>
                        <table role='presentation' border='0' cellpadding='0' cellspacing='0'>
                          <tr>
                            <td class='content-block'>
                              <span class='apple-link'>Fast Food System</span>
                              <br> Favor não responder à este e-mail.
                            </td>
                          </tr>
                          <tr>
                            <td class='content-block powered-by'>
                              Atenciosamente, FFS.
                            </td>
                          </tr>
                        </table>
                      </div>
                      <!-- END FOOTER -->
          
                    </div>
                  </td>
                  <td>&nbsp;</td>
                </tr>
              </table>
            </body>
          </html>";
                    $headers = 'From: Fast Food System <ffs@wallestudios.com.br>' . "\r\n";
                    $headers .= 'MIME-Version: 1.0' . "\r\n";
                    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
                    $message = wordwrap($message, 70);

                    mail($email_aviso, "Pedido atrasado #{$pedido['id']}00 em {$locais['nome']}", $message, $headers);
                  }
                }

                $atrib = "UPDATE pedidos SET atraso = 'sim' where id = '{$pedido['id']}'";
                if ($conn->query($atrib) === TRUE) {
                }
              }

              if ($pedido['status'] != "success" and $pedido['status'] != "canceled" and $pedido['status'] != "estorned" and $pedido['pagamento'] == "Cartao de credito") {
                $pedidoz = explode("as", $pedido['horario']);
                $pedidohorario = explode(":", $pedidoz[1]);

                $horapedido = $pedidohorario[0];
                $minutospedido = $pedidohorario[1];

                $tempo_new =  date('H:i', strtotime($hora . ":" .  $minutos));
                $tempo_hora =  date('H:i', strtotime($horapedido . ":" .  $minutospedido));
                $tempo = "";


                $intervalo  = abs(strtotime($hora . ":" . $minutos . ":00") - strtotime($horapedido . ":" . $minutospedido . ":00"));

                $mm   = round($intervalo / 60, 2);
                $tempo = $mm . " m";


                if ($tempo >= 15 and $pedido['pay'] != "Paga") {
                  $ch = curl_init("https://ws.pagseguro.uol.com.br/v2/transactions/cancels?email=fernandavieira141@gmail.com&token=9a0ab1251-1ffd-40b0-b918-421ec73fbd10ab1b1d02418d962ed671295ac105f4e50a0e-d61e-48a9-8a8a-881fe071a56b&transactionCode=" . $array["transactions"]['transaction'][0]['code']);
                  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                  curl_setopt($ch, CURLINFO_HEADER_OUT, true);
                  curl_setopt($ch, CURLOPT_POST, true);
                  $result = curl_exec($ch);
                  curl_close($ch);

                  $sqlww = "SELECT * FROM clientes where id = '{$pedido['de']}'";
                  $resultc = $conn->query($sqlww);
                  if ($resultc->num_rows > 0) {
                    while ($cliente = $resultc->fetch_assoc()) {
                      $token = $cliente['token'];
                      aa($token, 'Pedido #' . $pedido['id'] . '00', 'Faça seu pedido novamente, seu cartão não aprovou :(', $fire_key);
                    }
                  }
                  $atrib = "UPDATE pedidos SET status = 'canceled' where id = '{$pedido['id']}'";
                  if ($conn->query($atrib) === TRUE) {
                  }
                }
              }

              if ($pedido['status'] != "success" and $pedido['pagamento'] != "Cartao de credito" and $pedido['status'] != "canceled") {



          ?>
                <?php
                if ($pedido['status'] == 'not_pay') {
                  echo "<tr style='background-color: #F2F5A9'>";
                } elseif ($pedido['status'] == 'preparing') {
                  echo "<tr style='background-color: #E6E6E6'>";
                } elseif ($pedido['status'] == 'quit_sender') {
                  echo "<tr style='background-color: #A9E2F3'>";
                }
                ?>




                <td>#<?php echo $pedido['id']; ?>00</td>
                <td>
                  <?php echo $pedido['nome']; ?>
                </td>
                <?php if ($usuario['cargo'] == "ADMIN") { ?>
                  <td><?php

                      $sqlwa = "SELECT * FROM restaurantes WHERE id = '{$pedido['restaurante']}'";
                      $resulta = $conn->query($sqlwa);
                      if ($resulta->num_rows > 0) {
                        while ($resa = $resulta->fetch_assoc()) {
                          echo $resa['nome'];
                        }
                      }

                      ?></td>
                <?php } ?>
                <td><?php 


                if($pedido['pagamento'] == 'Buscar no local'){
                  echo "Buscar no local";
                }else{
                  echo get_bairro(get_endereco($pedido['endereco'], 'bairro', $conn), $conn);
                }

                ;
                   if ($pedido['status'] == 'not_pay') {
                    $new++; 
                   }
                   ?></td>
                <?php

                ?>
                <td>
                  <form action="action_file.php" id='form<?php echo $pedido['id'] ?>' method='get'>
                    <input name="id" type="text" value="<?php echo $pedido['id'] ?>" style="display: none">
                    <select class="form-control" name="status" id="select<?php echo $pedido['id'] ?>" onchange="sendform('<?php echo $pedido['id'] ?>')">
                      <option value="not_pay">Aguardando preparo</option>
                      <option value="preparing">Pedido em preparo</option>
                      <option value="quit_sender">Pedido a caminho</option>
                      <option value="success">Pedido entregue</option>
                      <option value="canceled">Pedido cancelado</option>
                    </select>
                  </form>
                  <script>
                    $('#select<?php echo $pedido['id'] ?>').val('<?php echo $pedido['status'] ?>')
                  </script>

                </td>
                <td><a href="acao.php?id=<?php echo $pedido['id'] ?>">Detalhes</a></td>
                </tr>



              <?php
              }
              if ($pedido['status'] != "success" and $pedido['status'] != "canceled" and $pedido['status'] != "estorned" and $pedido['pagamento'] == "Cartao de credito" and $pedido['pay'] == "Paga") {
              ?>

                <tr>
                  <td>#<?php echo $pedido['id'];
                        ?>00</td>
                  <td>
                    <?php echo $pedido['nome']; ?>
                  </td>
                  <td>
                    <?php
                    $pedidoz = explode("as", $pedido['horario']);
                    $pedidohorario = explode(":", $pedidoz[1]);

                    $horapedido = $pedidohorario[0];
                    $minutospedido = $pedidohorario[1];

                    $tempo_hora = (int) $hora - (int) $horapedido;
                    $tempo_minutos = (int) $minutos - (int) $minutospedido;


                    $tempo = "";
                    $intervalo  = abs(strtotime($hora . ":" . $minutos . ":00") - strtotime($horapedido . ":" . $minutospedido . ":00"));

                    $mm   = round($intervalo / 60, 2);
                    $tempo = $mm . " m";

                    echo "<font color='red'>{$tempo}</font>";

                    ?>
                  </td>
                  <td><?php echo $pedido['bairro'] ?></td>
                  <td><?php
                      if ($pedido['status'] == 'not_pay') {
                        echo "<font color='gold'>Aguardando preparo</font>";
                      } elseif ($pedido['status'] == 'preparing') {
                        echo "Aguardando entrega";
                      } elseif ($pedido['status'] == 'quit_sender') {
                        echo "<font color='green'>Pedido sendo entregue</font>";
                      } elseif ($pedido['status'] == 'canceled') {
                        echo "<font color='red'>Pedido cancelado</font>";
                      } elseif ($pedido['status'] == 'estorned') {
                        echo "<font color='green'>Pedido estornado</font>";
                      }
                      ?></td>
                  <td>
                    <?php
                    if ($pedido['status'] == 'not_pay') {
                      echo "<a href='acao.php?id={$pedido['id']}'>Preparar pedido</a>";
                    } elseif ($pedido['status'] == 'preparing') {
                      echo "<a href='acao.php?id={$pedido['id']}'>Entregar pedido</a>";
                    } elseif ($pedido['status'] == 'quit_sender') {
                      echo "<a href='acao.php?id={$pedido['id']}'>Confirmar entrega</a>";
                    }
                    ?>
                  </td>
                </tr>

      <?php }
            }
          }
        }
      } ?>

      <?php
      if ($new >= 1) {
        $myAudioFile = "audios/pup.mp3";
        echo '<audio autoplay="true" style="display:none;">
         <source src="' . $myAudioFile . '" type="audio/wav">
      </audio>';
      }
      ?>
        </tbody>
      </table>
    </div>
    <script>
      function sendform(id) {
        $.get("action_file.php", $('#form' + id).serialize());
        this.preventDefault();
      };
    </script>

    </html>