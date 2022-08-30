import express, { Request, Response } from "express";
import { clientErrorHandler, logError } from "./middleware/ErrorMiddlewares";
import routes from "./routes";

const app = express()

app.use(express.json())

app.use(routes)
app.use(logError)
app.use(clientErrorHandler)

app.listen(4000, () => {
    console.log('The application is listening on port 4000!')
})