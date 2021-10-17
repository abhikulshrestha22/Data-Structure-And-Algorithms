var countAndSay = function (n) {
  if (n == 1) {
    return "1";
  }
  let prev = countAndSay(n - 1);
  let currentChar = "";
  let currentCount = 0;
  let result = "";
  for (let i = 0; i < prev.length; i++) {
    if (currentChar != prev[i]) {
      result += currentCount++ + currentChar;
      currentCount = 0;
    } else {
      currentCount += 1;
      currentChar = prev[i];
    }
  }
  if (currentCount !== 0) {
    result += currentCount + prev[prev.length - 1];
  }

  return result;
};

console.log(countAndSay(2));
