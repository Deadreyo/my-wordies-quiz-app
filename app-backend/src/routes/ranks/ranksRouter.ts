import express from "express";


const ranksRouter = express.Router()

ranksRouter.post('/', (req, res) => {
    res.send("ranks")
})

export default ranksRouter;