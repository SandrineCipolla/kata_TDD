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

const deuce = (playerOneScore: number, playerTwoScore: number): string => {
  if (playerOneScore === 3 && playerTwoScore === 4) return "avantage playerTwo";
  if (playerOneScore === 4 && playerTwoScore === 3) return "avantage playerOne";
  if (
    playerOneScore >= 3 && playerOneScore === playerTwoScore)
  
    return "deuce";

  return computeScore(playerOneScore, playerTwoScore);
};

const playerScore: { [key: number]: string } = {
  0: Love,
  1: "15",
  2: "30",
  3: "40",
};
function formatScore(playerOneScore: string, playerTwoScore: string): string {
  return playerOneScore + " - " + playerTwoScore;
}

export { computeScore, deuce };
