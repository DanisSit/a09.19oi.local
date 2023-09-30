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


    ?>

</body>
</html>

