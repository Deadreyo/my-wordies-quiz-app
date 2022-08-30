import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as ScoreScreenAPI from '../../../utils/api/ScoreScreenAPI'
import Loading from '../../Error-Components/Loading'
import './Score-Screen.css'

export default function ScoreScreen({ score }: ScoreScreenProps) {

    // Initial value is -1, meaning it didn't load yet
    const [rank, setRank] = useState(-1)

    useEffect( () => {
        async function getRank() {
            let result = await ScoreScreenAPI.getRank(score)
            setRank(result)
        }

        getRank()
    }, [])

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
            <Link to="../play" className='button'>Try Again</Link>
        </div>
    )
}

interface ScoreScreenProps {
    score: number
}