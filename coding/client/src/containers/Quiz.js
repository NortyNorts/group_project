import React, { useState } from "react"


//A static quiz. We will have 10 questions
// Each option will be a radio - button
//when the user selects the right answer the score should increament by 1 point? or only show score on finalScore?

//When the quiz is completed a final score should be displayed. if final score is less than < 4 also show a set of links or a set of explanation to aid in the students learning
//does final score then need to be its own component for the if elseif else statement?
//option 2 : on submit return  


//How will the quiz data be set up? An array of quiz objects? 
// Needs a isCorrect: true or false
//map out the array and return new array?
//map out the choices or the questions?


const Quiz = (()=>{

    //Properties needed: Score / finalScore / currentQuestion / 
    
    const [score, setScore] = useState(0)
    const [finalScore, setFinalScore] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState(0)


const Quiz = (()=>{


    return(
        <>
            <h2>I am the Quiz container</h2>
        </>
    )
})

export default Quiz