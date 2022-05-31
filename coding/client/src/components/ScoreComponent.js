import React from "react";

const ScoreComponent = (({finalScore, finalScorePercent})=>{

    if(finalScorePercent<80){
        return(
            <>
                <h1>Your score is crap</h1>
                <h1>{finalScore}/10</h1>
            </>
            )
    }
    else{
        return(
            <>
                <h1>Your score is great</h1>
                <h1>{finalScore}/10</h1>
            </>
        )
    }
}
)

export default ScoreComponent