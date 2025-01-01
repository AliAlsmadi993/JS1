

let x = 8000;
let zakatPercentage = 2.5 / 100;
let zakat=x;
if (x>5000){
    zakat = x * zakatPercentage;
    document.write("The value of Zakat is: " + zakat);
}
else{
    document.write("no zakat");
}

// task

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


// 1-
// 1-[1, 7, 9, 45]
// 2-["Str", "alex", "moh"]
// 3-['the', 'fox', 'over', 'lazy', 'dog']



// // 2
// What the index of "Banana","Tomato"
// var fruits=["Tomato","Banana","Watermelon"]

// 1-index Banana =1
// 2-index Tomato =0

// 3-

// Create an array represents your:
// 1- Favorite Food (2)
// 2- Favorite Sport (3)
// 3- Favorite Movie (2)


// var favoriteFood =["Coffee","Coffee"]
// console.log (favoriteFood);

// var favoriteSport=["Drift","horse riding","swimming"]
// console.log(favoriteSport);

// var favoriteMovie=["Fast & Furious","Twilight"]
// console.log(favoriteMovie);

/*
4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

// var firstOfArray=[1,4,5]
// document.write (firstOfArray[0]);

// var firstOfArray2=["t","u","g","x"]
// document.write (firstOfArray2[0]);


/*
5
Create a Variable to return the lastOfArray element in an array 

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
// var lastOfArray=[1,4,5]
// console.log(lastOfArray[lastOfArray.length - 1]);
// var lastOfArray2=["t","u","g","x"]
// console.log(lastOfArray2[lastOfArray2.length - 1]);


/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/


// var array = [0, 5, 7, 9];
// array.shift();
// array.shift();
// array.shift();
// array.unshift(1, 3, 4, 6, 8);
// array.push(10);
// console.log(array);



/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/

// var array2 = [5,9,-7,3.5]
// array2.push(8);
// document.write(array2);
// array2.unshift(2);
// document.write(array2);
// array2.shift();
// document.write(array2);
// array2.pop();



// // document.write(array2);
// var array2=[]
// array2.push(5);
// array2.push(9);
// array2.push(-7);
// array2.push(3.5);
// document.write(array2)




// 8-
// 
// var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

// arr1.sort(function(a, b) {
//     return a - b;
// });

// console.log(arr1); 




// 9.
// Write a JavaScript function that returns rate as text
// less than 50 return ==> Fail
// equal or between 50 and 59 ===> E
// equal or between 60 and 69 ===> D
// equal or between 70 and 79 ===> C
// equal or between 80 and 89 ===> B
// equal or between 90 and 100 ===> A




// rate=80;
// function Rate(rate) {
//     if (rate < 50) return "Fail";
//     if (rate >= 50 && rate <= 59) return "E";
//     if (rate >= 60 && rate <= 69) return "D";
//     if (rate >= 70 && rate <= 79) return "C";
//     if (rate >= 80 && rate <= 89) return "B";
//     if (rate >= 90 && rate <= 100) return "A";

// }
// console.log(Rate(90));  


// 10 .
// Write a JS code to print a pattern using for loop

//    1 
//    1 2 
//    1 2 3 
//    1 2 3 4 
//    1 2 3 4 5 
//    1 2 3 4 5 6 
//    1 2 3 4 5 6 7 
//    1 2 3 4 5 6 7 8 
    

// for (let i = 1, row = ''; i <= 8; i++) {
//     row += i + ' '; 
//     console.log(row);}



// for (let i = 1; i <= 8; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//         row += j + ' ';
//     }
//     console.log(row.trim());
// }


