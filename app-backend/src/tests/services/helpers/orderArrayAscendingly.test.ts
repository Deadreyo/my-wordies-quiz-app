import orderArrayAscendingly from "../../../services/helpers/orderArrayAscendingly"

describe("Helper: Order Array Ascendingly", () => {
    it("should order correctly", () => {
        let test = [1,4,2,3]
        let processed = orderArrayAscendingly(test)
        expect(processed).toEqual([1,2,3,4])
    })
})