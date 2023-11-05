import {describe ,test,expect, it} from '@jest/globals'
import computeScore from '../tennis';

describe ("Tennis Kata", () => {
    it("le jeu démarre, le score est de Love - Love ", () => {
        let playerOneScore = 0;
        let playerTwoScore = 0;
        
        let score = computeScore (playerOneScore, playerTwoScore);
  
        expect(score).toBe('Love - Love');
      });
})