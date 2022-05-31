import React, { useState } from "react"
import QuizList from "../components/QuizList"
import ScoreComponent from "../components/ScoreComponent";


//A static quiz. We will have 10 questions
// Each option will be a radio - button
//when the user selects the right answer the score should increament by 1 point? or only show score on finalScore?

//When the quiz is completed a final score should be displayed. if final score is less than < 4 also show a set of links or a set of explanation to aid in the students learning
//does final score then need to be its own component for the if elseif else statement?
//option 2 : on submit return  additional links


//set up seed file: text- question 1 question with 4 options isCorrect: true


//How will the quiz data be set up? An array of quiz objects? 
// Needs a isCorrect: true or false
//map out the array and return new array?
//map out the choices or the questions?

    //Properties needed: Score / finalScore / / 
    
    //



const Quiz = (({finalScore, quiz, setUserWrongAnswer, userWrongAnswers, setUserCorrectAnswers, userCorrectAnswers, setFinalScore})=>{

 //data array

 const QuestionData = quiz;

 const correctAnswersArray = quiz.map(answers => answers.correctAnswer);

 const finalScorePercent = (userCorrectAnswers.length/correctAnswersArray.length)*100

    const [userAnswers, setUserAnswers] = useState([])
    
    const onQuizSubmit = (event)=>{
        event.preventDefault()
        setUserCorrectAnswers([])
        setUserWrongAnswer([])
        
        const userCorrectAnswersNext = []
        const userWrongAnswersNext = []
        
        correctAnswersArray.forEach((actualAnswer, index)=>{
            const userAnswer = userAnswers[index]
            if(actualAnswer === userAnswer){
                userCorrectAnswersNext.push(userAnswer)
            } else {
                userWrongAnswersNext.push(userAnswer)
            }
            
        })
        setUserCorrectAnswers(userCorrectAnswersNext)
        setUserWrongAnswer(userWrongAnswersNext)

        setFinalScore(userCorrectAnswersNext.length)
        
    }

    return (
        <>
            <h2>I am the Quiz container</h2>
            <QuizList setUserAnswers={setUserAnswers} userAnswers={userAnswers} QuestionData={QuestionData} onQuizSubmit={onQuizSubmit}
            />
            {finalScore ? <ScoreComponent finalScorePercent={finalScorePercent} finalScore={finalScore}/> : null }
        </>
    )

    })


export default Quiz