import { hello } from "../src";

describe("Test Index Import", () => {
  test("Is HelloWorld Works?", () => {
    expect(hello).toBeDefined();
  });
});
