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

// function selectionSort(arr) {
//   let lowest;

//   for (let i = 0; i < arr.length; i++) {
//     lowest = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[lowest]) {
//         lowest = j;
//       }
//     }

//     if (lowest !== i) {
//       let temp = arr[i];
//       arr[i] = arr[lowest];
//       arr[lowest] = temp;
//     }
//   }

//   return arr;
// }

// console.log(selectionSort([1, 2, 4, 3, 7, 6, 8, 90]));

// ------------------------------------------------------------

// Insertion  sort

// function insertionSort(arr) {
//   let currentValue;

//   for (let i = 1; i < arr.length; i++) {
//     currentValue = arr[i];

//     for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
//       arr[j + 1] = arr[j];
//     }

//     arr[j + 1] = currentValue;
//   }
//   return arr;
// }

// console.log(insertionSort([4, 2, 1, 3]));

// ------------------------------------------------------------

// function bubbleSort(names, heights) {
//   let swap;

//   for (let i = heights.length; i > 0; i--) {
//     swap = false;
//     for (j = 0; j < i - 1; j++) {
//       if (heights[j] < heights[j + 1]) {
//         let temp1 = names[j];
//         names[j] = names[j + 1];
//         names[j + 1] = temp1;

//         let temp2 = heights[j];
//         heights[j] = heights[j + 1];
//         heights[j + 1] = temp2;

//         swap = true;
//       }
//     }

//     if (!swap) break;
//   }

//   return names;
// }

// console.log(bubbleSort([1, 2, 4, 3, 7, 6, 8, 90]));

// ------------------------------------------------------------

// Intermediate Sorting Algorithms

// Merge sort introduction

// Merging arrays

// function mergingArrays(arr1, arr2) {
//   let result = [];
//   let j = 0;
//   let i = 0;

//   while (i < arr1?.length && j < arr2?.length) {
//     if (arr2[j] > arr1[i]) {
//       result.push(arr1[i]);
//       i++;
//     } else {
//       result.push(arr2[j]);
//       j++;
//     }
//   }

//   while (i < arr1?.length) {
//     result.push(arr1[i]);
//     i++;
//   }

//   while (j < arr2?.length) {
//     result.push(arr2[j]);
//     j++;
//   }

//   return result;
// }

// console.log(mergingArrays([100, 200], [1, 2, 3, 5, 6]));

// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;

//   let middle = Math.floor(arr.length / 2);

//   let left = mergeSort(arr.slice(0, middle));

//   let right = mergeSort(arr.slice(middle));

//   return mergingArrays(left, right);
// }

// console.log(mergeSort([2, 1, 6, 7, 2, 55, 21, 60, 25, 17]));

// ==============================================================

// ==============================================================

// 125. Valid Palindrome
// Easy
// 7.2K
// 7.3K
// Companies
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

// var isPalindrome = function (s) {
//   let left = 0;
//   let right = s.length - 1;

//   while (left < right) {
//     if (!/^[a-z0-9]+$/gi.test(s[left])) {
//       left++;
//     } else if (!/^[a-z0-9]+$/gi.test(s[right])) {
//       right--;
//     } else if (s[left].toLowerCase() !== s[right].toLowerCase()) {
//       return false;
//     } else {
//       left++;
//       right--;
//     }
//   }

//   return true;
// };

// console.log(isPalindrome("A man, a plan, a canal: Panama"));

// s = "A man, a plan, a canal: Panama"

// ------------------------------------------------------------

// 283. Move Zeroes
// Easy
// 14.2K
// 361
// Companies
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// var moveZeroes = function (nums) {
//   let low = 0;
//   let high = low + 1;

//   while (high <= nums.length - 1) {
//     if (nums[low] !== 0) {
//       low++;

//       high++;
//     } else {
//       if (nums[high] !== 0) {
//         [nums[low], nums[high]] = [nums[high], nums[low]];

//         low++;
//       }

//       high++;
//     }
//   }

//   return nums;
// };

// console.log(moveZeroes([0, 1, 0, 3, 12]));

// ------------------------------------------------------------

// 121. Best Time to Buy and Sell Stock
// Easy
// 26.4K
// 835
// Companies
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// var maxProfit = function (prices) {
//   let left = 0;
//   let right = 1;
//   let maxProfit = 0;

//   while (right < prices.length) {
//     if (prices[left] < prices[right]) {
//       let profit = prices[right] - prices[left];

//       maxProfit = Math.max(maxProfit, profit);
//     } else {
//       left = right;
//     }

//     right++;
//   }

//   return maxProfit;
// };

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// ------------------------------------------------------------

// Merge Sort Sorting algoritm

// const mergingSort = (arr1, arr2) => {
//   let result = [];
//   let i = 0;
//   let j = 0;

//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       result.push(arr1[i]);
//       i++;
//     } else {
//       result.push(arr2[j]);
//       j++;
//     }
//   }

//   while (i < arr1.length) {
//     result.push(arr1[i]);
//     i++;
//   }

//   while (j < arr2.length) {
//     result.push(arr2[j]);
//     j++;
//   }

//   return result;
// };

// const mergeSort = (arr) => {
//   if (arr.length <= 1) return arr;

//   let midle = Math.floor(arr.length / 2);

//   let left = mergeSort(arr.slice(0, midle));

//   let right = mergeSort(arr.slice(midle));

//   return mergingSort(left, right);
// };

// console.log(mergeSort([7, 1, 5, 3, 6, 4]));

// const getDigit = (num, place) => {
//   return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
// };

// const digitCount = (num) => {
//   if (num === 0) return 1;
//   return Math.floor(Math.log10(Math.abs(num))) + 1;
//   // return toString(num).length;
// };

// const mostDigits = (arr) => {
//   let maxDigits = 0;

//   for (let i = 0; i < arr.length; i++) {
//     maxDigits = Math.max(maxDigits, digitCount(nums[i]));
//   }

//   return maxDigits;
// };

// ----------------------------------------

// var smallestEvenMultiple = function (n) {
//   if (n % 2 == 0) return n;
//   else return n * 2;
// };

// ------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------

// Singly Linked List

class Node {
  constructor(val) {
    this.val = val;
    this.nextPointer = null;
  }
}

class SinglyList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // oxiridan qo'shish
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  // oxiridan o'chirish
  pop() {
    if (!this.tail) return undefined;
    var current = this.head;
    var newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  // boshidan o'chirish
  shift() {
    if (!this.head) return undefined;

    var current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  // boshidan qo'shish
  unShift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }
}

const list = new SinglyList();

list.push("First Name");

list.push("Last Name");

list.push("Full Name");

// list.pop();

// console.log(list.shift());

list.unShift("Email");

console.log(list);
