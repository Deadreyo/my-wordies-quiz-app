import shuffleArray from '../helpers/shuffleArray';
import testData from './TestData.json'

export async function getWordList() {
    const data = testData.wordList as WordListItem[]
    let shuffledArr = shuffleArray(data)
    return shuffledArr
}

export interface WordListItem {
    id: number;
    word: string;
    pos: 'verb' | 'adverb' | 'noun' | 'adjective';
}