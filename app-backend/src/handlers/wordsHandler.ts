import { Request, Response } from "express";
import WordsStore from "../models/wordsModel";
import getRandomWords from "../services/getRandomWords";

const store = new WordsStore()
export function getWordsList(req: Request, res: Response) {
    const list = getRandomWords()
    res.status(200).json(list)
}