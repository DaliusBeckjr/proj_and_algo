// Setting and Swapping

// Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.

let myNumber = 42;
let myName = "Dalius";

console.log("Before swap")
console.log("myNumber: ", myNumber);
console.log("myName: ", myName);

var temp = myNumber;
myNumber = myName;
myName = temp;
console.log("After swap");
console.log("myNumber: ", myNumber);
console.log("myName: ", myName);