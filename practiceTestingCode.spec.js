// import {player} from "../index"; //new way//
const player = require("../index"); 
//old way//
const {hands} = require("../index");
// when hands is imported its imported as an object wrapping {} around hands makes it come in as an array instead of an array wrapped in an object//
const {getHand} = require("../index");

const {playRound} = require("../index");
const {playGame} = require("../index");

// toBe//
describe("Player names", () => {
  test("Is there a player named dan", () => {
      let name = player.player[3].name;
      console.log(player.player[0]);
    expect(name).toBe("dan");
  });
});

describe("Find a specific player", () =>{
    test("Is there a player named dan", () => {
        let nameDan = player[3].name;
        console.log(player.name)
      expect(nameDan).toBe("dan");
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

//'toBeTruthy()'//
describe("Is it true that this round is null", () => {
    test("is it true that playround comes back null if player1 hand = player 2 hand", () => {
      expect(playRound).toBeTruthy();
    });
  });

//'toHaveBeenCalled()'//
describe("Has playRound been called", () => {
    test("has play round been called", () => {
    let playGame1 = playGame;
    let playRound1 = playRound;
      expect(playGame1(playRound)).toHaveBeenCalled();
    });
  });

//tohavebeencalled//
// function drinkAll(callback, flavour) {
//     if (flavour !== 'octopus') {
//       callback(flavour);
//     }
//   }
  
//   describe('drinkAll', () => {
//     test('drinks something lemon-flavoured', () => {
//       const drink = jest.fn();
//       drinkAll(drink, 'lemon');
//       expect(drink).toHaveBeenCalled();
    });
  
    test('does not drink something octopus-flavoured', () => {
      const drink = jest.fn();
      drinkAll(drink, 'octopus');
      expect(drink).not.toHaveBeenCalled();
    });
  });


//tohavereturned//
test('drinks returns', () => {
    const drink = jest.fn(() => true);
  
    drink();
  
    expect(drink).toHaveReturned();
  });


