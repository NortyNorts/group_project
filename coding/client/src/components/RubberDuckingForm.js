import React,{useState} from 'react';
import '../css/duck.css'
import duck from "/Users/andrewsmith/CodeClan_work/project_work/group_project/group_project/coding/client/src/images/duck.png"



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
        <form onSubmit={saveSubmit} id="duck-form">
        <label htmlFor="question">Ask Eric:</label>
        <input id="question" type="text" />
        {/* <textarea name="note" id="question" cols="67" rows="12"></textarea> */}
        <input type="submit" id="duck-submit" />
      </form>
      
        <div className='duck-facts'>
        
            <h3>
                You asked: 
                <span> {displayQuestion}</span>
                <div></div>
                Eric says:
                <span> {randomDuckFact}</span>
                
            </h3>
            <img src={duck} id="ducking"/>
        </div>
        </>
    )
}

export default RubberDuckingForm
