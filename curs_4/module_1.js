let value = 0;
exports.func1 = function printValue() {
  value++;
  return value;
};

exports.func2 = function test() {
  value++;
  return value;
};
