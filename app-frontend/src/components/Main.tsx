import { useState } from 'react'
import { Navigate, Route, Routes,  } from 'react-router-dom'
import '../styles/Main.css'
import MenuScreen from './Menu-Screen'
import PlayScreen from './Play-Screen'
import ScoreScreen from './Score-Screen'
import TriangleShapes from './TrianglesShapes'

export default function Main() {
    /*
        This state will hold the score.
        The score will be set inside PlayScreen,
        and shown inside ScoreScreen.
    */
    const [score, setScore] = useState(0)

    // Tracks whether the user actually finished the quiz or not.
    // If the user didn't finish, he won't be able to visit Score Screen, and will be redirected.
    const [finished, setFinished] = useState(false)

    function changeFinish(finished: boolean) {
        setFinished(finished)
    }

    function changeScore(score: number) {
        setScore(score)
    }
    
    return (
        <main>
            <div className="content-page">
                <TriangleShapes />
                <Routes>
                    <Route path='/' element={<MenuScreen />} />
                    <Route path='/play' element={<PlayScreen changeScore={changeScore} changeFinish={changeFinish} />} />
                    <Route path='/score' element={finished? <ScoreScreen score={score} /> : <Navigate to={'../play'} replace />} />
                </Routes>
            </div>
        </main>
    )
}