import express from "express";
import { getWordsList } from "../../handlers/wordsHandler";

const wordsRouter = express.Router()

wordsRouter.get('/', getWordsList)

export default wordsRouter;