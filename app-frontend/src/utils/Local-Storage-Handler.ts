
const key = 'pastAttempts'

export function getData(): number[] | null {
    let data = localStorage.getItem(key)
    if(data) {
        return JSON.parse(data)
    } else {
        return null
    }
}

export function saveRank(score: number): void {
    let data = getData()
    if(data) {
        data.push(score)
        localStorage.setItem(key, JSON.stringify(data))
    } else {
        localStorage.setItem(key, JSON.stringify([score]))
    }
}