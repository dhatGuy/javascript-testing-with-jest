const capitalize = require("./capitalize");

test("capitalize string", () => {
  expect(capitalize("hello")).toEqual("Hello");
});
