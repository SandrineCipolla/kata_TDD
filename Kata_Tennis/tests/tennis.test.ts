import { describe, test, expect, it } from "@jest/globals";
import { computeScore, deuce } from "../tennis";

describe("Tennis Kata", () => {
  it("le jeu démarre, le score est de Love - Love ", () => {
    let playerOneScore = 0;
    let playerTwoScore = 0;

    let score = computeScore(playerOneScore, playerTwoScore);

    expect(score).toBe("Love - Love");
  });
  it("le joueur 1 marque, le score est de 15 - Love ", () => {
    let playerOneScore = 1;
    let playerTwoScore = 0;

    let score = computeScore(playerOneScore, playerTwoScore);

    expect(score).toBe("15 - Love");
  });
  it("le joueur 1 a marqué 2 fois, le score est de 30 - Love ", () => {
    let playerOneScore = 2;
    let playerTwoScore = 0;

    let score = computeScore(playerOneScore, playerTwoScore);

    expect(score).toBe("30 - Love");
  });
  it("le joueur 1 a marqué 3 fois, le score est de 40 - Love ", () => {
    let playerOneScore = 3;
    let playerTwoScore = 0;

    let score = computeScore(playerOneScore, playerTwoScore);

    expect(score).toBe("40 - Love");
  });
  it("le joueur 1 a marqué 4 fois, le joueur 1 gagne ", () => {
    let playerOneScore = 4;
    let playerTwoScore = 0;

    let score = computeScore(playerOneScore, playerTwoScore);

    expect(score).toBe("playerOne wins");
  });
  it("le joueur 2 marque , le score est de Love - 15 ", () => {
    let playerOneScore = 0;
    let playerTwoScore = 1;

    let score = computeScore(playerOneScore, playerTwoScore);

    expect(score).toBe("Love - 15");
  });
  it("le joueur 2 a marqué 2 fois, le score est de Love - 30 ", () => {
    let playerOneScore = 0;
    let playerTwoScore = 2;

    let score = computeScore(playerOneScore, playerTwoScore);

    expect(score).toBe("Love - 30");
  });
  it("le joueur 2 a marqué 3 fois, le score est de Love - 40 ", () => {
    let playerOneScore = 0;
    let playerTwoScore = 3;

    let score = computeScore(playerOneScore, playerTwoScore);

    expect(score).toBe("Love - 40");
  });
  it("le joueur 2 a marqué 4 fois, le joueur 2 gagne ", () => {
    let playerOneScore = 0;
    let playerTwoScore = 4;

    let score = computeScore(playerOneScore, playerTwoScore);

    expect(score).toBe("playerTwo wins");
  });
  it("le joueur 1 a marqué 2 fois et le joueur 2 a marqué 1 fois ", () => {
    let playerOneScore = 2;
    let playerTwoScore = 1;

    let score = computeScore(playerOneScore, playerTwoScore);

    expect(score).toBe("30 - 15");
  });
  it("le joueur 1 a marqué 3 fois et le joueur 2 a marqué 1 fois ", () => {
    let playerOneScore = 3;
    let playerTwoScore = 1;

    let score = computeScore(playerOneScore, playerTwoScore);

    expect(score).toBe("40 - 15");
  });
  it("le joueur 1 a marqué 4 fois et le joueur 2 a marqué 1 fois, le joueur 1 gagne ", () => {
    let playerOneScore = 4;
    let playerTwoScore = 1;

    let score = computeScore(playerOneScore, playerTwoScore);

    expect(score).toBe("playerOne wins");
  });
  it("le joueur 1 a marqué 1 fois et le joueur 2 a marqué 2 fois ", () => {
    let playerOneScore = 1;
    let playerTwoScore = 2;

    let score = computeScore(playerOneScore, playerTwoScore);

    expect(score).toBe("15 - 30");
  });
  it("le joueur 1 a marqué 1 fois et le joueur 2 a marqué 3 fois ", () => {
    let playerOneScore = 1;
    let playerTwoScore = 3;

    let score = computeScore(playerOneScore, playerTwoScore);

    expect(score).toBe("15 - 40");
  });
  it("le joueur 1 a marqué 1 fois et le joueur 2 a marqué 4 fois, le joueur 2 gagne ", () => {
    let playerOneScore = 1;
    let playerTwoScore = 4;

    let score = computeScore(playerOneScore, playerTwoScore);

    expect(score).toBe("playerTwo wins");
  });
  it("le joueur 1 a marqué 1 fois et le joueur 2 marque 1 fois ", () => {
    let playerOneScore = 1;
    let playerTwoScore = 1;

    let score = computeScore(playerOneScore, playerTwoScore);

    expect(score).toBe("15 - 15");
  });
  it("le joueur 1 a marqué 1 fois et le joueur 2 marque 2 fois ", () => {
    let playerOneScore = 1;
    let playerTwoScore = 2;

    let score = computeScore(playerOneScore, playerTwoScore);

    expect(score).toBe("15 - 30");
  });
  it("le joueur 1 a marqué 3 fois et le joueur 2 marque 2 fois ", () => {
    let playerOneScore = 3;
    let playerTwoScore = 2;

    let score = computeScore(playerOneScore, playerTwoScore);

    expect(score).toBe("40 - 30");
  });
  it("le joueur 1 a marqué 3 fois et le joueur 2 marque 3 fois ", () => {
    let playerOneScore = 3;
    let playerTwoScore = 3;

    let score = deuce(playerOneScore, playerTwoScore);

    expect(score).toBe("deuce");
  });
  it("le score est deuce et le joueur 1 marque un 4ieme point:il a l'avantage ", () => {
    let playerOneScore = 4;
    let playerTwoScore = 3;

    let score = deuce(playerOneScore, playerTwoScore);

    expect(score).toBe("avantage playerOne");
  });
  it("le score est avantage playerOne et le joueur 1 marque encore 1 point : il gagne ", () => {
    let playerOneScore = 5;
    let playerTwoScore = 3;

    let score = deuce(playerOneScore, playerTwoScore);

    expect(score).toBe("playerOne wins");
  });
  it("le score est avantage playerTwo et le joueur 2 marque encore 1 point : il gagne ", () => {
    let playerOneScore = 3;
    let playerTwoScore = 5;

    let score = deuce(playerOneScore, playerTwoScore);

    expect(score).toBe("playerTwo wins");
  });
  it("le score est deuce et le joueur 2 marque un 4ieme point:il a l'avantage ", () => {
    let playerOneScore = 3;
    let playerTwoScore = 4;

    let score = deuce(playerOneScore, playerTwoScore);

    expect(score).toBe("avantage playerTwo");
  });
  it("le joueur 1 a l'avantage et le joueur 2 égalise", () => {
    let playerOneScore = 4;
    let playerTwoScore = 4;

    let score = deuce(playerOneScore, playerTwoScore);

    expect(score).toBe("deuce");
  });
  it("le joueur 2 a l'avantage et le joueur 1 égalise", () => {
    let playerOneScore = 4;
    let playerTwoScore = 4;

    let score = deuce(playerOneScore, playerTwoScore);

    expect(score).toBe("deuce");
  });
});
