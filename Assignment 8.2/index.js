// for , while , continue , if , else , switch

let sum = 0;

for (let i = 0; i < 5; i++) {
  sum += i;
}

console.log(sum);
let ans = [];

let i = 1;
while (i <= 10) {
  ans.push(i * 24);
  i++;
}

console.log(ans);

let result = true;

if (result) {
  console.log("True");
} else {
  console.log("False");
}

let data = 0;

function test(data) {
  switch (data) {
    case 0:
      return "Zero";
    case 1:
      return "One";
    default:
      return "Greater than One or not a number";
  }
}
console.log(test(data));

// Recursion

function fatorial(num) {
  if (num === 1) {
    return 1;
  }

  return num * fatorial(num - 1);
}

console.log(fatorial(7));

//Closure

function Closure(a) {
  return function (b) {
    return a + b;
  };
}

let ans1 = Closure(5)(8);

console.log(ans1);
