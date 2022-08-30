import express, { Request, Response } from "express";
import { clientErrorHandler, logError } from "./middleware/ErrorHandlers";
import routes from "./routes";
import config from './config/config'

const app = express()

app.use(express.json())

app.use(routes)
app.use(logError)
app.use(clientErrorHandler)

app.listen(config.port, () => {
    console.log(`The application is listening on port ${config.port}!`)
})