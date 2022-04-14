
const hands = ["rock", "paper", "scissors"];

module.exports = handsy; 
let handsy = function handsy(){
  return "rock, paper, scissors";
}

let getHand = function getHand() {
    return hands[parseInt(Math.random() * 10) % 3];
  }
//new way to export use "const player"//
const player = [
  { name: "ann", hand: getHand(), score: 0 },
  { name: "betty", hand: getHand(), score: 0 },
  { name: "cj", hand: getHand(), score: 0 },
  { name: "dan", hand: getHand(), score: 0 },
];

module.exports = player; 
//old way use module.exports = {player} leave const player as is no export prior to const//

module.exports = {hands};
module.exports = {getHand};
module.exports = {playGame};

let ann = player[0];
let betty = player[1];
let cj = player[2];
let dan = player[3];


function playRound(player1, player2) {
  player1.hand = getHand();
  player2.hand = getHand();
  if (player1.hand == player2.hand) {
    console.log(
      player1.name +
        " threw '" +
        player1.hand +
        "' and " +
        player2.name +
        " threw '" +
        player2.hand +
        ".' This round is a tie. The score is now " +
        player1.name +
        ": " +
        player1.score +
        " " +
        player2.name +
        ": " +
        player2.score
    );
    return null;
  } else if (player1.hand == "rock" && player2.hand == "scissors") {
    player1.score++;
    console.log(
      player1.name +
        " threw '" +
        player1.hand +
        "' and " +
        player2.name +
        " threw '" +
        player2.hand +
        ".' " +
        player1.name +
        " wins the round! The score is now " +
        player1.name +
        ": " +
        player1.score +
        " " +
        player2.name +
        ": " +
        player2.score
    );
    return player1;
  } else if (player1.hand == "rock" && player2.hand == "paper") {
    player2.score++;
    console.log(
      player1.name +
        " threw '" +
        player1.hand +
        "' and " +
        player2.name +
        " threw '" +
        player2.hand +
        ".' " +
        player2.name +
        " wins the round! The score is now " +
        player1.name +
        ": " +
        player1.score +
        " " +
        player2.name +
        ": " +
        player2.score
    );
    return player2;
  } else if (player1.hand == "paper" && player2.hand == "rock") {
    player1.score++;
    console.log(
      player1.name +
        " threw '" +
        player1.hand +
        "' and " +
        player2.name +
        " threw '" +
        player2.hand +
        ".' " +
        player1.name +
        " wins the round! The score is now " +
        player1.name +
        ": " +
        player1.score +
        " " +
        player2.name +
        ": " +
        player2.score
    );
    return player1;
  } else if (player1.hand == "paper" && player2.hand == "scissors") {
    player2.score++;
    console.log(
      player1.name +
        " threw '" +
        player1.hand +
        "' and " +
        player2.name +
        " threw '" +
        player2.hand +
        ".' " +
        player2.name +
        " wins the round! The score is now " +
        player1.name +
        ": " +
        player1.score +
        " " +
        player2.name +
        ": " +
        player2.score
    );
    return player2;
  } else if (player1.hand == "scissors" && player2.hand == "paper") {
    player1.score++;
    console.log(
      player1.name +
        " threw '" +
        player1.hand +
        "' and " +
        player2.name +
        " threw '" +
        player2.hand +
        ".' " +
        player1.name +
        " wins the round! The score is now " +
        player1.name +
        ": " +
        player1.score +
        " " +
        player2.name +
        ": " +
        player2.score
    );
    return player1;
  } else if (player1.hand == "scissors" && player2.hand == "rock") {
    player2.score++;
    console.log(
      player1.name +
        " threw '" +
        player1.hand +
        "' and " +
        player2.name +
        " threw '" +
        player2.hand +
        ".' " +
        player2.name +
        " wins the round! The score is now " +
        player1.name +
        ": " +
        player1.score +
        " " +
        player2.name +
        ": " +
        player2.score
    );
    return player2;
  }
}

//Plays a match between 2 players
function playGame(player1, player2, playUntil) {
  while (player1.score < playUntil && player2.score < playUntil) {
    playRound(player1, player2);
  }
  if (player1.score == playUntil) {
    console.log(
      "\n" +
        player1.name +
        " wins the match, " +
        player1.score +
        " to " +
        player2.score +
        "!\n"
    );
  } else {
    console.log(
      "\n" +
        player2.name +
        " wins the match, " +
        player2.score +
        " to " +
        player1.score +
        "!\n"
    );
  }
}

// Plays a tournament between 4 players
function playTournament(player1, player2, player3, player4, playUntil) {
  playGame(player1, player2, playUntil);
  playGame(player3, player4, playUntil);
  if (player1.score == playUntil && player3.score == playUntil) {
    player1.score = 0;
    player3.score = 0;
    playGame(player1, player3, playUntil);
    if (player1.score == playUntil) {
      console.log(player1.name + " is the champion!");
    } else {
      console.log(player3.name + " is the champion!");
    }
  } else if (player1.score == playUntil && player4.score == playUntil) {
    player1.score = 0;
    player4.score = 0;
    playGame(player1, player4, playUntil);
    if (player1.score == playUntil) {
      console.log(player1.name + " is the world champion!");
    } else {
      console.log(player4.name + " is the world champion!");
    }
  } else if (player2.score == playUntil && player3.score == playUntil) {
    player2.score = 0;
    player3.score = 0;
    playGame(player2, player3, playUntil);
    if (player2.score == playUntil) {
      console.log(player2.name + " is the world champion!");
    } else {
      console.log(player3.name + " is the world champion!");
    }
  } else if (player2.score == playUntil && player4.score == playUntil) {
    player2.score = 0;
    player4.score = 0;
    playGame(player2, player4, playUntil);
    if (player2.score == playUntil) {
      console.log(player2.name + " is the world champion!");
    } else {
      console.log(player4.name + " is the world champion!");
    }
  }
}

// Play a single match between 2 players
playGame(ann, betty,5);

// Play out a tournament between 4 players
playTournament(ann, betty, cj, dan, 5);
