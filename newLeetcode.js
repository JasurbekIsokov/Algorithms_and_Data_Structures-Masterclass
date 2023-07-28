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
