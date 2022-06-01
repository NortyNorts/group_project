import React from "react";

const ScoreComponent = (({finalScore, finalScorePercent, userWrongAnswers})=>{

    if(finalScorePercent<80){
        return(
            <>
                <h1>{finalScore}/10</h1>
                <h1>Looks like you need a little more practice</h1>
                <h1>Here is somewhere you can get some more information</h1>
                <h2>Questions you got wrong:</h2>
                <ul>{userWrongAnswers.map((answer) => (
                    <li>{answer}</li>
                ))}</ul>
            </>
            )
    }
    else{
        return(
            <>
                <h1>{finalScore}/10</h1>
                <h1>Your score is great</h1>
            </>
        )
    }
}
)

export default ScoreComponent