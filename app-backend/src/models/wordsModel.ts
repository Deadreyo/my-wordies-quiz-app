import data from './TestData.json'

export default class WordsStore {

    getWordsList() {
        let list = data.wordList
        return list;
    }
}