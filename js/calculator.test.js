const calculator = require("./calculator");

describe("add, subtract, divide and multiply", () => {
  test("returns addition of two numbers", ()=>{
    const expectedResult = 6
    const num1 = 4;
    const num2 = 2

    const result = calculator.add(num1, num2)

    expect(result).toEqual(expectedResult)
  })

  test("returns subtraction of two numbers", ()=>{
    const expectedResult = 2
    const num1 = 4;
    const num2 = 2

    const result = calculator.subtract(num1, num2)

    expect(result).toEqual(expectedResult)
  })

  test("returns division of two numbers", ()=>{
    const expectedResult = 2
    const num1 = 4;
    const num2 = 2

    const result = calculator.divide(num1, num2)

    expect(result).toEqual(expectedResult)
  })

  test("returns multiplication of two numbers", ()=>{
    const expectedResult = 8
    const num1 = 4;
    const num2 = 2

    const result = calculator.multiply(num1, num2)

    expect(result).toEqual(expectedResult)
  })
});
