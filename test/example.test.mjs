import { expect } from "chai";
import { distance } from "../src/example.mjs";
import "chai-fs";

describe("Example test fixture", () => {
  it("Calculate distance between random coordinates and the time required", () => {
    const lat1 = getRandomInt(-90, 90);
    const long1 = getRandomInt(-90, 90);
    const lat2 = getRandomInt(-90, 90);
    const long2 = getRandomInt(-90, 90);



    expect(now()).to.equal(new Date().getTime());
    expect(distance).to.be.greaterThan(7290);
    expect(distance).to.be.lessThan(7310);
  });
});

describe("Get a PG of random int", () =>{
  it("get the sequence in Geometric Progression", () => {
    expect(randomGP(5, 3, 2)).to.equal(randomGP(Math.random(), Math.random(), Math.random()));
});
});


describe("File test", () => {
  // Never will find the right word, is randoming every time =D
  it("find the world", () => {
      expect(readFile("file.txt")).to.equal((Math.random() + 1).toString(36).substring(7));
      resetFile();
  });
});



