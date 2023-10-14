let a = Number(prompt("Введите первое число"));
let b = Number(prompt("Введите второе число"));
if (a == b) {
  alert('числа ' + a + ' и ' + b + ' равны');
} else {
  if (a > b) {
    c = a * 2;
    alert(
      'число ' + a + ' больше ' + b + "\n" +
      b + '*2=' + c);
  } else {
    c = b + 10;
    alert(
      'число ' + a + ' меньше ' + b + "\n" +
      b + '+10=' + c);
  }
};

