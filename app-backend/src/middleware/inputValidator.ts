import { NextFunction, Request, Response } from "express";

export function postGetRankValidator(req: Request, res: Response, next: NextFunction) {
    const body = req.body
    if(body.score && !isNaN(body.score)) {
        next()
    } else {
        res.status(400).json("\"score\" field is required in request body and should be a number.")
    }
}