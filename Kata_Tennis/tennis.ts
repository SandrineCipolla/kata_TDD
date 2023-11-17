const Love: string = "Love";
const Fifteen: string = "15";
const Thirty: string = "30";
const Forty: string = "40";


const computeScore = (
  playerOneScore: number,
  playerTwoScore: number
): string => {
  if (playerOneScore >= 4) return "playerOne wins"; 
  if (playerTwoScore >= 4) return "playerTwo wins";
/* créer une fonction qui retourne le gagnant et une fonction une qui affiche*/
  const displayPlayerOneScore = TennisScore[playerOneScore];
  const displayPlayerTwoScore = TennisScore[playerTwoScore];

  return formatScore(displayPlayerOneScore, displayPlayerTwoScore);
};

const computeScoreWithDeuce = (
  playerOneScore: number,
  playerTwoScore: number
): string => {

  if (isDeuce(playerOneScore,playerTwoScore)) {
    return "deuce";
  }
  
  if (bothPlayersHaveMoreThan3Points(playerOneScore, playerTwoScore)) {
    if (playerOneScoreIs1PointHigher(playerOneScore, playerTwoScore))
      return "avantage playerOne";
    if (playerTwoScoreIs1PointHigher(playerTwoScore, playerOneScore))
      return "avantage playerTwo";

    //if (playerScoreAreEqual(playerOneScore, playerTwoScore)) return "deuce";
  }

  return computeScore(playerOneScore, playerTwoScore);
};

/*const playerScore: { [key: number]: string } = {
  0: Love,
  1: "15",
  2: "30",
  3: "40",
};*/
export enum TennisScore {
  Love = "Love",
  Fifteen = "15",
  Thirty = "30",
  Forty = "40",
}

function playerTwoScoreIs1PointHigher(
  playerTwoScore: number,
  playerOneScore: number
) {
 // return playerTwoScore - playerOneScore === 1;
  return playerTwoScore === playerOneScore + 1;
}

/*function playerScoreAreEqual(playerOneScore: number, playerTwoScore: number) {
  return playerOneScore === playerTwoScore;
}*/

function playerOneScoreIs1PointHigher(
  playerOneScore: number,
  playerTwoScore: number
) {
  //return playerOneScore - playerTwoScore === 1;
  return playerOneScore === playerTwoScore + 1;
}

function bothPlayersHaveMoreThan3Points(
  playerOneScore: number,
  playerTwoScore: number
) {
  return playerOneScore >= 3 && playerTwoScore >= 3;
}

function isDeuce(playerOneScore: number, playerTwoScore: number) {
  return playerOneScore >= 3 && playerTwoScore >= 3 && playerOneScore === playerTwoScore;
}

function formatScore(playerOneScore: string, playerTwoScore: string): string {
  //return playerOneScore + " - " + playerTwoScore;
  return `${playerOneScore} - ${playerTwoScore}`;
}

export { computeScoreWithDeuce };
