"use script";

// Frequency Counter Patterns

// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has it's corresponding value squared in the second array.
// The frequency of values must be the same.

// same ([1,2,3], [4,1,9]) // true same ([1,2,3], [1,9]) // false
// same ([1,2,1], [4,4,1]) // false (must be same frequency)

// A Naive Solution

// const same = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);

//     if (correctIndex === -1) {
//       return false;
//     }

//     arr2.splice(correctIndex, 1);
//   }

//   return true;
// };

// time complexity N*N

// console.log(same([1, 2, 3], [4, 1, 9]));
// console.log(same([1, 2, 1], [4, 4, 1]));

// Refaktored

// const same = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};

//   for (let val of arr1) {
//     frequencyCounter1[val] = (frequencyCounter1[val] | 0) + 1;
//   }

//   for (let val of arr2) {
//     frequencyCounter2[val] = (frequencyCounter2[val] | 0) + 1;
//   }

//   for (let key in frequencyCounter1) {
//     if (!(key ** 2 in frequencyCounter2)) {
//       return false;
//     }

//     if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
//       return false;
//     }
//   }

//   return true;
// };

// console.log(same([1, 2, 3], [4, 1, 9]));
// console.log(same([1, 2, 1], [4, 4, 1]));

// --------------------------------------------------

// Anagrams

// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// A Naive Solution

// function validAnagram(s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }

//   let sArr = s.split("");
//   let tArr = t.split("");

//   for (let i = 0; i < sArr.length; i++) {
//     if (tArr.indexOf(sArr[i]) >= 0) tArr.splice(tArr.indexOf(sArr[i]), 1);
//   }

//   return tArr.length == 0;
// }

// Runtime 2337 ms | Beats 5.3% | Memory 47.5 MB | Beats 37.73%

// console.log(validAnagram("", "")); // true
// console.log(validAnagram("aaz", "zza")); // false
// console.log(validAnagram("anagram", "nagaram")); // true
// console.log(validAnagram("rat", "car")); // false)
// console.log(validAnagram("awesome", "awesom")); // false
// console.log(validAnagram("qwerty", "geywrt")); // false
// console.log(validAnagram("texttwisttime", "timetwisttext")); // true

//  Refaktored  Frequency Counter Patterns

// function validAnagram(s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }

//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};

//   for (let val of s) {
//     frequencyCounter1[val] = (frequencyCounter1[val] | 0) + 1;
//   }

//   for (let val of t) {
//     frequencyCounter2[val] = (frequencyCounter2[val] | 0) + 1;
//   }

//   for (let key in frequencyCounter1) {
//     if (!(key in frequencyCounter2)) {
//       return false;
//     }

//     if (frequencyCounter2[key] !== frequencyCounter1[key]) {
//       return false;
//     }
//   }

//   return true;
// }

// Runtime 80 ms | Beats 68.77% | Memory | 43.8 MB | Beats | 66.8%

// ------------------------------------------------------------

// Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// function twoSum(nums, target) {
//   const frequencyCounter = {};

//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];

//     if (frequencyCounter[complement] !== undefined) {
//       return [frequencyCounter[complement], i];
//     }

//     frequencyCounter[nums[i]] = i;
//   }

//   return -1;
// }

// console.log(twoSum([3, 2, 4], 6)); // [1, 2]

// Runtime
// 68 ms

// Beats
// 70.42%

// Memory
// 42.5 MB

// Beats
// 63.44%

// ------------------------------------------------------------

// 349. Intersection of Two Arrays
// Easy
// 4.8K
// 2.1K
// Companies
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

// function intersect(nums1, nums2) {
//   const frequencyCounter = {};
//   const result = [];

//   for (let num of nums1) {
//     frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
//   }

//   for (let num of nums2) {
//     if (frequencyCounter[num] > 0) {
//       result.push(num);

//       frequencyCounter[num]--;
//     }
//   }

//   const newSet = new Set(result);

//   return [...newSet];
// }

