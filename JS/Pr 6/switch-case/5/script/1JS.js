function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let non = getRandomInt(4);
switch (non) {
  case 0:
    console.log('1','Зима');
    break;
  case 1:
    console.log('2','Весна');
    break;
  case 2:
    console.log('3','Лето');
    break;
  case 3:
    console.log('4','Осень');
    break;
  default:
    console.log('None');
    break;
}
