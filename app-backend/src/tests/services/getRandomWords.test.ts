import config from "../../config/config";
import WordsStore from "../../models/wordsModel"
import getRandomWords from "../../services/getRandomWords";

describe("Service: Get Random Words List", () => {
    const randomList = getRandomWords()
    
    it("should be different", () => {
        const mainList = new WordsStore().getWordsList;
        expect(mainList).not.toEqual(randomList)
    })
    it(`should have ${config.numberOfWordsReturned} elements`, () => {
        expect(randomList.length).toEqual(config.numberOfWordsReturned)
    })
    it('should have atleast 1 of each word type', () => {
        let differentTypes = 0;
        ['noun', 'verb', 'adverb', 'adjective'].forEach( pos => {
            let index = randomList.findIndex( val => val.pos === pos);
            if(index >= 0) differentTypes++
            else fail(randomList)
        })
        expect(differentTypes).toEqual(4)
    })
})