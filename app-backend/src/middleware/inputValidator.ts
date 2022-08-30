import { NextFunction, Request, Response } from "express";

/** Makes sure that the request body has "score" field, and that it is convertable to number */
export function postGetRankValidator(req: Request, res: Response, next: NextFunction) {
    const body = req.body
    if(body.score !== undefined) {
        if(!isNaN(+body.score)) {
            next()
        } else {
            res.status(400).json("\"score\" field value should be a number.")
        }
    } else {
        res.status(400).json("\"score\" field is required in request body.")
    }
}