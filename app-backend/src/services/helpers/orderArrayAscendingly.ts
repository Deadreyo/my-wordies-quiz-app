
/**Returns an array that is ordered ascendingly */
export default function orderArrayAscendingly(array: number[]): number[] {
    const newArray = [...array].sort( (a, b) => a - b)
    return newArray
}