const LongestRepeatingSubsequence = (str) => {
  let result = [];
  for (let i = 0; i <= str.length; i++) {
    result[i] = [];
    for (let j = 0; j <= str.length; j++) {
      result[i][j] = -1;
    }
  }

  // fill the value 0 if str length is 0 or 1
  for (let i = 0; i <= str.length; i++) {
    for (let j = 0; j <= str.length; j++) {
      if (i === 0 || j === 0) {
        result[i][j] = 0;
      } else if (i == 1 && j == 1) {
        result[i][j] = 0;
      }
    }
  }

  for (let i = 1; i <= str.length; i++) {
    for (let j = 1; j <= str.length; j++) {
      if (str[i - 1] === str[j - 1] && j > i) {
        result[i][j] = 1 + result[i - 1][j - 1];
      } else {
        result[i][j] = Math.max(result[i][j - 1], result[i - 1][j]);
      }
    }
  }

  return result[str.length][str.length];
};

console.log(LongestRepeatingSubsequence("kmvubojerk"));
