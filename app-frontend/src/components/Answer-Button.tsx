import { useRef } from 'react'
import '../styles/Answer-Button.css'

export default function AnswerButton({ text, correct, handleAnswerClicked, disabled }: AnswerButtonProps) {
    // Ref to point to the created button element
    let buttonRef = useRef(null as unknown as HTMLButtonElement)

    function handleClick() {
        // Activating the animation
        buttonRef.current.classList.add(correct? 'correct-anim' : 'wrong-anim')
        // Setting up a clean for the animation
        setTimeout(() => {
            if(buttonRef.current) {
                buttonRef.current.classList.remove(correct? 'correct-anim' : 'wrong-anim')
            }
        }, 1500);

        // Calling the answer handler with the value of 'correct'
        handleAnswerClicked(correct)
    }

    return (
        <div className="answer-div">
            <button 
                ref={buttonRef} 
                className="button" 
                onClick={handleClick}
                disabled={disabled}>
                {text}
            </button>
        </div>
    )
}

interface AnswerButtonProps {
    text: string,
    correct: boolean,
    handleAnswerClicked: (correct: boolean) => void,
    disabled: boolean
}