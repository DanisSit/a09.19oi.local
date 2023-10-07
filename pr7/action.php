<!doctype html>
<html lang="ru">
<head>
    <meta charset="utf-8"> 
    <title>форма</title>
</head>
<body>
<?php 
   /*
     Запрос имеет тип POST, обрабатываем данные
    */ 
    if( $_SERVER['REQUEST_METHOD'] !== 'POST' ) exit(' Не POST');
    if(empty($_POST['email'])) exit('Поле "Почта" не заполнено');
    if(empty($_POST['login'])) exit('Не указан Логин');
    if(empty($_POST['password'])) exit('Не указан пароль');
    if(strlen($_POST['password'])<8) exit('Пароль должен быть минимум 8 символов');
    if(empty($_POST['password-repeat'])) exit('Пароль не введён повторно');
    if($_POST['password'] !== $_POST['password-repeat']) exit('Пароли не совпадают');

    

    $host       = "db4.myarena.ru";      // Адрес сервера базы данных
    $dbname     = "u19978_a09";    // Имя базы данных
    $user       = "u19978_a09";           // Имя пользователя
    $password   = "I1w6G5a9I0";               // Пароль

    try {
        $connection = new PDO('mysql:host='.$host.';dbname='.$dbname.';charset=utf8', $user, $password);
    } catch (\Throwable $th) {
        echo "Ошибка подключения"; return;
    }

    $select = $connection->prepare( "SELECT COUNT(`id`) as cnt FROM `users` WHERE `login` = ? OR `email` = ?;" ); 
    $res = $select->execute([ $_POST['login'],$_POST['email'] ] );
    $row = $select->fetch();

    if(!$res ){
        exit( 'Ошибка регистрации...');
    }

    if( $res && isset($row['cnt']) && $row[0] > 0 ){
    exit( 'Ошибка регистрации... (Пользователь уже существует)' );
    }

    $email = $_POST['email'];
    $login = $_POST['login'];
    $pass = $_POST['password'];
    $pass_hash = password_hash($pass, PASSWORD_DEFAULT);

    $stmt = $connection->prepare("INSERT INTO `users` (email, login, password) VALUES (:email, :log, :pass)");

    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':log', $login);
    $stmt->bindParam(':pass', $pass_hash);

    if ($stmt->execute()) {
        echo 'Здравствуйте, '.$login.'. <br>';
        echo 'Вы зарегистрированы';
        } 
        else {
        echo "Ошибка при выполнении запроса";
        }

    ?>

</body>
</html>

