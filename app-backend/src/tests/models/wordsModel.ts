import WordsStore from "../../models/wordsModel"

const store = new WordsStore()
describe("Model: words Store", () => {
    const list = store.getWordsList()

    it("should have 15 elements", () => {
        expect(list.length).toEqual(15)
    })
})