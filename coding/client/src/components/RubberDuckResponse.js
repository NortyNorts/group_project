import React, {useEffect, useState} from 'react'; //CHANGED
import RubberDuckingForm from './RubberDuckingForm';

function DuckResponse(){

    const [duckFacts, setDuckFacts] = useState([]);
    const [selectedFact, setSelectedFact] = useState(null)

    useEffect(() => {
        getFacts();
      }, [])

    const getFacts = function(){
    fetch('http://localhost:9000/api/ducks')
    .then(res => res.json())
    .then(duckFacts => setDuckFacts(duckFacts));
    }


    const getRandomIndex =(array) => {

            return  Math.floor(Math.random() * array.length);

        }
    
    const getRandomDuckFact =() =>{
         setSelectedFact(duckFacts[getRandomIndex(duckFacts)].DuckFact)
         console.log(selectedFact)
         
    }
        // const array = duckFacts;
    
        // const result = getRandomItem(array);
    
    

return (
    <>

    

    <div className="duck">
            <RubberDuckingForm selectedFact={selectedFact} getRandomDuckFact={getRandomDuckFact}/>
                
            </div>
    </>
    
);
}

export default DuckResponse