import React from "react";



const QuizItem = ({question, index, onQuizSubmit, questionIndex, onAnswerChange})=>{

    // const handleQuizSubmit = () =>{
    //     // name of funtion
    // }

    // const handleAnswerSelect = (e) => {
    //     console.log("h",e)
    //    // onAnswerClick(question.option.answer)

    // }

    // const  handleChange = e => {
    //     //console.log("dddd", e.target.value )
    //     onAnswerClick(e.target.value)
    // };



    const optionsArray = question.options.map((option)=>{
        return (

            <>

            
            {/* <form onSubmit={handleQuizSubmit}> */}
            <li>
                <label htmlFor='radio-answer' name={option.answer}></label>
                <input onChange={()=>onAnswerChange(option.id, questionIndex)} name={question.question} type='radio'/>{option.answer}
            </li>

            
            {/* onChange={handleChange} */}
            {/* </form> */}
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