import React, {useState, useEffect, useReducer} from 'react'
import Anecdotes from '../components/Anecdotes'
import Header from '../components/Header'
import Links from '../components/Links'
import Quiz from './Quiz'
import RubberDucking from './RubberDucking'
import Stickies from './Stickies'
import "../css/main.css"
import UsersService from '../services/UserService'


const Main = (()=>{

    const [users, setUsers] = useState ([])
    

    useEffect(() => {
        UsersService.getUsers()
          .then(users => setUsers(users));
      }, []);



    const initialNotesState = {
        lastNoteCreated: null,
        notes: [
            {id: '1', text: "I'm the first note", rotate: 12},
            {id: '2', text: "I'm the second note", rotate: 2},
            {id: '3', text: "I'm the thrid note", rotate: 8}
        ],
    };
    // sets notes array to contain a few starting notes. we can add terminal commands, shortcuts and any other info here. Eventually this will be a useEffect hook that fetches data from mongodb on page load


    const notesReducer = (prevState, action) => {
        switch (action.type) {
            case 'ADD_NOTE': {
                const newState = { 
                    notes: [...prevState.notes, action.payload],
                    lastNoteCreated: new Date().toTimeString().slice(0, 8)
                };
                console.log('After ADD_NOTE: ', newState);
                return newState;
            }
    
            case 'DELETE_NOTE': {
                const newState = {
                    ...prevState,
                    notes: prevState.notes.filter(note => note.id !== action.payload.id)
                };
                console.log('After DELETE_NOTE: ', newState);
                return newState;
            }
    
            
            }
        }

    return(
        <>
            <div className="Main">
                <Header users={users}/>
                {/* <LoginForm isShowLogin={isShowLogin}/> */}
            </div>
            <Quiz/>
            <Stickies initialNotesState={initialNotesState} notesReducer={notesReducer}/>
            <Anecdotes/>
            <Links/>
            <RubberDucking/>
        </>
    )
})

export default Main