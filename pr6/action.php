<!doctype html>
<html lang="ru">
<head>
    <meta charset="utf-8"> 
    <title>форма</title>
</head>
<body>
<?php 

if( $_SERVER['REQUEST_METHOD'] === 'POST' ){
    /*
     Запрос имеет тип POST, обрабатываем данные
    */ 

    if(empty($_POST['age'])) exit('Поле "возраст" не заполнено');
    if(!is_numeric( $_POST['age']) || $_POST['age'] < 1) exit('Поле "возраст" заполнено не правильно');
    if((int)$_POST['age'] < 1) exit('Поле "возраст" < 1');

    echo 'Здравствуйте, '.htmlspecialchars($_POST['name']).'. <br>';
    echo 'Вам '.(int)$_POST['age'].' лет.'.'<br>';
}

    ?>

</body>
</html>

