const Love: string = "Love";

const computeScore = (
  playerOneScore: number,
  playerTwoScore: number
): string => {
  if (playerOneScore >= 4) return "playerOne wins";
  if (playerTwoScore >= 4) return "playerTwo wins";

  const displayPlayerOneScore = playerScore[playerOneScore];
  const displayPlayerTwoScore = playerScore[playerTwoScore];

  return formatScore(displayPlayerOneScore, displayPlayerTwoScore);
};

const computeScoreWithDeuce = (
  playerOneScore: number,
  playerTwoScore: number
): string => {
  if (
    bothPlayersHaveMoreThan3Points(playerOneScore, playerTwoScore) &&
    playerOneScoreIs1PointHigher(playerOneScore, playerTwoScore)
  )
    return "avantage playerOne";
  if (
    bothPlayersHaveMoreThan3Points(playerOneScore, playerTwoScore) &&
    playerTwoScoreIs1PointHigher(playerTwoScore, playerOneScore)
  )
    return "avantage playerTwo";

  if (
    bothPlayersHaveMoreThan3Points(playerOneScore, playerTwoScore) &&
    playerScoreAreEqual(playerOneScore, playerTwoScore)
  )
    return "deuce";

  return computeScore(playerOneScore, playerTwoScore);
};

const playerScore: { [key: number]: string } = {
  0: Love,
  1: "15",
  2: "30",
  3: "40",
};
function playerTwoScoreIs1PointHigher(playerTwoScore: number, playerOneScore: number) {
    return playerTwoScore - playerOneScore === 1;
}

function playerScoreAreEqual(playerOneScore: number, playerTwoScore: number) {
  return playerOneScore === playerTwoScore;
}

function playerOneScoreIs1PointHigher(
  playerOneScore: number,
  playerTwoScore: number
) {
  return playerOneScore - playerTwoScore === 1;
}

function bothPlayersHaveMoreThan3Points(
  playerOneScore: number,
  playerTwoScore: number
) {
  return playerOneScore >= 3 && playerTwoScore >= 3;
}

function formatScore(playerOneScore: string, playerTwoScore: string): string {
  return playerOneScore + " - " + playerTwoScore;
}

export { computeScoreWithDeuce };
