<!doctype html>
<html lang="ru">
<head>
    <meta charset="utf-8"> 
</head>
<body>
<?php
$host       = "db4.myarena.ru";      // Адрес сервера базы данных
$dbname     = "u19978_a09";    // Имя базы данных
$user       = "u19978_a09";           // Имя пользователя
$password   = "I1w6G5a9I0";               // Пароль

if(empty($_POST['login'])) exit('Не указан Логин');
if(empty($_POST['password'])) exit('Не указан пароль');

try {
    $connection = new PDO('mysql:host='.$host.';dbname='.$dbname.';charset=utf8', $user, $password);
} catch (\Throwable $th) {
    echo "Ошибка подключения"; return;
}

$select = $connection->prepare( "SELECT * FROM `users` WHERE `login` = ? OR `email` = ?;" ); 
    $res = $select->execute([ $_POST['login'],$_POST['email'] ] );
    $row = $select->fetch();

    if(!$res ){
        exit( 'Ошибка регистрации...');
    }

    if( $res && isset($row['cnt']) && $row[0] > 0 ){
    exit( 'Ошибка регистрации... (Пользователь уже существует)' );
    }

?>
</body>
</html>
