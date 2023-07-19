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

var MyStack = function () {
  this.data = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.data.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return this.data.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.data[this.data.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  if (this.data.length == 0) {
    return false;
  } else return true;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
