// import {player} from "../index"; //new way//

const player = require("../index"); 
//old way//

const {hands} = require("../index");
// when hands is imported its imported as an object wrapping {} around hands makes it come in as an array instead of an array wrapped in an object//
const {getHand} = require("../index");

const {playRound} = require("../index");
const {playGame} = require("../index");

//toBe//
describe("Player names", () => {
  test("Is there a player named dan", () => {
      let name = player.player[3].name;
      console.log(player.player[0]);
    expect(name).toBe("dan");
  });
});

// //toHaveLength//
describe("Hands object length", () => {
    test("How long is the hands array", () => {
    let handArr = hands;
      expect(handArr).not.toHaveLength(5);
    });
  });

//'toBeTruthy()'//
describe("Is it true that", () => {
    test("is it true that hand array contains paper", () => {
    let handsArr = hands;
    let paperIndex = "paper";
      expect(handsArr = 'paper').toBeTruthy();
    });
  });


//tohavebeencalled//
function drinkAll(callback, flavour) {
    if (flavour !== 'strawberry') {
      callback(flavour);
    }
  }
  
  describe('drinkAll', () => {
    test('drinks something lemon-flavoured', () => {
      const drink = jest.fn();
      drinkAll(drink, 'lemon');
      expect(drink).toHaveBeenCalled();
    });
  
    test('does not drink something octopus-flavoured', () => {
      const drink = jest.fn();
      drinkAll(drink, 'strawberry');
      expect(drink).not.toHaveBeenCalled();
    });
  });


//tohavereturned//
test('drinks returns', () => {
    const drink = jest.fn(() => true);
  
    drink();
  
    expect(drink).toHaveReturned();
  });


