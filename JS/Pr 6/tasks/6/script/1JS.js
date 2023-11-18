let string = prompt('Введите шестизначное число');

if (string.length == 6) {
    let a = string[0];
    let b = string[1];
    let c = string[2];
    let a1 = string[3];
    let b1 = string[4];
    let c1 = string[5];
    let result = +a + +b + +c;
    let result1 = +a1 + +b1 + +c1;
    
    console.log(a, '+', b, '+', c, '=', a1, '+', b1, '+', c1, '\n', (result == result1) ? 'Да' : 'HET');

} else {
    console.log(ошибка);
}