// Question #2: Array Deduping
// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

// Clarification/Discussion - can an array always be assumed? Is Javascript a good language?

// Function Target - A filtered array of numbers without duplicates

// edge cases: not an array, special characters, capitalized strings 

// Example
// Input: [7, 9, "hi", 12, "hi", 7, 53]

// Output: [7, 9, "hi", 12, 53]

// WITHOUT RECURSION

function noDupes(nums) { // function expects an array of numbers as starting argument
  let noDuping = [];  // results array to push into

  nums.forEach(function(num) { // forEach loop to check if there are duplicates by using includes() method
    if (!noDuping.includes(num)) { // if the results array doesn't already contain the element, push it
      noDuping.push(num);
    } 
  });
  
  return noDuping;
}

// WITH RECURSION

function noDupes(nums, index = 0, noDuping = []) {
  if (index === nums.length) {
    return noDuping; // Base case: reached the end of the array
  }

  const currentNum = nums[index];

  // Check if the current element is not already in the noDuping array
  if (!noDuping.includes(currentNum)) {
    // Use spread operator to create a new array with the current element
    const updatedArray = [...noDuping, currentNum];

    // Recursive call with the next index and the updated array
    return noDupes(nums, index + 1, updatedArray);
  } else {
    // If the current element is a duplicate, skip it and proceed with the next index
    return noDupes(nums, index + 1, noDuping);
  }
}

// WITH filter
function noDupesFilter(nums) {
  return nums.filter((num, index, array) => array.indexOf(num) === index);
}