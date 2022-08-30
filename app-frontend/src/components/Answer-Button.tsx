import { useEffect, useRef } from 'react'
import '../styles/Answer-Button.css'

export default function AnswerButton({ text, correct, handleAnswerClicked, disabled }: AnswerButtonProps) {
    // Ref to point to the created button element
    let buttonRef = useRef(null as unknown as HTMLButtonElement)

    // Ref to see whether it was clicked or not, to decide whether should be greyed or not.
    // If a button is clicked, that button should show animation while others become greyed out.
    let clickedRef = useRef(false)

    // Reset clickedRef to false every re-render
    useEffect( () => {
        clickedRef.current = false
    })

    function handleClick() {
        // Activating the animation
        buttonRef.current.classList.add(correct? 'correct-anim' : 'wrong-anim')

        // Identifies that this specific button was clicked. It will not become grey, so to not stop animation.
        clickedRef.current = true

        // Setting up a clean for the animation
        setTimeout(() => {
            if(buttonRef.current) {
                buttonRef.current.classList.remove(correct? 'correct-anim' : 'wrong-anim')
            }
        }, 1500);

        // Calling the answer handler with the value of 'correct'
        handleAnswerClicked(correct)
    }

    /*
        So basically how this works is:
        - A button is made and is passed its text and a click handler function and: 
            - ${correct} which decides if this is correct option or not
            - ${disabled} which decides if buttons should be disabled. It is passed as true if a button was clicked.
        - If ${disabled} is true, it means an option was chosen. Then we will need to know whether this specific button was the one clicked or not.
            - If this was the one clicked, we don't add class 'disabled' (which turns the button grey), we instead let it play the animation.
            - If this wasn't the one clicked, we add class 'disabled' to turn it grey.
            To know if it was the one clicked or not, we make use of a Ref ${clickedRef}. We don't need a state, since the parent will itself re-render the children after click.
    */

    return (
        <div className="answer-div">
            <button 
                ref={buttonRef} 
                className={`button ${disabled && !clickedRef.current && 'disabled'}`} 
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