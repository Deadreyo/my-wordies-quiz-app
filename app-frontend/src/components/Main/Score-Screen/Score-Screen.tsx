import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as ScoreScreenAPI from '../../../utils/api/ScoreScreenAPI'
import * as localStorageHandler from '../../../utils/Local-Storage-Handler'
import Loading from '../../Error-Components/Loading'
import './Score-Screen.css'

export default function ScoreScreen({ score }: ScoreScreenProps) {

    // Initial value is -1, meaning it didn't load yet
    const [rank, setRank] = useState(-1)

    // On mounting, fetch the rank
    useEffect( () => {
        async function getRank() {
            let result = await ScoreScreenAPI.getRank(score)
            setRank(result)
        }

        getRank()
    }, [])

    // On rank being changed, save it to local storage
    useEffect( () => {
        if(rank > -1) {
            localStorageHandler.saveRank(rank)
            console.log('RANK SAVED')
        }
    }, [rank])

    return(
        <div className="score-screen-container">
            <h1>Congratulations!</h1>
            <h2>Your Rank is</h2>
            {
                rank > -1 ?
                    <h2 className='score-screen-score'>{rank}</h2>
                :
                    <Loading />
            }
            <Link to="/play" className='button'>Try Again</Link>
            <br />
            <Link to="/" className='button'>Main Menu</Link>
        </div>
    )
}

interface ScoreScreenProps {
    score: number
}