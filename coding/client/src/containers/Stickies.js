import '../css/stickies.css';
import React, { useState, useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import StickiesList from '../components/StickiesList';


const Stickies = ({initialNotesState, notesReducer}) => {
    const [notesState, dispatch] = useReducer(notesReducer, initialNotesState);
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
    };

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
