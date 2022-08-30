import { Request, Response } from "express";
import getRandomWords from "../services/getRandomWords";

// handles the GET '/words' endpoint.
export function getWordsList(req: Request, res: Response) {
    const list = getRandomWords()
    res.status(200).json(list)
}