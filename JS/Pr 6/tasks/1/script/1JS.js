function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let day = 1 + getRandomInt(32);
if (day >=1 && day<=10) {
  console.log ('число',day,'расположена в 1 декаде');
}else if(day >=11 && day<=20){
  console.log ('число',day,'расположена во 2 декаде');
}else if(day >=21 && day<=31){
  console.log ('число',day,'расположена в 3 декаде');
} else { 
  ...
}
