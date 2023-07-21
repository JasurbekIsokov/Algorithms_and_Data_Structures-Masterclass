// 20. Valid Parentheses
// Easy
// 20.9K
// 1.3K
// Companies
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// var isValid = function (s) {
//   let str = s;

//   while (str.includes("()") || str.includes("{}") || str.includes("[]")) {
//     str = str.replace("()", "");
//     str = str.replace("{}", "");
//     str = str.replace("[]", "");
//   }

//   return !str;
// };

// ---------------------------------------------------

// 136. Single Number
// Easy
// 14.5K
// 571
// Companies
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// var singleNumber = function (nums) {
//   let frequencyCounter = {};

//   for (let val of nums) {
//     frequencyCounter[val] = (frequencyCounter[val] | 0) + 1;
//   }

//   for (const key in frequencyCounter) {
//     if (frequencyCounter[key] == 1) {
//       return key;
//     }
//   }
// };

// console.log(singleNumber([2, 2, 1, 1, 3]));

// ---------------------------------------------------

// Easy
// 9.1K
// 1.2K
// Companies
// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

// var isHappy = function (n) {
//   function numbersSum(m) {
//     if (m < 10) {
//       return m == 1 || m == 7;
//     }

//     let str = m.toString();
//     let sum = 0;

//     for (let i = 0; i < str.length; i++) {
//       sum += str[i] ** 2;
//     }

//     return numbersSum(sum);
//   }

//   return numbersSum(n);
// };

// console.log(isHappy(19));

// ---------------------------------------------------

// 225. Implement Stack using Queues

// var MyStack = function () {
//   this.data = [];
// };

// /**
//  * @param {number} x
//  * @return {void}
//  */
// MyStack.prototype.push = function (x) {
//   this.data.push(x);
// };

// /**
//  * @return {number}
//  */
// MyStack.prototype.pop = function () {
//   return this.data.pop();
// };

// /**
//  * @return {number}
//  */
// MyStack.prototype.top = function () {
//   return this.data[this.data.length - 1];
// };

// /**
//  * @return {boolean}
//  */
// MyStack.prototype.empty = function () {
//   if (this.data.length == 0) {
//     return false;
//   } else return true;
// };

// /**
//  * Your MyStack object will be instantiated and called as such:
//  * var obj = new MyStack()
//  * obj.push(x)
//  * var param_2 = obj.pop()
//  * var param_3 = obj.top()
//  * var param_4 = obj.empty()
//  */

// ---------------------------------------------------

// 217. Contains Duplicate
// Easy
// 9.9K
// 1.2K
// Companies
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// var containsDuplicate = function (nums) {
//   let frequencyCounter = {};
//   let result = false;
//   for (const val of nums) {
//     frequencyCounter[val] = (frequencyCounter[val] | 0) + 1;
//   }
//   for (const key in frequencyCounter) {
//     if (frequencyCounter[key] > 1) {
//       result = true;
//     }
//   }
//   return result;
// // solution 2
// const set = new Set(nums);
// if(set.size == nums.length) {
//   return false
// }else return true;
// };

// console.log(containsDuplicate([2, 14, 18, 22, 22]));

// ---------------------------------------------------

// 654. Maximum Binary Tree

// let maxArrayNum = (nums) => {
//   let maxNum = nums[0];

//   for (let i = 0; i < nums.length; i++) {
//     if (maxNum < nums[i]) {
//       maxNum = nums[i];
//     }
//   }

//   return max;
// };

// var constructMaximumBinaryTree = function (nums) {
//   function recursive(arr) {
//     if (arr.length == 0) {
//       return undefined;
//     }

//     if (arr.length == 1) {
//       return new TreeNode(arr[0]);
//     }

//     let maxNum = arr[0];

//     for (let i = 0; i < arr.length; i++) {
//       if (maxNum < arr[i]) {
//         maxNum = arr[i];
//       }
//     }

//     let left = arr.slice(0, arr.indexOf(maxNum));

//     let right = arr.slice(arr.indexOf(maxNum) + 1);

//     let leftNote = recursive(left);

//     let rightNote = recursive(right);

//     let root = new TreeNode(maxNum, leftNote, rightNote);

//     return root;
//   }

//   return recursive(nums);
// };

// [3,2,1,6,0,5]

// ---------------------------------------------------

// var search = function (arr, num) {
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

//   if (arr[middle] == num) {
//     return middle;
//   } else {
//     return -1;
//   }
// };

// ---------------------------------------------------

function decimalToBinary(decimalNum) {
  if (decimalNum === 0) {
    return "0"; // 0 soni uchun ikkilik sanoq sistemasida "0" qaytariladi
  } else if (decimalNum === 1) {
    return "1"; // 1 soni uchun ikkilik sanoq sistemasida "1" qaytariladi
  } else {
    const remainder = decimalNum % 2; // ikkilik sanoq sistemasidagi oxirgi raqamni hisoblash
    const remainingPart = Math.floor(decimalNum / 2); // qoldiqni olish uchun butun qismni hisoblash
    return decimalToBinary(remainingPart) + remainder.toString(); // qoldiqni ikkilik sanoq sistemasiga o'tkazish
  }
}

console.log(decimalToBinary(22));

function binaryGap(val) {
  
}

binaryGap("10110");
