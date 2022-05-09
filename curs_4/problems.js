//  Leet code first problem TwoSum
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
var twoSum = function (nums, target) {
  nums = [2, 7, 11, 15];
  target = 9;
  let passer1, passer2, result;
  if (passer1 + passer2 == target) {
    return (result = [passer1, passer2]);
  }
  return result;
};
console.log(twoSum);
