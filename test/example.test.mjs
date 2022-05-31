import { expect } from "chai";
import { distance } from "../src/example.mjs";

describe("Example test fixture", () => {
  it("Calculate distance between São Paulo and North Pole in km", () => {
    expect(distance).to.be.greaterThan(7290);
    expect(distance).to.be.lessThan(7310);
  });
});
