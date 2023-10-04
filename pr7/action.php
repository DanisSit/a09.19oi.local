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

    echo 'Здравствуйте, '.htmlspecialchars($_POST['login']).'. <br>';
    echo 'Вы зарегистрированы';

    $host       = "db4.myarena.ru";      // Адрес сервера базы данных
    $dbname     = "u19978_a09";    // Имя базы данных
    $user       = "u19978_a09";           // Имя пользователя
    $password   = "I1w6G5a9I0";               // Пароль

    try {
        $connection = new PDO('mysql:host='.$host.';dbname='.$dbname.';charset=utf8', $user, $password);
    } catch (\Throwable $th) {
        echo "Ошибка подключения"; return;
    }
    $stmt = $connection->prepare("INSERT INTO users (id, email, 'login', 'password') VALUES (:value1, :value2, :value3, :value4)");
    $stmt->bindParam(':value1', $value1);
    $stmt->bindParam(':value2', $value2);

    ?>

</body>
</html>

