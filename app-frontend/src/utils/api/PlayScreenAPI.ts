import testData from './TestData.json'

export async function getWordList() {
    return testData.wordList as WordListItem[]
}

export interface WordListItem {
    id: number;
    word: string;
    pos: 'verb' | 'adverb' | 'noun' | 'adjective';
}