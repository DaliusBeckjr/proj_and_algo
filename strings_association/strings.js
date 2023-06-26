// function removeBlanks(str) {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== ' ') {
//             result += str[i];
//         }
//     }
//     return result;
// }

// function getDigits(str) {
//     let result = 0;
//     for (let i = 0; i < str.length; i++) {
//         const digit = Number(str[i]);
//         if (!isNaN(digit)) {
//         result = result * 10 + digit;
//         }
//     }
//     return result;
// }

// function acronym(str) {
//     let result = '';
//     let prevChar = ' ';
  
//     for (let i = 0; i < str.length; i++) {
//       const currentChar = str[i];
  
//       if (prevChar === ' ' && currentChar !== ' ') {
//         result += currentChar.toUpperCase();
//       }
  
//       prevChar = currentChar;
//     }
  
//     return result;
//   }

// function countNonSpaces(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] !== ' ') {
//         count++;
//       }
//     }
//     return count;
//   }

// const result1 = countNonSpaces("Hello world !");
// console.log(result1); // Output: 11

// function removeShorterStrings(arr, minLength) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//       const currentStr = arr[i];
//       if (currentStr.length >= minLength) {
//         result.push(currentStr);
//       }
//     }
//     return result;
//   }

// const result1 = removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3);
// console.log(result1); // Output: ['There', 'bug', 'the', 'system']