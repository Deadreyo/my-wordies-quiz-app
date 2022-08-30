import express from "express";
import ranksRouter from "./ranks/ranksRouter";
import wordsRouter from "./words/wordsRouter";


const routes = express.Router()

routes.get('/', (_req, res) => {
    res.json('Available routes: GET /words - POST /ranks')
})
routes.use('/words', wordsRouter)
routes.use('/ranks', ranksRouter)

export default routes;