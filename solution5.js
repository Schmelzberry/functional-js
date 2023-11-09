// Question #5: Array Sorting

// Write an algorithm that sorts an array without using the sort() method. There are many different sorting algorithms — take the time to read about the following:

// Quick sort
// Merge sort
// Heap sort
// Insertion sort
// Bubble sort
// Selection sort

// You may implement any of the above algorithms (or your own) to solve the problem — as long as it doesn't use sort().

// Example

// Input: [9, 2, 7, 12]

// Output: [2, 7, 9, 12]

// SELECTION SORT

function selectionSort(array) { // expects an array of numbers  
  const n = array.length;       // variable to set length in minIndex loop - # of elements in array

  for (let i = 0; i < n - 1; i++) { // loop for finding the minimum element of an array - "sorted" portion
    let minIndex = i;

    // Find the index of the minimum element in the "unsorted" portion of the array
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    // Swap the found minimum element with the first element of the unsorted part
    
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
    return array;
}