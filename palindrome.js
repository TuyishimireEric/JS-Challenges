const checkPalindrome = (str) => {
  const originalStr = str.replace(/\s/g, "").split("");
  const length = originalStr.length;

  for (let i = 0; i < length / 2; i++) {
    if (
      originalStr[i].toLowerCase() != originalStr[length - i - 1].toLowerCase()
    ) {
      return false;
    }
  }
  return true;
};

const str = "deed";

console.log(checkPalindrome(str));
