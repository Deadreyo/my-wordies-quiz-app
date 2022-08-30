import exp from "constants"
import supertest from "supertest"
import { app } from "../../../server"

describe("Router: ranks Router", () => {
    it("should succeed if given correct data", async () => {
        const payload = {
            score: 90
        }
        const result = await supertest(app)
            .post('/ranks')
            .send(payload);
        expect(result.status).toEqual(200);
    })

    it("should return the correct rank from score", async () => {
        const payload = {
            score: 90
        }
        console.log("payload", payload)
        const result = await supertest(app)
            .post('/ranks')
            .send(payload);
        console.log(result.body)
        expect(result.status).toEqual(200);
        expect(result.body.rank).toBeCloseTo(80)
    })

    it("should fail if \"score\" field is missing", async () => {
        const result = await supertest(app)
            .post('/ranks');
        expect(result.status).toEqual(400);
    })

    it("should fail if \"score\" field is not a number", async () => {
        const payload = {
            score: "pizza"
        }
        const result = await supertest(app)
            .post('/ranks')
            .send(payload)
        expect(result.status).toEqual(400);
    })

})