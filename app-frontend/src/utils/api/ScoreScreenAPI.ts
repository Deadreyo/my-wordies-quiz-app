import orderArrayDescendingly from "../helpers/orderArrayDescendingly";
import testData from './TestData.json'

export async function getRank(score: number): Promise<number> {
    const data = testData.scoresList
    let orderedArr = orderArrayDescendingly(data)
    const rank = orderedArr.findIndex( (val) => score >= val)
    
    // increment one since it is 0-indexed...
    return rank + 1
}