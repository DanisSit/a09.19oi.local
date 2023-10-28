function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let a = [];
sum = 0;
for (let i = 0; i < 10; i++) {
  a[i] = getRandomInt(21)-10;
}
for (let i = 0; i < 10; i++) {
  if (a[i]>=0) {
    sum = sum+a[i];
  }
}console.table(a);
console.log('сумма положительных = ',sum);