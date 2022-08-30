import supertest from "supertest"
import { app } from "../../server"

describe("Router: index Router", () => {
    it("should visit '/' successfully", async () => {
        const response = await supertest(app)
            .get('/');
        expect(response.status).toEqual(200)
    })  
})