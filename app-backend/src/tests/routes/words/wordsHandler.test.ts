import supertest from "supertest"
import config from "../../../config/config";
import { app } from "../../../server"

describe("Router: words Router", () => {

    it("should fetch the list with correct number of elements", async () => {
        const response = await supertest(app)
            .get('/words');
        expect(response.status).toEqual(200)
        expect(response.body.length).toEqual(config.numberOfWordsReturned)
    })
})