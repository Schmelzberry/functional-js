// Question #2: Array Deduping
// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

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

  // Use array spread to create a new array with the current element. trying to be stateless by using ...
  const updatedArray = [...noDuping, currentNum];

  // Recursive call with the next index and the updated array, which is a copy of the empty array with new info
  return noDupes(nums, index + 1, updatedArray);
}
