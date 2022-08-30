import config from "../config/config";
import WordsStore, { WordItem } from "../models/wordsModel";
import shuffleArray from "./helpers/shuffleArray";

const store = new WordsStore()
export default function getRandomWords(): WordItem[] {
    // get the data from store
    let data = store.getWordsList()

    // make sure there's 1 of each type (i.e. add 1 of each type)
    let newData: WordItem[] = [];
    ['noun', 'verb', 'adverb', 'adjective'].forEach(pos => {
        let found = data.find( val => val.pos === pos)!
        newData.push(found)
        
        // remove that element so there's no duplicate elements in the array
        data.splice( data.indexOf(found), 1 )
    });
    
    // then add more elements, and take only ${numberOfWordsReturned} value from config (default 10)
    newData.push(...data)
    newData.length = config.numberOfWordsReturned;

    // shuffle the data
    let shuffledData = shuffleArray(newData)
    return shuffledData
}