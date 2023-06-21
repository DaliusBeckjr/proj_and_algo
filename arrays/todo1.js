// function push_front(){
//     var arr = [5,7,2,3]
//     arr.unshift(5) //will add the element to the beginning of the array
//     console.log(arr)
// }

// function pushFront(array, value) {
//     let newArray = [value, ...array];  // Create a new array with the new value at the beginning

//     return newArray;
// }
    
//     let myArray = [5, 7, 2, 3];
//     let newValue = 8;
//     let updatedArray = pushFront(myArray, newValue);

//   console.log(updatedArray);  // Print the updated array

// ------------------------------------------------------------ //


// function popFront(array) {
//     if (array.length > 0) {
//       let removedValue = array[0];  // Store the value to be removed
//       array = array.slice(1);  // Create a new array starting from index 1

//       console.log("Removed value:", removedValue);  // Print the removed value
//       console.log("Updated array:", array);  // Print the updated array

//         return removedValue;
//         } else {
//         console.log("Array is empty.");
//         return undefined;
//         }
//     }
    
//     let myArray = [0, 5, 10, 15];
//     let removed = popFront(myArray);

//   console.log("Returned value:", removed);  // Print the returned value

// -----------------------------------------------------------//

function insertAt(array, index, value) {
  let newArray = [...array];  // Create a new array to preserve the original

  newArray.splice(index, 0, value);  // Insert the value at the given index

  return newArray;
}

let myArray = [100, 200, 5];
let insertIndex = 2;
let newValue = 311;
let updatedArray = insertAt(myArray, insertIndex, newValue);

console.log(updatedArray);  // Print the updated array
