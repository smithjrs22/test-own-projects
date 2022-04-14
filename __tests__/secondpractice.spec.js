const Shakesphere = require("../script");
const array = require("../script")

//toBe//
describe("Is Shakesphere alive", () => {
    test("Is Shakesphere alive", () => {
        let aliveOrDead = Shakesphere.isAlive;
        
      expect(aliveOrDead).toBe("no");
    });
  });