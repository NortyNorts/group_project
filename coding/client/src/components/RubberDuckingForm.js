import React from 'react';

const RubberDuckingForm =() =>{

    const[question, setQuestion] = useState("")

    const handleQuestionChange = (event) =>{
        setQuestion(event.target.value)
    }

    const resetForm = () => {
        setQuestion('')

    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        
        resetForm()
    }


    return (
        <form onSubmit={handleFormSubmit}>
        
        <input type="text" name="question" value={question} onChange={handleQuestionChange} />
    
        <input type="submit" value="Save" />
        </form>
    )
}

export default RubberDuckingForm
