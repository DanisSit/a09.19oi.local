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


try {
    $connection = new PDO('mysql:host='.$host.';dbname='.$dbname.';charset=utf8', $user, $password);
} catch (\Throwable $th) {
    echo "Ошибка подключения"; return;
}


?>
</body>
</html>
