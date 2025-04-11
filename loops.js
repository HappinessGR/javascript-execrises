//Exercise 1: Temperature check
let temperature = 12;

if (temperature < 0) {
  console.log("It's freezing!");
} else if (temperature >= 0 && temperature <= 15) {
  console.log("It's cold.");
} else if (temperature >= 16 && temperature <= 25) {
  console.log("It's mild.");
} else {
  console.log("It's warm.");
}


// in switch
 

switch (true) {
  case (temperature < 0):
    console.log("It's freezing!");
    break;
  case (temperature >= 0 && temperature <= 15):
    console.log("It's cold.");
    break;
  case (temperature >= 16 && temperature <= 25):
    console.log("It's mild.");
    break;
  case (temperature > 25):
    console.log("It's warm.");
    break;
  default:
    console.log("Invalid temperature.");
}

//Exercise 2: Divisibility Check

let num = 1;

if (num%2===0 && num%3===0){
    console.log(`divisible by both`);

}
else if (num%2===0 && num%3!=0){
    console.log(`Divisible by 2. `);
    
}
else if (num%2!=0 && num%3===0){
    console.log(`Divisible by 3. `);
    
}
else{
    console.log(`Not divisible by both 2 and 3`);
    
}
//switch;

switch (true) {
  case (num % 2 === 0 && num % 3 === 0):
    console.log("Divisible by both");
    break;
  case (num % 2 === 0 && num % 3 !== 0):
    console.log("Divisible by 2.");
    break;
  case (num % 2 !== 0 && num % 3 === 0):
    console.log("Divisible by 3.");
    break;
  default:
    console.log("Not divisible by both 2 and 3");
}



//Exercise 3: For loops
 


let sum1 =0;
for (i=0; i<=10;i++){
  console.log(i);
   
}
for (i=0; i<=20;i++){
    if(i%2===0){
        console.log(`numbers divided by 2:${i}`);
    }
    
     
  }

  //Calculate the sum of all numbers from 1 to 100 and print the result. Hint: ‘+=
  for(i=1;i<=100;i++){
    sum1+=i
  }
  console.log(`the sum of 100 : ${sum1}`);


  //const numbers = [1, 2, 3, 4, 5]. Given the array of numbers, print each
// element to the console.

  const numbers = [1, 2, 3, 4, 5];

  for (i=0;i<numbers.length;i++){
    console.log(`the number : ${numbers[i]}`);
    
  }
  


  // while loop Execrise 4

  let e = 1;
while (e <= 10) {
  console.log(i);
  i++;
}

let j = 2;
while (j <= 20) {
  console.log(j);
  j += 2;
}

let k = 1;
let sum2= 0;
while (k <= 100) {
  sum2+= k;
  k++;
}
console.log("Sum from 1 to 100:", sum);

let m = 5;
while (m < 50) {
  console.log(m);
  m += 5;
}


//Do while Execrise 5
// let c = 1;
// do {
//   console.log(c);
//   x++;
// } while (x <= 10);

// let d= 1;
// let total = 0;
// do {
//   total += y;
//   d++;
// } while (y <= 100);
// console.log("Sum from 1 to 100:", total);

let userInput;
do {
  userInput = parseInt(prompt("Enter a number greater than 10:"));
} while (userInput <= 10);
console.log("You entered:", userInput);

let secretNumber = Math.floor(Math.random() * 10) + 1;
let guess;
do {
  guess = parseInt(prompt("Guess a number between 1 and 10:"));
} while (guess !== secretNumber);
console.log("Congratulations! You guessed it right.");


