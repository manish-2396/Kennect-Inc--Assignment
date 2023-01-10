// Given a number x, find out if it is a prime number or not , use javascript and find out the
// difference between Next prime number after X and X

const isPrimeNumberorNot = (num) => {
  let count = 0;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      count++;
    }
  }

  if (count === 0) {
    return true;
  } else {
    return false;
  }
};

function findPrimeorNextPrime(num) {
  let firstNumber = num;
  let secondNumber;

  if (isPrimeNumberorNot(num)) {
    console.log(`yes,${num} is a prime number`);
  } else {
    console.log(`no,${num} is not a prime number`);
  }

  while (true) {
    num++;
    if (isPrimeNumberorNot(num)) {
      secondNumber = num;
      break;
    }
  }

  console.log(
    `diffrent between ${firstNumber} and ${secondNumber}(next prime) is ${
      secondNumber - firstNumber
    }`
  );
}

let x = 101

findPrimeorNextPrime(x);
