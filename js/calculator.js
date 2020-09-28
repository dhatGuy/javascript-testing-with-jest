const calculator = {};

calculator.add = (n1, n2) => {
  return n1 + n2;
};
calculator.subtract = (n1, n2) => {
  return n1 - n2;
};
calculator.divide = (n1, n2) => {
  return n1 / n2;
};
calculator.multiply = (n1, n2) => {
  return n1 * n2;
};

module.exports = calculator;
