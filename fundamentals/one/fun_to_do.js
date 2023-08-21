
// Countdown -
// Create a function that accepts a number as an input. Return a new array
// that counts down by one, from the number (as array’s ‘zeroth’ element)
// down to 0 (as the last element). How long is this array?

function countdownArray(number) {
    // Step 1: Create an empty array to store the countdown sequence
    let countdown = [];

    // Step 2: Use a loop to generate the countdown sequence
    for (let i = number; i >= 0; i--) {
      countdown.push(i); // Add the current countdown value to the array
    }

    // Step 3: Return the generated countdown array
    return countdown;
}

  // Example usage
const inputNumber = 5;
const resultArray = countdownArray(inputNumber);
  console.log(resultArray); // Output: [5, 4, 3, 2, 1, 0]
  console.log("Array length:", resultArray.length); // Output: 6