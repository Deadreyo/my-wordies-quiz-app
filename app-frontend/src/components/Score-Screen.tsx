import '../styles/Score-Screen.css'

export default function ScoreScreen({ score }: ScoreScreenProps) {

    return(
        <div>{score}</div>
    )
}

interface ScoreScreenProps {
    score: number
}