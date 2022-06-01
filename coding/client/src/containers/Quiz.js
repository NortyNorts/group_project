import React, { useState } from "react"
import QuizList from "../components/QuizList"
import ScoreComponent from "../components/ScoreComponent";


const Quiz = (({finalScore, quiz, setUserCorrectAnswers, userCorrectAnswers, userWrongAnswers, setUserWrongAnswers, setFinalScore}) => {

    const QuestionData = quiz;

    const correctAnswersArray = quiz.map(answers => answers.correctAnswer);

    const feedbackLinks = quiz.map(answers => answers.link)

    const finalScorePercent = (userCorrectAnswers.length/correctAnswersArray.length)*100

        const [userAnswers, setUserAnswers] = useState([])
        
        const onQuizSubmit = (event)=>{
            event.preventDefault()
            setUserCorrectAnswers([])
            setUserWrongAnswers([])
            
            const userCorrectAnswersNext = []
            const userWrongAnswersNext = []
            
            correctAnswersArray.forEach((actualAnswer, index)=>{
                const userAnswer = userAnswers[index]
                if(actualAnswer === userAnswer){
                    userCorrectAnswersNext.push(userAnswer)
                } else {

                    userWrongAnswersNext.push((index+1) + " " + " ...try taking a look at: " + feedbackLinks[index])

                }    
            })

            setUserCorrectAnswers(userCorrectAnswersNext)
            setUserWrongAnswers(userWrongAnswersNext)

            console.log(userWrongAnswersNext)

            setFinalScore(userCorrectAnswersNext.length)


            
        }

    return (
        <>
            <QuizList setUserAnswers={setUserAnswers} userAnswers={userAnswers} QuestionData={QuestionData} onQuizSubmit={onQuizSubmit}
            />
            {finalScore ? <ScoreComponent finalScorePercent={finalScorePercent} finalScore={finalScore} userWrongAnswers={userWrongAnswers} feedbackLinks={feedbackLinks}/> : null }
        </>
    )

    })


export default Quiz