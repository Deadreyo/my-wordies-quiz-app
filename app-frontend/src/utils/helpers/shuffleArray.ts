/**
 * Shuffles an array, returning the new shuffled one.
 * @param array The array to be shuffled.
 * @returns A new shuffled array.
 */
export default function shuffleArray<T>(array: T[]) {
    let newArray: T[] = [...array]
    let currentIndex = newArray.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [newArray[currentIndex], newArray[randomIndex]] = [
        newArray[randomIndex], newArray[currentIndex]];
    }
  
    return newArray;
}