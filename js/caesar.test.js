const caesar = require("./caesar");

test("caesar cipher for lowercase", () => {
  expect(caesar("hearts", 1)).toBe("ifbsut");
});
test("caesar cipher for uppercase", () => {
  expect(caesar("HEARTS", 1)).toBe("IFBSUT");
});

test("throw an error if negative", () => {
  expect(() => caesar("hearts", -1)).toThrow("no negative value is allowed");
});
