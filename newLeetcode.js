// 1. Two Sum

// var twoSum = function (nums, target) {
// for (let i = 0; i < nums.length - 1; i++) {
//   for (let j = i + 1; j < nums.length; j++) {
//     if (nums[i] + nums[j] == target) {
//       return [i, j];
//     }
//   }
// }

// Runtime 82ms, Memory 42.08mb

// ----- Refactored -----

//   let left = 0;
//   let right = left + 1;

//   while (left < nums.length - 1) {
//     if (nums[left] + nums[right] === target) {
//       return [left, right];
//     }

//     if (right == nums.length - 1) {
//       left++;
//       right = left + 1;
//     } else {
//       right++;
//     }
//   }
// };

// console.log(twoSum([3, 2, 3], 6));

// ---------------------------------------------------------------------
// 9. Palindrome Number

// var isPalindrome = function (x) {
//   return `${x}` == `${x}`.split("").reverse().join("");
// };

// console.log(isPalindrome(121));

// ---------------------------------------------------------------------
// 35. Search Insert Position

// var searchInsert = function (nums, target) {
//   let left = 0;
//   let right = nums.length - 1;
//   let middle = Math.floor((left + right) / 2);

//   if (target <= nums[left]) return 0;

//   if (target == nums[right]) return right;

//   if (target > nums[right]) return right + 1;

//   while (left + 1 !== right) {
//     if (target < nums[middle]) {
//       right = middle;
//       middle = Math.floor((left + right) / 2);
//     }

//     if (target > nums[middle]) {
//       left = middle;
//       middle = Math.floor((left + right) / 2);
//     }

//     if (target === nums[middle]) {
//       return middle;
//     }
//   }

//   return right;
// };

// console.log(searchInsert([1, 3, 5, 6], 5));

// var searchInsert = function (nums, target) {
//   return right;
// };

// ---------------------------------------------------------------------

// var splitWordsBySeparator = function (words, separator) {
//   console.log(words.join(separator).split(separator).filter(Boolean));
// };

// splitWordsBySeparator(["$easy$", "$problem$"], "$");

// ---------------------------------------------------------------------

// var lengthOfLastWord = function (s) {
//   let arr = s.split(" ").filter(Boolean);

//   return arr[arr.length - 1].length;
// };

// lengthOfLastWord("   fly me   to   the moon  ");

// ---------------------------------------------------------------------
// 69. Sqrt(x)

// var mySqrt = function (x) {
//   let left = 0;
//   let right = x;

//   while (left <= right) {
//     const middle = Math.floor((left + right) / 2);

//     if (middle * middle <= x && (middle + 1) * (middle + 1) > x) {
//       return middle;
//     } else if (middle * middle < x) {
//       left = middle + 1;
//     } else {
//       right = middle - 1;
//     }
//   }
// };

// console.log(mySqrt(9));

// ---------------------------------------------------------------------
// /242. Valid Anagram

// var isAnagram = function (s, t) {
// if (s.length !== t.length) {
//   return false;
// }

// let frequencyCounter1 = {},
//   frequencyCounter2 = {};

// for (let val of s) {
//   frequencyCounter1[val] = (frequencyCounter1[val] | 0) + 1;
// }

// for (let val of t) {
//   frequencyCounter2[val] = (frequencyCounter2[val] | 0) + 1;
// }

// for (const key in frequencyCounter1) {
//   if (!(key in frequencyCounter2)) {
//     return false;
//   }

//   if (frequencyCounter1[key] !== frequencyCounter2[key]) {
//     return false;
//   }
// }

// return true;
// };

// console.log(isAnagram("anagram", "nagaram"));

// ---------------------------------------------------------------------

// 28. Find the Index of the First Occurrence in a String
//

var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

console.log(strStr("sadbutsad", "sad"));
