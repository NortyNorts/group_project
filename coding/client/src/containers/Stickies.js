import '../css/stickies.css';
import React, { useState, useReducer } from 'react';
// useState temporarily utilised to set values for note objects (this should eventually come from db fetch, whose data will be populated by seeds file)
// useReducer utilised to encorporate all CRUD actions into one hook. This may not be possible given that editing a sticky isn't straight-forward
import { v4 as uuid } from 'uuid';
// uuid is an id generator that allows notes to be assigned with unique id. This will be needed for delete and update, both in local memory and in services

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
    // uuid function gives the note an id. math floor random function gives random rotation up to 20

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
        <div className="app" onDragOver={dragOver}>
            {/* <h1>
                ADD/EDIT
                <span>{notesState.notes.length ? `Last note created: ${notesState.lastNoteCreated}` : ' '}</span>
            </h1> */}

            <form className="note-form" onSubmit={addNote}>
                <textarea placeholder="New note..." 
                    value={noteInput}
                    onChange={event => setNoteInput(event.target.value)}>
                </textarea>
                <button>Add</button>
            </form>

            {/* need to create a state for text form, whereby the initial state is set to edit. the state should be toggled when user clicks on the edit button on any of the notes... */}

            {notesState
                .notes
                .map(note => (
                    <div className="note"
                        style={{ transform: `rotate(${note.rotate}deg)` }}
                        onDragEnd={dropNote}
                        draggable="true"
                        key={note.id}>

                        <div onClick={() => dispatch({ type: 'DELETE_NOTE', payload: note })}
                            className="close">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                        </div>

                        <div /*onClick={()=>{console.log('you clicked edit')}}*/ className="edit">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                            </svg>
                        </div>

                        <pre className="text">{note.text}</pre>
                    </div>
                ))
            }
        </div>
    );
}

export default Stickies;
