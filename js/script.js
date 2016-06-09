/*===========================
Back End
=============================*/
//spec: assign letters to user input numbers based on each unique roman numeral
var one = "I";
var five = "V";
var ten = "X";
var fifty = "L";
var hundred = "C";
var fiveHundred = "D";
var thousand = "M";
var numberArray;
var romanArray = [];
var romanLetters = [
  ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
  ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
  ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
  ["M", "MM", "MMM"]
];

function numberSplit(input) {
  var numberArray = input.split("");
  console.log(numberArray);
}

// function converter(numbers) {
//   romanArray = [];
//   numberArray.forEach(function(number){
//     //1digit numbers
//     if(numberArray.length === 1) {
//       //handle singles place
//       if number <= 9
//       }
//     }
//
//     //2 digit numbers
//     if(numberArray.length === 2) {
//       //handle singles place
//       if(numberArray[1]) {}
//       //handle tens place
//       if(numberArray[0]) {}
//     }
//
//     //3 digit numbers
//     if(numberArray.length === 3) {
//       //handle singles place
//       //handle tens place
//       //handle hundreds place
//     }
//
//     //4 digit numbers
//     if(numberArray.length === 4)
//     //handle singles place
//     //handle tens place
//     //handle hundreds place
//     //handle thousands place
//   });
//   console.log(romanArray);
// }
//
//
//
//
//
//
//
// /*===========================
// Front End
// =============================*/
//
//
//
//
//
//
//
// $(document).ready(function(){
//   $("#converter").submit(function(event) {
//     event.preventDefault();
//
//     var numberInput = $("#number").val().trim();
//
//     numberSplit(numberInput);
//     // converter(numberArray);
//     // console.log("Hi there.");
//   });
// });
//
//
//
//
// // switch (number) {
// //   case 1:
// //     romanArray.push(one);
// //     break;
// //   case 5:
// //     romanArray.push(five);
// //     break;
// //   case 10:
// //     romanArray.push(ten);
// //     break;
// //   case 50:
// //     romanArray.push(fifty);
// //     break;
// //   case 100:
// //     romanArray.push(hundred);
// //     break;
// //   case 500:
// //     romanArray.push(fiveHundred);
// //     break;
// //   case 1000:
// //     romanArray.push(thousand);
// //     break;
