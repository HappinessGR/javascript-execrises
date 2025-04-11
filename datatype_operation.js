let integerNumber = 10;
let floatNumber = 3.5;

let addition = integerNumber + floatNumber;
let subtraction = integerNumber - floatNumber;
let multiplication = integerNumber * floatNumber;
let division = integerNumber / floatNumber;
let modulus = integerNumber % floatNumber;
let exponentiation = integerNumber ** 2;

console.log("Integer Number:", integerNumber);
console.log("Floating Number:", floatNumber);
console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);
console.log("Modulus:", modulus);
console.log("Exponentiation (integerNumber ** 2):", exponentiation);

//Exercise 2: Boolean and Operators

let x=8;
let y=12;
console.log(`x is greater than y: ${x>y}`)
console.log(`x is less than y: ${x<y}`)
console.log(`x is less than y: ${x===y}`)
console.log(`x is less than y: ${x!=y}`)


let a=true;
let b=false;
console.log(`a AND B ${a&&b}`)
console.log(`a OR B ${a||b}`)
console.log(`NOT a  ${!a}`)




let p = 10;

p += 5;
console.log("After += 5:", p);

p -= 3;
console.log("After -= 3:", p);

p *= 2;
console.log("After *= 2:", p);

p /= 4;
console.log("After /= 4:", p);

p %= 3;
console.log("After %= 3:", p);
