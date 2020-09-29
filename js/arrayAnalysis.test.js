const analyze = require("./arrayAnalysis");

describe("returns average, min, max and length of an array", () => {
  test("returns object with the properties: average, min, max and length", () => {
    const expectedResult = {
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    };
    const input = [1, 8, 3, 4, 2, 6];

    const result = analyze(input);

    expect(result).toEqual(expectedResult);
  });

  test("returns 0 if input is an empty array", ()=> {
    const expectedResult = 0;
    const input = []

    const result = analyze(input)

    expect(result).toEqual(expectedResult)
  })
});
