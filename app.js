// Assignment 01

// let num1 = +prompt("Enter the first number:");
// let num2 = +prompt("Enter the second number:");

// if (num1 > num2) {
//   console.log(num1 + " is greater than " + num2);
// }

// else if (num2 > num1) {
//   console.log(num2 + " is greater than " + num1);
// }

// else {
//   console.log("Both numbers are equal");
// }

// Assignment 02


// let num = +prompt("Enter a number:");

// if (num > 0) {
//   alert("The sign is +");
// }

// else if (num < 0) {
//   alert("The sign is -");
// }

// else {
//   alert("The number is zero");
// }


// Assignment 03

// let num1 = +prompt("Enter the first number:");
// let num2 = +prompt("Enter the second number:");
// let num3 = +prompt("Enter the third number:");
// let num4 = +prompt("Enter the fourth number:");
// let num5 = +prompt("Enter the fifth number:");

// let largestNum = num1;
// if (num2 > largestNum) {
//   largest = num2;
// }
// if (num3 > largestNum) {
//   largestNum = num3;
// }
// if (num4 > largestNum) {
//   largestNum = num4;
// }
// if (num5 > largestNum) {
//   largestNum = num5;
// }

// console.log("The largest number is " + largestNum);


// Assignment 04


// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//       console.log(i + " is even");
//     }
//     else {
//       console.log(i + " is odd");
//     }
//   }

// Assignment 05

// const marks = [80, 85, 90, 75, 60];

// const sum = marks.reduce((acc, curr) => acc + curr, 0);
// const avrg = sum / marks.length;

// let grade;
// if (avrg >= 90) {
//   grade = "A+";
// } else if (avrg >= 80 && avrg < 90) {
//   grade = "A";
// } else if (avrg >= 70 && avrg < 80) {
//   grade = "B";
// } else if (avrg >= 60 && avrg < 70) {
//   grade = "C";
// } else if (avrg >= 50 && avrg < 60) {
//   grade = "D";
// } else {
//   grade = "F";
// }

// console.log("Average mark: " + avrg);
// console.log("Grade: " + grade);

// Assignment 06

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }


// Assignment 07

// for (let i = 1; i <= 5; i++) {
//     let star = "";
//     for (let j = 1; j <= i; j++) {
//       star += "* ";
//     }
//     console.log(star);
//   }
