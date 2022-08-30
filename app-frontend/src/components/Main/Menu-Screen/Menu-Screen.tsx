import { Link } from 'react-router-dom'
import './Menu-Screen.css'

export default function MenuScreen() {

    return (
        <div className="main-menu">
            <h2 className='menu-title'>Welcome to My Wordies Quiz!</h2>
            <Link to='play' className="button">Start Quiz</Link>
        </div>
    )
}