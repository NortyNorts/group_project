import React from "react"
import QuizItem from "./QuizItem"
import '../css/quiz.css'



const QuizList = (({QuestionData, score, onQuizSubmit, setUserAnswers, userAnswers})=>{

    const onAnswerChange = (answerId, questionIndex) =>{
        const newArray=[...userAnswers]
        newArray[questionIndex]= answerId
        setUserAnswers(newArray)
        
    }   

const QuizArray = QuestionData.map((question, index)=>{
    return <QuizItem onAnswerChange={onAnswerChange} questionIndex={index}  question={question} key={index} score={score} onQuizSubmit={onQuizSubmit}/>

})

    return (
        <>  
            <form onSubmit={onQuizSubmit}>
                <div className="quiz-array"><p>{QuizArray}</p></div>
                    <input type="submit" name="quiz-submit" id="quiz" value="Submit"/>
            </form>
        </>
    )

})





export default QuizList