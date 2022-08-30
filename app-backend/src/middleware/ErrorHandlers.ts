import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

/** Logs the error to the console */
export const logError: ErrorRequestHandler = (err, req, res, next) => {
    console.error(err.stack)
    next(err)
}

/** Sends an error message to the client */
export const clientErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
    res.status(500).json("Something went wrong internally...")
}
