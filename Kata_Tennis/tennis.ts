const Love: string = "Love";

const computeScore = (
  playerOneScore: number,
  playerTwoScore: number
): string => {
  if (playerOneScore === 4) return "playerOne wins";
  //   if (playerOneScore === 3)
  //     return formatScore(playerScore(playerOneScore), Love);
  //   if (playerOneScore === 2)
  //     return formatScore(playerScore(playerOneScore), Love);
  //   if (playerOneScore === 1)
  //     return formatScore(playerScore(playerOneScore), Love);
  if (playerTwoScore === 4) return "playerTwo wins";
//   if (playerTwoScore === 3) return formatScore(Love, playerScore(playerTwoScore));
//   if (playerTwoScore === 2) return formatScore(Love, playerScore(playerTwoScore));
//   if (playerTwoScore === 1) return formatScore(Love, playerScore(playerTwoScore));

const displayPlayerOneScore = playerScore(playerOneScore);
const displayPlayerTwoScore = playerScore(playerTwoScore);
  
//   return formatScore(playerScore(playerOneScore), Love);
//   return formatScore(Love, playerScore(playerTwoScore));
return formatScore(displayPlayerOneScore, displayPlayerTwoScore)
  
};
function playerScore(score: number): string {
  if (score === 3) return "40";
  if (score === 2) return "30";
  if (score === 1) return "15";
  return Love;
}
function formatScore(playerOneScore: string, playerTwoScore: string): string {
  return playerOneScore + " - " + playerTwoScore;
}

export default computeScore;
