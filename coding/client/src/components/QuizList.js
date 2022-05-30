import React from "react"
import QuizItem from "./QuizItem"


const QuizList = (({QuestionData, onAnswerClick, score})=>{

const QuizArray = QuestionData.map((question, index)=>{
    return <QuizItem question={question} key={index} onAnswerClick={onAnswerClick} score={score}/>

})

    return (
        <>
            <h1>score:{score}</h1>
            <p>{QuizArray}</p>
        </>
    )

})





export default QuizList