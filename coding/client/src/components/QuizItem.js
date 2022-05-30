import React from "react";



const QuizItem = ({question, index})=>{

    const optionsArray = question.options.map(banana=>{
        return (
            <li>{banana.answer}</li>
        )
        
        
    })

    return (
        <>
            <h1>{question.question}</h1>
            {optionsArray}
        
        </>
    )
}





export default QuizItem