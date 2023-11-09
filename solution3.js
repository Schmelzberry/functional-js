// Question #3: Compressing Strings
// Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

// Example
// Input: "aaabccdddda"

// Output: "3ab2c4da"

// WITHOUT RECURSION

function stringCompress(string) {
  let compressedArray = [];  // results array
  let count = 1; // count variable that will change for each letter if a repeat is detected

  for (let i = 0; i < input.length; i++) { // for loop to look at each letter
    if (input[i] === input[i + 1]) { // if the incoming letter matches the next entry in the sequence:
      count++;                       // add the number to count
    } else {
      compressedArray.push(count + string[i]); // base case is to push count variable in first next to letter
      count;                                   // set count to nothing for all non repeats
    }
  }

  return compressedArray.join(""); // transform array into a string
}