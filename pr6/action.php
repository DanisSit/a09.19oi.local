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
    if(empty($_POST['age'])) exit('Поле "возраст" не заполнено');
    if(empty($_POST['name'])) exit('Поле "имя" не заполнено');
    if(!is_numeric( $_POST['age']) || $_POST['age'] < 1) exit('Поле "возраст" заполнено не правильно');

    echo 'Здравствуйте, '.htmlspecialchars($_POST['name']).'. <br>';
    echo 'Вам '.(int)$_POST['age'].' лет.'.'<br>';


    ?>

</body>
</html>

