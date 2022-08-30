import express from "express";
import { postGetRank } from "../../handlers/ranksHandler";
import { postGetRankValidator } from "../../middleware/inputValidator";


const ranksRouter = express.Router()

ranksRouter.post('/', postGetRankValidator, postGetRank)

export default ranksRouter;