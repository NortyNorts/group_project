import React from "react";



const QuizItem = ({question, index, onQuizSubmit, questionIndex, onAnswerChange})=>{



    const optionsArray = question.options.map((option)=>{
        return (

            <>
            <li>
                <label htmlFor='radio-answer' name={option.answer}></label>
                <input onChange={()=>onAnswerChange(option.id, questionIndex)} name={question.question} type='radio'/>{option.answer}
            </li>
            </>
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