<!doctype html>
<html lang="ru">
<head>
    <meta charset="utf-8"> 
    <title>база данных</title>
</head>
<body>
<?php 
    if( $_SERVER['REQUEST_METHOD'] === 'POST' ){
        /*
         Запрос имеет тип POST, обрабатываем данные
        */ 
        echo 'Здравствуйте, '.htmlspecialchars($_POST['name']).'. <br>';
        echo 'Вам '.(int)$_POST['age'].' лет.'.'<br>';
    }
    ?>
    <form action="" method="post">
    <p>В данном примере, форма ссылается сама на себя</p>
    <p>Ваше имя: <input type="text" name="name"></p>
    <p>Ваш возраст: <input type="text" name="age"></p>
    <p><input type="submit"></p> 
    </form>

</body>
</html>