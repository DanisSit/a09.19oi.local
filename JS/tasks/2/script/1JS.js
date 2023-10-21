function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let month = getRandomInt(12);
month++
if (month >=1 && month<=2 || month ==12) {
  console.log (month,'это месяц зимы');
}else if(month >=3 && month<=5){
  console.log (month,'это месяц весны');
}else if(month >=6 && month<=8){
  console.log (month,'это месяц лета');
}else if(month >=9 && month<=11){
  console.log (month,'это месяц осени');
}
