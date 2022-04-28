function checkPalindrome(string) {
  let reversed = string.split("").reverse().join("");
  return string === reversed;
}
let string1 = "anna";
let string2 = "banana";
let string3 = "kayak";
checkPalindrome(string1);
//true
checkPalindrome(string2);
//false
checkPalindrome(string3);
//true
