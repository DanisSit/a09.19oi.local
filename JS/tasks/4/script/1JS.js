let string = prompt('Введите любую строку с цифрами');
let result = string.charAt(0)
if (Number(result) >= 1 && Number(result) <= 3) {
  console.log('Строка начинается c 1, 2 или 3? Да!');
} else {
  console.log('Строка начинается c 1, 2 или 3? Нет!');
}