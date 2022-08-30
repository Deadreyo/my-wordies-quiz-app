import CalculateRankFromScore from "../../services/calculateRankFromScore"

describe("Service: Calculate Rank From Score", () => {
    it("score of 90 should be rank 80", () => {
        let rank = CalculateRankFromScore(90)
        expect(rank).toBeCloseTo(80)
    })
    it("score of 60 should be rank 56.67", () => {
        let rank = CalculateRankFromScore(60)
        expect(rank).toBeCloseTo(56.67)
    })
    it("score of 50 should be rank 40", () => {
        let rank = CalculateRankFromScore(50)
        expect(rank).toBeCloseTo(40)
    })
})