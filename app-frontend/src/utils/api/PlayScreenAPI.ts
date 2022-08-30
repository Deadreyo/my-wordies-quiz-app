import config from "../config";

export async function getWordList(): Promise<WordListItem[]> {
    const response = await fetch(config.API_URL+"/words")
    const data = await response.json() 
    return data as WordListItem[]
}

export interface WordListItem {
    id: number;
    word: string;
    pos: 'verb' | 'adverb' | 'noun' | 'adjective';
}