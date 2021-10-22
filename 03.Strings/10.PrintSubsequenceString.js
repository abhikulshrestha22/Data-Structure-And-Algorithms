// Problem Link - https://www.geeksforgeeks.org/print-subsequences-string/

const printSubsString = (str, output) => {
  if (str.length === 0) {
    console.log(output);
    return;
  }

  printSubsString(str.substring(1), output);
  printSubsString(str.substring(1), output + str[0]);
};

const outputGlobal = "";
const input = "abcd";

printSubsString(input, outputGlobal);
