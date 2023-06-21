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

const majorityElement = function (nums) {
  let condidate = 0;
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      condidate = num;
      count = 1;
    } else if (condidate === num) {
      count++;
    } else {
      count--;
    }

    console.log(count, condidate);
  }

  return condidate;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2, 3, 4]));

// Runtime
// 54 ms

// Beats
// 97.12%

// Memory
// 45.4 MB

// Beats
// 34.33%
