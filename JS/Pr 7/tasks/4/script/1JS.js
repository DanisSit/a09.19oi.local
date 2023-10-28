function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let a = [];
for (let i = 0; i < 10; i++) {
  a[i] = getRandomInt(9999);
}
console.log(a);
for (let i = 0; i < 10; i++) {
  let a1 = a[i].toString();
  if (a1[0] ==1 || a1[0] ==2 || a1[0]==5) {
    console.log(a[i]);
  }
}
