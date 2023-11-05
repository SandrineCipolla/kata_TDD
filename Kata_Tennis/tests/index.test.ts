import {describe ,test,expect} from '@jest/globals'

describe ("Hello world!", () => {
    test("1 plus 1 and return 2", () => {
        let left = 1;
        let right = 1;
    
        let actual = (left + right);
    
        expect(actual).toBe(2);
      });
})