
export default function orderArrayDescendingly(array: number[]): number[] {
    const newArray = array.sort( (a, b) => b - a)
    console.log('new array: ', newArray)
    return newArray
}