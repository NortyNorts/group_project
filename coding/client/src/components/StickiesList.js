import React from "react";
import '../css/stickies.css'


const StickiesList = ({dragOver, noteInput, addNote, setNoteInput, dropNote, notesState, dispatch}) => {

    return(
        <div className="app" onDragOver={dragOver}>
            <form className="note-form" onSubmit={addNote}>
                <textarea placeholder="New note..." 
                    value={noteInput}
                    onChange={event => setNoteInput(event.target.value)}>
                </textarea>
                <button>Add</button>
            </form>

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
    )
}

export default StickiesList