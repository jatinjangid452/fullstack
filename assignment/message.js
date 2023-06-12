console.log("q1 print num:")
for(let i=0;i<=10;i++){
    console.log(i);
}

console.log(" q2 find even:")
let n=2
while(n<=10){
    console.log(n)
    n+=2;
}

console.log("q3 sum of number:")
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

console.log("q4 sum of product:")
let pro = 1;
let num = 1;

while (num <= 10) {
  pro *= num;
  num++;
}

console.log(pro);

console.log("q5 table:")
let a = 5;
for (let i = 1; i <= 10; ++i){
    console.log(a + " * " + i +" = " + a * i);}

console.log("q6 factorial:")
const number = 6;
let fact = 1;
let i = 1;

while (i <= number) {
  fact *= i;
  i++;
}

console.log(fact);


console.log("q7 Fibonacci Series:");
const num1 = 10;
let p = 0;
let q = 1;
for (let i = 1; i <= num1; i++) {
  console.log(p);
  const next = p + q;
  p = q;
  q = next;
}

console.log("q8 prime no:")
const num2 = 17;
let isPrime = true;
let b = 2;
while (i < num2) {
  if (num2 % i === 0) {
    isPrime = false;
    break;
  }
  i++;
}
if (isPrime) {
  console.log(`${num2} is a prime number.`);
} else {
  console.log(`${num2} is not a prime number.`);
}


