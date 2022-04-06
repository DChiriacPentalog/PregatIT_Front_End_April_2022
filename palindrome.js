
const reverse = (str) => {
    return str.split("").reverse().join("");
  };


  const ifPalindrome = (str) => {
      return str === reverse(str);
  }



