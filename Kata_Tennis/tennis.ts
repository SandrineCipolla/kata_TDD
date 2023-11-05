const Love : string = "Love"

const computeScore = (playerOneScore : number, playerTwoScore : number) : string => {
    if (playerOneScore === 4) return "playerOne wins";
    if (playerOneScore === 3) return formatScore("40",Love);
    if (playerOneScore === 2) return formatScore("30",Love);
    if (playerOneScore === 1) return formatScore("15",Love);
    
    return formatScore(Love,Love);
    
}
function formatScore(playerOneScore: string, playerTwoScore: string): string {
    return playerOneScore + " - " + playerTwoScore;
}

export default computeScore


