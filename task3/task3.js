// p1

// function tellFortune(jobTitle, geographicLocation, partnersName, numberOfChildren) {
//     const fortune = ` You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersName} with ${numberOfChildren} kids.`;
//     document.write(fortune);
//     return fortune;
// }

// tellFortune('software engineer', 'Jordan', 'BMW M5', 0);


// p2*****************************************************************************************

// function calculateDogAge(puppyAge) {
//     const dogYears = puppyAge * 7;
//     const message = `Your doggie is ${dogYears} years old in dog years!`;
//     console.log(message);
//     return message;
// }

// calculateDogAge(2);


// p3*********************************************************************************

// function calculateSupply(age, amountPerDay) {
//     const maxAge = 65;
//     const totalAmount = (maxAge - age) * amountPerDay * 365;
//     const message = `You will need ${totalAmount} cups of coffe to last you until the ripe old age of ${maxAge}`;
//     console.log(message);
//     return message;
// }

// calculateSupply(23, 4);

// p4*********************************************************************


// function greet(name) {
//     document.write `Hello ${name}`;
    
// }

// greet("ali");



// p5***************************************************

/*

what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/


// The errors are:

// Duplicate function names: double is defined multiple times with the same name.
// Invalid parameter names: Numbers (7) and strings ('7') cannot be used as parameter names.
// Undefined variable: In the first function, x is not defined.

 

// p6*****************************************************

// function double1(x) {
//     return 2 * x;
// }

// function double2(x) {
//     return 2 * x;
// }

// function double3(x) {
//     return 2 * x;
// }

// double1(7);
// double2(7);
// double3(7);


// p7 *************************************************

// function cube(x) {
//     return x ** 3;
// }

// console.log(cube(4));



// p8******************************************************

// function multiply(a, b) {
//     return a * b;
// }

// console.log(multiply(3, 4)); 
// console.log(multiply(5, 4));



// p9*****************************************************************


// function canIGetADrivingLicense(age) {
//     if (age >= 20) {
//         return "yes you can";
//     } else {
//         const yearsLeft = 20 - age;
//         return `please come back after ${yearsLeft} years to get one`;
//     }
// }

// console.log(canIGetADrivingLicense(21));
// console.log(canIGetADrivingLicense(17)); 
// console.log(canIGetADrivingLicense(20));

// p10*****************************************************************

// function sameLength(str1, str2) {
//     return str1.length === str2.length;
// }

// console.log(sameLength("tree", "clue")); 
// console.log(sameLength("tree", "car")); 


// p11*************************************************************

// function largerNumber(num1, num2) {
//     return num1 > num2 ? num1 : num2;
// }

// console.log(largerNumber(5, 6)); 
// console.log(largerNumber(5, 3)); 


// p12***********************************************************************

// function largerNumber(num1, num2) {
//     return num1 > num2 ? num1 : num2;
// }

// function smallerNumber(num1, num2, num3) {
//     return Math.min(num1, num2, num3);
// }

// console.log(largerNumber(5, 6));
// console.log(largerNumber(5, 3));

// console.log(smallerNumber(8, 6, 7));
// console.log(smallerNumber(5, 99, 34));
// console.log(smallerNumber(5, 99, 3));
// console.log(smallerNumber(5, 3, 3));


// p13**********************************************************

// function shorterString(str1, str2, str3, str4, str5) {
//     return [str1, str2, str3, str4, str5].reduce((shortest, current) => current.length < shortest.length ? current : shortest);
// }

// console.log(shorterString("r", "school", "car", "by", "github"));
// console.log(shorterString("irrrrr", "tr", "car", "by", "github"));


// p14**************************************************************************

// function shorterString(str1, str2, str3, str4, str5) {
//     return [str1, str2, str3, str4, str5].reduce((shortest, current) => current.length < shortest.length ? current : shortest);
// }

// function longerString(str1, str2, str3, str4) {
//     return [str1, str2, str3, str4].reduce((longest, current) => current.length > longest.length ? current : longest);
// }

// console.log(shorterString("air", "school", "car", "by", "github"));
// console.log(shorterString("air", "tr", "car", "by", "github"));
// console.log(shorterString("by", "tr", "car", "air", "github"));
// console.log(shorterString("air", "by", "car", "school", "github"));
// console.log(shorterString("air", "tr", "by", "car", "github"));
// console.log(shorterString("air", "tr", "car", "github", "by"));

// console.log(longerString("air", "school", "car", "github"));
// console.log(longerString("air", "schoo", "car", "github"));


// p15**********************************************************************************

// function isEven(number) {
//     return number % 2 === 0;
// }

// console.log(isEven(1));
// console.log(isEven(2)); 

// p16*****************************************************************************8

// function isOdd(number) {
//     return number % 2 !== 0;
// }

// console.log(isOdd(4)); 
// console.log(isOdd(5));


// p17*********************************************************************************

// function positive(number) {
//     return Math.abs(number);
// }

// console.log(positive(4)); 
// console.log(positive(-5)); 

// p18********************************************************************************

// function fullName(firstName, lastName) {
//     return firstName + " " + lastName;
// }

// console.log(fullName("Ali", "Al-smadi"));  



// p19**************************************************************************************88

// function average(num1, num2, num3, num4, num5) {
//     let sum = num1 + num2 + num3 + num4 + num5;
//     return sum / 5;
// }

// console.log(average(1, 2, 3, 4, 5));
// console.log(average(5, 7, 9, 3, 5));

// p20************************************************************************************
// function randomNumber() {
//     return Math.random();
// }

// console.log(randomNumber());
// console.log(randomNumber());
// console.log(randomNumber());
// console.log(randomNumber());
// console.log(randomNumber());

// p21***************************************************************************

// function randomBetweenNumbers(min, max) {
//     return Math.random() * (max - min) + min;
// }

// console.log(randomBetweenNumbers(1, 8));
// console.log(randomBetweenNumbers(3, 40));

// p22***********************************************************************************

// function scoreInUniversity(score) {
//     if (score >= 95 && score <= 100) {
//         return "A";
//     } else if (score >= 85 && score < 95) {
//         return "B";
//     } else if (score >= 70 && score < 85) {
//         return "C";
//     } else if (score >= 50 && score < 70) {
//         return "D";
//     } else {
//         return "F";
//     }
// }

// console.log(scoreInUniversity(96)); 
// console.log(scoreInUniversity(3));  
// console.log(scoreInUniversity(71)); 


// p23**********************************************************************
// let count = 0;

// function counter() {
//     count++;
//     return count;
// }

// console.log(counter()); 
// console.log(counter()); 
// console.log(counter()); 
// console.log(counter()); 
// console.log(counter()); 
// console.log(counter()); 



// p24**********************************************************************

// let count = 0;

// function counter() {
//     count++;
//     return count;
// }

// function resetCounter() {
//     const previousCount = count;
//     count = 0;
//     return `${previousCount} and the counter reset now`;
// }

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(resetCounter());
// console.log(counter());
// console.log(counter());
// console.log(resetCounter());
// console.log(counter());
