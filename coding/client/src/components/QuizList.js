import React from "react"
import QuizItem from "./QuizItem"


const QuizList = (({QuestionData})=>{

const QuizArray = QuestionData.map((question, index)=>{
    return <QuizItem question={question} key={index}/>

})

    return (
        <>
            <p>{QuizArray}</p>
        </>
    )

})





export default QuizList