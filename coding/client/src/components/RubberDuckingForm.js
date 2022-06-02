import React,{useState} from 'react';
import '../css/duck.css'
import duck from "../images/duck.png"



const RubberDuckingForm =({selectedFact, getRandomDuckFact}) =>{

    const[displayQuestion, setDisplayQuestion] = useState('')

    const saveSubmit = (event) =>{
            event.preventDefault()
            // setQuestion(event.target.value)
            setDisplayQuestion(event.target.question.value)
            getRandomDuckFact()
    }


    return (
        <>
        <form onSubmit={saveSubmit} id="duck-form">
        <label htmlFor="question">Ask Eric:</label>
        {/* <input id="question" type="text" /> */}
        <textarea name="note" id="question" cols="50" rows="12" className="duck-text-box"></textarea>
        <input type="submit" id="duck-submit" />
      </form>
      
        <div className='duck-facts'>
        
            <h3>
                You asked: 
                <span> {displayQuestion}</span>
                <div></div>
                Eric says:
                <span> {selectedFact}</span>
                
            </h3>
            <img src={duck} id="ducking"/>
        </div>
        </>
    )
}

export default RubberDuckingForm
