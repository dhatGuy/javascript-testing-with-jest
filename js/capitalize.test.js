const capitalize = require("./capitalize");

describe("returns capitalized string", ()=>{

  test("capitalize string", () => {
    const expectedResult = "Hello"
    const input = "hello"

    const result = capitalize(input)

    expect(result).toEqual(expectedResult);
  })

  test("returns an empty string if input is not a string", ()=>{
    const expectedResult = ""
    const input = 14

    const result = capitalize(input)

    expect(result).toEqual(expectedResult)
  })
});
