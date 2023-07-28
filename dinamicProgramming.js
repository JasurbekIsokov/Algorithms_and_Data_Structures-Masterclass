const fibonachi = (n, memo = {}) => {
  if (n <= 2) {
    return 1;
  }

  if (n in memo) {
    return memo[n];
  }

  memo[n] = fibonachi(n - 1, memo) + fibonachi(n - 2, memo);

  return memo[n];
};

console.log(fibonachi(800));
