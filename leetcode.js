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

var singleNumber = function (nums) {
  let frequencyCounter = {};

  for (let val of nums) {
    frequencyCounter[val] = (frequencyCounter[val] | 0) + 1;
  }

  for (const key in frequencyCounter) {
    if (frequencyCounter[key] == 1) {
      return key;
    }
  }
};

console.log(singleNumber([2, 2, 1, 1, 3]));
