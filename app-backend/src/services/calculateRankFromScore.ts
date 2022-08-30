import RanksStore from "../models/ranksModel";
import orderArrayAscendingly from "./helpers/orderArrayAscendingly";

const store = new RanksStore();

/** Takes a score and returns its rank */
export default function CalculateRankFromScore(score: number): number {
    const rankList = store.getRanks();

    // Sorting the array ascendingly for easier comparing
    const sortedList = orderArrayAscendingly(rankList)

    // Getting the "rank" of this score with respect to the other ranks
    const rankingIndex = sortedList.findIndex( val => val >= score)

    // Initial calculation of rank, without any rounding
    let rank = rankingIndex / rankList.length * 100

    // Rounding of decimals
    rank = Math.round((rank + Number.EPSILON) * 100) / 100

    return rank
}