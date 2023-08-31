```js
// Setting and Swapping

// Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.

// let myNumber = 42;
// let myName = "Dalius";

// console.log("Before swap")
// console.log("myNumber: ", myNumber);
// console.log("myName: ", myName);

// var temp = myNumber;
// myNumber = myName;
// myName = temp;
// console.log("After swap");
// console.log("myNumber: ", myNumber);
// console.log("myName: ", myName);

// Print -52 to 1066

// Print integers from -52 to 1066 using a FOR loop.

// function printInt() {
//     for (i = -52; i <= 1066; i++){
//         console.log(i);
//     }
// }
// printInt()

// Don’t Worry, Be Happy

// Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.

// function beCheerful(){
//     console.log("Good Morning");
// }

// for (var i = 1; i <= 98; i++){
//     beCheerful();
// }

// Multiples of Three – but Not All

// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

// function multipleThree() {
//     for (var i = -300; i <= 0; i += 3) {
//         if (i === -3 || i === -6) {
//         continue; // Skip -3 and -6
//         }
//         console.log(i);
//     }
// }

// console.log(multipleThree())

// Printing Integers with While

// Print integers from 2000 to 5280, using a WHILE.

// function doWhile() {
//     var num = 2000;

//     while (num <= 5280){
//         console.log(num);
//         num ++;
//     }
// }

// console.log(doWhile())

// You Say It’s Your Birthday

// If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...." 

// function isBirthday(dateString1, dateString2) {
//     // Convert the first character of dateString1 to a number
//     const month1 = dateString1[0] - '0';

//     // Convert the remaining characters of dateString1 to a number
//     const day1 = (dateString1[1] - '0') * 10 + (dateString1[2] - '0');

//     // Convert the first character of dateString2 to a number
//     const month2 = dateString2[0] - '0';

//     // Convert the remaining characters of dateString2 to a number
//     const day2 = (dateString2[1] - '0') * 10 + (dateString2[2] - '0');

//     // Check if either combination matches
//     if ((month1 === 1 && day1 === 25) || (month1 === 25 && day1 === 1) ||
//         (month2 === 1 && day2 === 25) || (month2 === 25 && day2 === 1)) {
//       console.log("How did you know?");
//     } else {
//       console.log("Just another day....");
//     }
// }

//   // Test cases
//   isBirthday("125", "42"); // Output: "How did you know?"
//   isBirthday("35", "12");  // Output: "Just another day...."
```