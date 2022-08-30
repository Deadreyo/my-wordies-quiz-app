import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as localStorageHandler from '../../../utils/Local-Storage-Handler'
import './Menu-Screen.css'
import PastAttemptsList from './Past-Attempts-List'

export default function MenuScreen() {

    // Used to store the previous attempts data.
    const [pastAttempts, setPastAttempts] = useState([] as number[])

    // On mounting, check if there's data saved in local storage and use it.
    useEffect( () => {
        let data = localStorageHandler.getData()
        if(data) {
            setPastAttempts(data);
        }
    }, [])

    return (
        <div className="main-menu">
            <h2 className='menu-title'>Welcome to My Wordies Quiz!</h2>
            <Link to='play' className="button">Start Quiz</Link>
            {pastAttempts.length? <PastAttemptsList pastAttempts={pastAttempts} /> : null }
        </div>
    )
}