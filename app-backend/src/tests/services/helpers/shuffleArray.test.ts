import shuffleArray from "../../../services/helpers/shuffleArray"

describe("Helper: Shuffle Array", () => {
    it("should shuffle it", () => {
        let testData = [1,2,3,4,5,6,7,8]
        let shuffledData = shuffleArray(testData)
        expect(testData).not.toEqual(shuffledData)
    })
})