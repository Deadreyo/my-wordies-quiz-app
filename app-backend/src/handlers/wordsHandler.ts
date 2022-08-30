import { Request, Response } from "express";
import WordsStore from "../models/wordsModel";
import getRandomWords from "../services/getRandomWords";

const store = new WordsStore()
export function getWordsList(req: Request, res: Response) {
    try {
        const list = getRandomWords()
        res.status(200).json(list)
    } catch (e) {
        res.status(500).send('Internal Server Error. Try again.')
        console.error('getWordsList Handler', e)
    }
}