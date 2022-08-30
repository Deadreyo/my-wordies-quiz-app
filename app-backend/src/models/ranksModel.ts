import data from './TestData.json'

/*
    RanksStore
    - Responsible only for fetching/adding/editing the data in a database.
    - For this project, we're using a JSON file instead of a database.
*/

export default class RanksStore {

    /** Retreives the list of the ranks */
    getRanks(): number[] {
        return data.scoresList
    }

}