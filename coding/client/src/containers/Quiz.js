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



const Quiz = (()=>{

 //data array

 const QuestionData = [

        {question:'Which of the following are true of Python dictionaries:', 
            options:[
            {id:1,answer: 'Dictionaries are accessed by key.', isCorrect: true},
            {id:2,answer: 'A dictionary can contain any object type except another dictionary.', isCorrect: false},
            {id:3,answer: 'All the keys in a dictionary must be of the same type', isCorrect: false},
            {id:4,answer: 'Items are accessed by their position in a dictionary', isCorrect: false}
                    ]
        },

        {question:'What is a question?', 
            options:[
            {id:1,answer: 'blue', isCorrect: false},
            {id:2,answer: 'orange', isCorrect: true},
            {id:3,answer: 'red', isCorrect: false},
            {id:4,answer: 'green', isCorrect: false}
                    ]
        },

        {question:'What is life?', 
            options:[
            {id:1,answer: 'apple', isCorrect: false},
            {id:2,answer: 'banana', isCorrect: false},
            {id:3,answer: 'pear', isCorrect: true},
            {id:4,answer: 'kiwi', isCorrect: false}
                    ]
        }
    ] 

    //properties

    const [score, setScore] = useState(0)
    const [finalScore, setFinalScore] = useState(false)

    const onAnswerClick = (banana) => {
        if(banana==="true"){
            setScore(score + 1)
        }
    }


    return (
        <>
            <h2>I am the Quiz container</h2>
            <QuizList QuestionData={QuestionData} onAnswerClick={onAnswerClick} score={score}/>
        </>
    )

    })


export default Quiz