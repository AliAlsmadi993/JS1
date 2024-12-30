// function calculateFactorial(num) {
 
    
//     if (num === 0 || num === 1) {
//         return 1;
//     }
//     let result = 1;
//     for (let i = 2; i <= num; i++) {
//         result *= i;
//     }
//     return result;
// }

// const Input = prompt("Enter a number to calculate its factorial:");
// const number = parseInt(Input);

// if (isNaN(number)) {
//     console.log("Please enter a valid number.");
// } else {
//     const factorial = calculateFactorial(number);
// document.write(`Factorial of ${number} is ${factorial}`);
// }



// // (Recursion)


// function calculateFactorial(num=8) {
//     if (num < 0) {
//         return "Factorial is not defined for negative numbers.";
//     }
//     if (num === 0 || num === 1) {
//         return 1;
//     }
//     return num * calculateFactorial(num - 1);
// }

// const userInput = prompt("Enter a number to calculate its factorial:");
// const number = parseInt(userInput);

// if (isNaN(number)) {
//     console.log("Please enter a valid number.");
// } else {
//     const factorial = calculateFactorial(number);
//     console.log(`Factorial of ${number} is ${factorial}`);}






// function calculateFactorial(num) {
//     if (num < 0) {
//         return "Factorial is not defined for negative numbers.";
//     }
//     if (num === 0 || num === 1) {
//         return 1;
//     }
//     let result = 1;
//     while (num > 1) {
//         result *= num;
//         num--;
//     }
//     return result;
// }

// const userInput = prompt("Enter a number to calculate its factorial:");
// const number = parseInt(userInput);

// if (isNaN(number)) {
//     console.log("Please enter a valid number.");
// } else {
//     const factorial = calculateFactorial(number);
//     console.log(`Factorial of ${number} is ${factorial}`);
// }

