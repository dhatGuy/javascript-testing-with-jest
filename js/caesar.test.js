const caesar = require("./caesar");

describe("caesar cipher", () => {
  test("caesar cipher for lowercase", () => {
    const expectedResult = "ifbsut";
    const input = "hearts";
    const key = 1;

    const result = caesar(input, key);

    expect(result).toBe(expectedResult);
  });
  test("caesar cipher for uppercase", () => {
    const expectedResult = "IFBSUT";
    const input = "HEARTS";
    const key = 1;

    const result = caesar(input, key);

    expect(result).toBe(expectedResult);
  });

  test("throw an error if negative key is passed", () => {
    const expectedResult = "no negative value is allowed";
    const input = "hearts";
    const key = -9;

    const result = () => caesar(input, key);

    expect(result).toThrow(expectedResult);
  });
});
