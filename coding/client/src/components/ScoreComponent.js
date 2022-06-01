import React from "react";
import '../css/score.css'

const ScoreComponent = (({finalScore, finalScorePercent, userWrongAnswers, feedbackLinks})=>{

    if(finalScorePercent<80){
        return(
            <> 
                <div className="final-score-container">
                <h1>{finalScore}/10</h1>
                <h1>Looks like you need a little more practice...</h1>
                <h2>Questions you got wrong:</h2>
                <ul>{userWrongAnswers.map((answer, index) => (
                    <li>
                        <a href={feedbackLinks[index+1]}className="quiz-links">{answer}</a>
                    </li>
                ))}</ul>
                </div>
            </>
            )
    }
    else{
        return(
            <>
            <div className="final-score-container">
                <h1>{finalScore}/10</h1>
                <h1>Your score is great. Go to The Chanter.</h1>
                <h2>Questions you got wrong:</h2>
                <ul>{userWrongAnswers.map((answer, index) => (
                    <li>
                        <a href={feedbackLinks[index+1]} className="quiz-links">{answer}</a>
                    </li>
                ))}</ul>
            </div>
            </>
        )
    }
}
)

export default ScoreComponent