const calculator = require("./calculator");

test("add, subtract, divide and multiply", () => {
  expect(calculator.add(4, 2)).toEqual(6);
  expect(calculator.subtract(4, 2)).toEqual(2);
  expect(calculator.divide(4, 2)).toEqual(2);
  expect(calculator.multiply(4, 2)).toEqual(8);
});
