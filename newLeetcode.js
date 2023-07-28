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

var isPalindrome = function (x) {
  return `${x}` == `${x}`.split("").reverse().join("");
};

console.log(isPalindrome(121));
