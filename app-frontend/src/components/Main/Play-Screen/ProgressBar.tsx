import './ProgressBar.css'

export default function ProgressBar({ questionNumber, maxQuestions }: ProgressBarProps) {

    const progress = (questionNumber / maxQuestions * 100).toFixed(0)
    return(
        <div className="progress-bar-container">
            <progress className="progress-bar" value={questionNumber} max={maxQuestions} />
            <h3 className='progress-bar-text'>Completed: {progress}%</h3>
        </div>
    )
}

interface ProgressBarProps {
    questionNumber: number;
    maxQuestions: number
}