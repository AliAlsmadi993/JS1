



// 9.
// Write a JavaScript function that returns rate as text
// less than 50 return ==> Fail
// equal or between 50 and 59 ===> E
// equal or between 60 and 69 ===> D
// equal or between 70 and 79 ===> C
// equal or between 80 and 89 ===> B
// equal or between 90 and 100 ===> A




rate=80;
function Rate(rate) {
    if (rate < 50) return "Fail";
    if (rate >= 50 && rate <= 59) return "E";
    if (rate >= 60 && rate <= 69) return "D";
    if (rate >= 70 && rate <= 79) return "C";
    if (rate >= 80 && rate <= 89) return "B";
    if (rate >= 90 && rate <= 100) return "A";

}
console.log(Rate(90));  

