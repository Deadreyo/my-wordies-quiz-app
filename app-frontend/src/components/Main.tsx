import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import '../styles/Main.css'
import MenuScreen from './Menu-Screen'
import PlayScreen from './Play-Screen'
import TriangleShapes from './TrianglesShapes'

export default function Main() {
    /*
        This state will hold the score.
        The score will be set inside PlayScreen,
        and shown inside ScoreScreen.
    */
    const [score, setScore] = useState(0)

    function changeScore(score: number) {
        setScore(score)
    }
    
    return (
        <main>
            <div className="content-page">
                <TriangleShapes />
                <Routes>
                    <Route path='/' element={<MenuScreen />} />
                    <Route path='/play' element={<PlayScreen changeScore={changeScore} />} />
                    <Route path='/score' element={<p>{score}</p>} />
                </Routes>
            </div>
        </main>
    )
}