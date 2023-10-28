let n = 1000;
let nun = 0;
for (;;) {
  if (n > 50 ) {
    n= n/2;
    nun++;
  }else{
    break;
  }
}
console.log("конечный резулбтат = ", n);
console.log("количество итераций = ",nun);