let string = prompt('Введите трёхзначное число');
let a = string.charAt(0);
let b = string.charAt(1);
let c = string.charAt(2);
let result = +a + +b + +c;
console.log(a,'+',b,'+',c,'=',result);