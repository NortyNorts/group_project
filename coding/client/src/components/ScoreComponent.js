import React from "react";

const ScoreComponent = (({finalScore, finalScorePercent, userWrongAnswers, feedbackLinks})=>{

    if(finalScorePercent<80){
        return(
            <>
                <h1>{finalScore}/10</h1>
                <h1>Looks like you need a little more practice...</h1>
                <h2>Questions you got wrong:</h2>
                <ul>{userWrongAnswers.map((answer, index) => (
                    <li>
                        <a href={feedbackLinks[index+1]}>{answer}</a>
                    </li>
                ))}</ul>
            </>
            )
    }
    else{
        return(
            <>
                <h1>{finalScore}/10</h1>
                <h1>Your score is great. Go to The Chanter.</h1>
                <h2>Questions you got wrong:</h2>
                <ul>{userWrongAnswers.map((answer, index) => (
                    <li>
                        <a href={feedbackLinks[index+1]}>{answer}</a>
                    </li>
                ))}</ul>
            </>
        )
    }
}
)

export default ScoreComponent