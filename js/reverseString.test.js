const reverseString = require("./reverseString");

test("reverse string", () => {
  expect(reverseString("hello")).toEqual("olleh");
});
