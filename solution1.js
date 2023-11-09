// Question #1: Turning Strings to URLs
// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

// Example
// Input: "Jasmine Ann Jones"

// Output: "Jasmine%20Ann%20Jones"


// WITHOUT RECURSION

function urlFormat(string) {
  let stringArray = string.split(""); // string => array of letters
  let letterArray = []; // results array to push() into

  stringArray.forEach(function(element) { // check for whitespace, replace with %20 if present
    if (element === " ") {
      element = "%20"
    }
    letterArray.push(element); // each letter gets checked and moved into a second array
  });

  const stringifiedUrl = letterArray.join("");  // Adds all the elements of url array back to a string

  return stringifiedUrl;

}

// WITH RECURSION - two functions

function urlRecurse(string, index = 0) {
  if (index === string.length) {
    return ""; // Base case: reached the end of the string
  }

  const currentChar = transformChar(string[index]);

  // Recursive call with the next index
  return currentChar + urlRecurse(string, index + 1);
}

function transformChar(char) { // function expects a character
  return char === " " ? "%20" : char; // return char, if it's an empty string, replace with %20, otherwise, 
                                      // return the character
} 

// WITH RECURSION - one function

function urlRecurse(string, transform = char => char, index = 0) { // attempt at writing less code to achieve 
  if (index === string.length) {                                    // same result
    return "";
  }

  const currentChar = transform(string[index]);

  return currentChar + urlRecurse(string, transform, index + 1);
}

