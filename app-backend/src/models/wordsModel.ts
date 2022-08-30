import data from './TestData.json'

/*
    WordsStore
    - Responsible only for fetching/adding/editing the data in a database.
    - For this project, we're using a JSON file instead of a database.
*/

export default class WordsStore {

    /** Retrieves the list of the words */
    getWordsList(): WordItem[] {
        let list = [...data.wordList] as WordItem[]
        return list;
    }
}

export interface WordItem {
    id: number,
    word: string,
    pos: 'noun' | 'adjective' | 'verb' | 'adverb'
}