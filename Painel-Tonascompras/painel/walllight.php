<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
    <title>WallLight</title>
    <style>
        table,
        td,
        th {
            border: 1px solid black;
        }

        table {
            border-collapse: collapse;
            width: 100%;
        }

        td {
            height: 50px;
            vertical-align: bottom;
        }
    </style>
</head>

<body>
    <a href="home.php">Voltar</a>
    <br><br>
    <p>Esta é uma versão de pedidos <?php echo $sistema_nome ?> para acessos com baixa performace.</p>
    <br>
    <br>
    <div id="bodytable"></div>
    <script>
        $.get('gettable.php', function(sucess) {
            $('#bodytable').html(sucess);
        })
        setInterval(function(e) {
            $.get('gettable.php', function(sucess) {
                $('#bodytable').html(sucess);
            })
        }, 5000);
    </script>
</body>

</html>