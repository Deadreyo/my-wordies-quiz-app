import config from "../config"

export async function getRank(score: number): Promise<number> {
    const payload = {
        score
    }

    const request = await fetch(config.API_URL+"/ranks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })

    const data = await request.json()
    return data.rank as number
}