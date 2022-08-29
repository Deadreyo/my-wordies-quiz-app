import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Play-Screen.css'
import * as PlayScreenAPI from '../utils/api/PlayScreenAPI'
import shuffleArray from '../utils/helpers/shuffleArray'
import AnswerButton from './Answer-Button'
import Loading from './Loading'

// Decides how many questions. Maximum 15.
const numberOfQuestions = 3;

export default function PlayScreen({ changeScore }: PlayScreenProps) {
    // This state will be responsible for the list of words.
    const [words, setWords] = useState([] as PlayScreenAPI.WordListItem[])

    // This state will be responsible for the current index/order of question.
    // This will be responsible in refreshing the component to render new questions.
    const [question, setQuestion] = useState(0)

    /*
        This will track whether the user has already chose an option for this question,
        and prevent him from clicking on multiple options.
    */
    const [choseAlready, setChoseAlready] = useState(false)

    /* 
        This will store the number of correct answers.
        We don't need a state to keep the number of correct answers,
        so using Ref instead to avoid unnecessary re-renders.
    */
    const correctAnsCount = useRef(0)

    // Will be used to navigate to score page
    const navigate = useNavigate()

    /*
        On mounting:
        - Retreives the items from the API.
        - Shuffles the items.
        - Set the words state.
    */
    useEffect( () => {
        async function getWords () {
            let fetchedList = await PlayScreenAPI.getWordList()
            let shuffledArr = shuffleArray(fetchedList)
            setWords(shuffledArr)
        }

        getWords()
        
    }, [])


    function handleAnswerClicked(correct: boolean) {
        setChoseAlready(true)
        correct && correctAnsCount.current++;

        // A little delay to let the animation run and the user see the feedback
        setTimeout(() => {
            setChoseAlready(false)
            if(question +1 < numberOfQuestions) {
                setQuestion(question +1)
            } else {
                let score = +(correctAnsCount.current / numberOfQuestions * 100).toFixed(0)
                changeScore( score )
                navigate('/score')
            }
        }, 2000);
    }

    /* 
        A short-circuit to stop the rest of the logic from running
        and giving errors if words didn't load yet.
        Could go another way about it via dividing this component into further smaller components
        and only render them when words are available, but in this case it isn't much worth it.
    */
    if(!words[0]) {
        return (<Loading />)
    }

    const {word, pos} = words[question]
    
    return (
        <div>
            <div className='question-title'>
                <h1>{question +1}) <span className='question-word'>{word}</span></h1>
            </div>
            <div className="answer-container">
                <AnswerButton text='noun' correct={pos === 'noun'} handleAnswerClicked={handleAnswerClicked} disabled={choseAlready} />
                <AnswerButton text='adjective' correct={pos === 'adjective'} handleAnswerClicked={handleAnswerClicked} disabled={choseAlready}/>
                <AnswerButton text='verb' correct={pos === 'verb'} handleAnswerClicked={handleAnswerClicked} disabled={choseAlready}/>
                <AnswerButton text='adverb' correct={pos === 'adverb'} handleAnswerClicked={handleAnswerClicked} disabled={choseAlready}/>
            </div>
        </div>
    )
}

interface PlayScreenProps {
    changeScore: (score: number) => void
}