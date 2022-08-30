import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

export const logError: ErrorRequestHandler = (err, req, res, next) => {
    console.error(err.stack)
    next(err)
}

export const clientErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
    res.status(500).json("Something went wrong internally...")
}
