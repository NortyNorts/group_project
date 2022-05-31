import React, { useState } from "react"
import QuizList from "../components/QuizList"


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



const Quiz = (({quiz})=>{

 //data array

 const QuestionData = quiz;

 const correctAnswersArray = quiz.map(answers => answers.correctAnswer);

 

 
    const [score, setScore] = useState(0)
    const [finalScore, setFinalScore] = useState(0)
    const [userAnswers, setUserAnswers] = useState([0,0,0])

    const [userCorrectAnswers, setUserCorrectAnswers] = useState([])
    const [userWrongAnswers, setUserWrongAnswer] = useState([])
    


    const onQuizSubmit = (event)=>{
        event.preventDefault()
        // const targetArray = event.target.map(banana => banana.form);
        correctAnswersArray.forEach((actualAnswer, index)=>{
            const userAnswer = userAnswers[index]
                if(actualAnswer === userAnswer){
                    const copy=[...userCorrectAnswers, userAnswer]
                    setUserCorrectAnswers(copy)
                }
                else{
                    const copy2=[...userWrongAnswers, userAnswer]
                    setUserWrongAnswer(copy2)
                }
        })

        const checkFinalScore = ()=>{
            setFinalScore(userCorrectAnswers.length)
        }

        checkFinalScore()
        console.log(userCorrectAnswers)
        console.log(userWrongAnswers)
        console.log(finalScore)
        
        

        // console.log(targetArray)


        

        //we have an array with the correct answers, index numbers all start at  0. question 1 will be index 0
        // if index of both arrays are ==== the answer is correct return 'true'
        //on submit an if their array matches our array 
        // loop through the answer list 
        //submitted answer
        // score array
        // forloop forEach element in the answer list compare that in the question list 
        //comparing 2 arrays
        // required on question 
        
    



    }

    // const onAnswerClick = (banana) => {
    //     if(banana==="true"){
    //         setScore(score + 1)
    //     }
    // }


    return (
        <>
            <h2>I am the Quiz container</h2>
            <QuizList setUserAnswers={setUserAnswers} userAnswers={userAnswers} QuestionData={QuestionData} score={score} onQuizSubmit={onQuizSubmit}/>
        </>
    )

    })


export default Quiz