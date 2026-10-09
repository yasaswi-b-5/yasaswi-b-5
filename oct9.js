//1)Write a function that accepts an array and returns the sum of all its elements. • Input: [10, 20, 30, 40] • Output: 100

function sumArray(arr) {
  let total = 0; // Initialize a variable to keep track of the sum
  
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i]; // Add the current number to total
  }
  
  return total;
}

// Test
console.log(sumArray([10, 20, 30, 40])); // Output: 100


//2)Write a function to find the largest number in an array without using Math.max().
function findLargest(arr) {
  let largest = arr[0]; // Start by assuming the first number is the largest
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i]; // Found a bigger number! Update largest
    }
  }
  
  return largest;
}

// Test
console.log(findLargest([10, 5, 80, 45, 2]));




//3)Write a function that removes duplicate elements from an array. • Input: [1, 2, 2, 3, 4, 4] • Output: [1, 2, 3, 4]
function removeDuplicates(arr) {
  let uniqueArr = []; // Array to store numbers without duplicates
  
  for (let i = 0; i < arr.length; i++) {
    // includes() checks if the item is already in our unique array
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  
  return uniqueArr;
}

// Test
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));




//4)An array contains numbers from 1 to n, with one number missing. Write a function to find it. • Input: [1, 2, 3, 5, 6] • Output: 4

function findMissingNumber(arr) {
  let n = arr.length + 1; // Since one number is missing, total count should be arr.length + 1
  let expectedSum = (n * (n + 1)) / 2; // Math formula for sum of 1 to n
  
  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }
  
  return expectedSum - actualSum;
}

// Test
console.log(findMissingNumber([1, 2, 3, 5, 6])); // Output: 4





//5)Write a function to rotate an array to the right by k positions. • Input: [1, 2, 3, 4, 5], k = 2 • Output: [4, 5, 1, 2, 3]
function rotateRight(arr, k) {
  // Create a copy so we don't modify the original array directly
  let result = [...arr];
  
  for (let i = 0; i < k; i++) {
    let lastElement = result.pop(); // Remove from end
    result.unshift(lastElement);    // Add to beginning
  }
  
  return result;
}

// Test
console.log(rotateRight([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]





//6)Write a function that finds two array elements whose sum equals a given target. • Input: [2, 7, 11, 15], target 9 • Output: [2, 7]
function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]]; // Return the pair when found
      }
    }
  }
  return [];
}

// Test
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [2, 7]