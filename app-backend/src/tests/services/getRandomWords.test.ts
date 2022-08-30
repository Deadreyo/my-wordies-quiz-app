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
        ['noun', 'verb', 'adverb', 'adjective'].forEach( pos => {
            let index = randomList.findIndex( val => val.pos === pos);
            expect(index).toBeGreaterThanOrEqual(0)
        })
    })
})