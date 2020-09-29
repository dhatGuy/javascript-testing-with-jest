const reverseString = require("./reverseString");

describe("returns a reversed string", ()=>{
  test("reverse string", () => {
    const expectedResult = "olleh"
    const input = "hello"

    const result = reverseString(input)

    expect(result).toEqual(expectedResult);
  });

  test("returns an empty string if input is not a string", ()=>{
    const expectedResult = ""
    const input = 14

    const result = reverseString(input)

    expect(result).toEqual(expectedResult)
  })

})
