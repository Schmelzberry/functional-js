// Question #4: Checking for Uniqueness
// Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

// Example
// Input: "hello"

// Output: false

// Input: "copyright"

// Output: true

// WITHOUT RECURSION

function uniqueString(string) {

  let stringCheck = new Set();      // sets only allow unique elements, duplicates are ignored inherently

  for (let char of string) {

    if (stringCheck.has(char)) {    // has() method is a feature of sets, returns a boolean
      return false;                 // if a duplicate is found, return false
    } 
    else {                        // assuming no duplicates, add a character to the set
      stringCheck.add(char);
    }
  }

  return true; // If no duplicates are found, return true
}