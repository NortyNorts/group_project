import '../css/stickies.css';
import React, { useState, useReducer,useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import StickiesList from '../components/StickiesList';
import UsersService from '../services/UserService';



const Stickies = ({notesReducer, currentUserStickes, setCurrentUserStickes, currentUser}) => {
    
// useEffect(()=>{
//     dispatch({ type: 'ADD_NOTE', payload: currentUserStickes });
// },[currentUser])

    const [notesState, dispatch] = useReducer(notesReducer, currentUserStickes);

    const [noteInput, setNoteInput] = useState('');
    

    const addNote = event => {
        event.preventDefault();
        if (!noteInput) {
            return;
        }

        const newNote = {
            id: uuid(),
            text: noteInput, 
            rotate: Math.floor(Math.random() * 20)
        }
        dispatch({ type: 'ADD_NOTE', payload: newNote });
        setNoteInput('');
        // createSticky(newNote)
    };

    // const createSticky = newSticky => {
    //     UsersService.addSticky(newSticky, currentUser._id)
    //       .then(savedSticky => setCurrentUserStickes([ ...currentUserStickes, savedSticky]));
    //   };

    const dragOver = event => {
        event.stopPropagation();
        event.preventDefault();
    }

    const dropNote = event => {
        event.target.style.left = `${event.pageX - 50}px`;
        event.target.style.top = `${event.pageY - 50}px`;
    };

    return (
        <>
            <StickiesList dragOver={dragOver} noteInput={noteInput} addNote={addNote} setNoteInput={setNoteInput} dropNote={dropNote} notesState={notesState} dispatch={dispatch}/>
        </>
    );
}

export default Stickies;
