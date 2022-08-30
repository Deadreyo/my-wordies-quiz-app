import RanksStore from "../../models/ranksModel"

const store = new RanksStore()
describe("Model: ranks Store", () => {
    const list = store.getRanks()

    it("should have 30 elements", () => {
        expect(list.length).toEqual(30);
    })
})