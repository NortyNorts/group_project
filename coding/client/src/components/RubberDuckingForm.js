import React,{useState} from 'react';


const RubberDuckingForm =({selectedFact, getRandomDuckFact}) =>{

    const[randomDuckFact, setRandomDuckFact] = useState('')
    const[displayQuestion, setDisplayQuestion] = useState('')



    
    const saveSubmit = (event) =>{
            event.preventDefault()
            // setQuestion(event.target.value)
            setDisplayQuestion(event.target.question.value)
            getRandomDuckFact()

            setRandomDuckFact(selectedFact)

    }


    return (
        <>
        <form onSubmit={saveSubmit}>
        <label htmlFor="question">Ask Eric:</label>
        <input id="question" type="text" />
        <input type="submit"  />
      </form>

        <div>
            <h2>
                you asked: 
                <span> {displayQuestion}</span>
                <p></p>
                Eric says:
                <span> {randomDuckFact}</span>
            </h2>
        </div>
        </>
    )
}

export default RubberDuckingForm
