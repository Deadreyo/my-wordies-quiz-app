import { Request, Response } from "express";
import CalculateRankFromScore from "../services/calculateRankFromScore";

// handles the POST '/ranks' endpoint.
export function postGetRank(req: Request, res: Response) {
    const { score } = req.body;
    const rank = CalculateRankFromScore(score)
    res.status(200).json({rank})
}