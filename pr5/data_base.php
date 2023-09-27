<!doctype html>
<html lang="ru">
<head>
    <meta charset="utf-8"> 
    <title>база данных</title>
</head>
<body>
<style>
.heading{
    background-color: green;
    align-items: center;
    color: aliceblue;
}
</style>
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

echo "<table border = 1>";
$result = $connection->query('SELECT * FROM `product`');
$row = $result->fetch( PDO::FETCH_ASSOC );

echo "<tr>";
foreach ($row as $key => $value) {
    echo "<td class = 'heading'>".$key."</td>";
}echo "</tr>";

do {
    echo "<tr>";
    foreach ($row as $key => $value) {
        echo "<td>".$value."</td>";
    }
    echo "</tr>"; 
} 
while ($row = $result->fetch( PDO::FETCH_ASSOC ));

echo "</table>";




?>
</body>
</html>
