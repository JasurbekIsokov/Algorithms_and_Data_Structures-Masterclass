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