// console.log(intersect([1, 2, 2, 1], [2, 2]));

// Runtime
// 52 ms

// Beats
// 94.19%

// Memory
// 44.5 MB

// Beats
// 12.14%

// ------------------------------------------------------------

// 169. Majority Element

// const majorityElement = function (nums) {
//   let condidate = 0;
//   let count = 0;

//   for (let num of nums) {
//     if (count === 0) {
//       condidate = num;
//       count = 1;
//     } else if (condidate === num) {
//       count++;
//     } else {
//       count--;
//     }

//     console.log(count, condidate);
//   }

//   return condidate;
// };

// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2, 3, 4]));

// Runtime
// 54 ms

// Beats
// 97.12%

// Memory
// 45.4 MB

// Beats
// 34.33%

// ------------------------------------------------------------

// Multiple Pointers

// AN EXAMPLE
// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

// sumZero ([-3,-2, -1,0,1,2,3]) // [-3,3] sumZero ([-2,0,1,3]) // undefined sumZero ([1,2,3]) // undefined

// Naive solution

// function sumZero(arr) {
//   for (i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// }

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));

// Refactores (Multiple Pointers) solution

// function sumZero(arr) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     let sum = arr[left] + arr[right];

//     if (sum === 0) {
//       return [arr[left], arr[right]];
//     } else if (sum > 0) {
//       right--;
//     } else {
//       left++;
//     }
//   }
// }

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));

// ------------------------------------------------------------

// 11. Multiple Pointers Container With Most Water

// function maxArea(height) {
//   let left = 0;
//   let right = height.length - 1;
//   let result = 0;

//   while (left < right) {
//     let sum = Math.min(height[left], height[right]) * (right - left);

//     if (result < sum) {
//       result = sum;
//     }

//     if (height[left] < height[right]) {
//       left++;
//     } else {
//       right--;
//     }
//   }

//   return result;
// }

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// console.log(maxArea([1, 1]));
// console.log(maxArea([2, 3, 4, 5, 18, 17, 6]));

//Runtime
// 75 ms

// Beats
// 70.22%

// Memory
// 50.2 MB

// Beats
// 16.17%

// ------------------------------------------------------------

// function countUniqueValues(arr) {
//   let first = 0;
//   let second = 1;

//   while (second <= arr.length) {
//     if (arr[first] == arr[second]) {
//       second++;
//     } else {
//       ++first;

//       arr[first] = arr[second];

//       second++;
//     }
//   }

//   return first;
// }

// console.log(countUniqueValues([1, 2, 5, 5, 7, 7, 99]));

// ------------------------------------------------------------

// ===================================================

// # Searching Algorithms

// Binary Search

// function binarySearch(arr, num) {
//   let left = 0;
//   let right = arr.length - 1;
//   let middle = Math.floor((left + right) / 2);

//   while (left < right && arr[middle] !== num) {
//     if (arr[middle] > num) {
//       right = middle - 1;
//       middle = Math.floor((left + right) / 2);
//     }

//     if (arr[middle] < num) {
//       left = middle + 1;
//       middle = Math.floor((left + right) / 2);
//     }
//   }

//   if (arr[middle] === num) {
//     return middle;
//   } else {
//     return -1;
//   }
// }

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 4));

// ------------------------------------------------------------

// Sorting algorithms

// Bubble sort

// function bubbleSort(arr) {
//   let swap;

//   for (let i = arr.length; i > 0; i--) {
//     swap = false;
//     for (j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         swap = true;
//       }
//     }

//     if (!swap) break;
//   }

//   return arr;
// }

// console.log(bubbleSort([1, 2, 4, 3, 7, 6, 8, 90]));

// ===================================================

// ------------------------------------------------------------

// Selection sort

function selectionSort(arr) {
  let lowest;
  for (let i = 0; i < arr.length; i++) {
    lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }

    if (lowest !== i) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }

  return arr;
}

console.log(selectionSort([1, 2, 4, 3, 7, 6, 8, 90]));
