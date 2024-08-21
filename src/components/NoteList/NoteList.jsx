import NewNoteForm from '../../components/NewNoteForm/NewNoteForm'
import { useState } from 'react'


export default function NoteList() {
    const [notes, setNotes] = useState([]);

    return (
        <>
            <NewNoteForm setNotes={setNotes} notes={notes} />
            <ul>
                {notes.length === 0 ? (
                    <p>No Notes Yet!</p>
                ) : (
                    notes.map((note, idx) => (
                        <li key={idx}>{note.text} <br />
                            <div>{new Date(note.createdAt).toLocaleString()}</div>
                        </li>
                    ))
                )}
            </ul>
        </>
    );
}

//note.createdAt - stores the date and time when the note was created.
// createdAt - comes from mongodb mongoose and field is automatically added if{ timestamps: true } in  schema
// new Date - helos format