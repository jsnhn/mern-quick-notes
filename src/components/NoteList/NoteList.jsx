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
                        <li key={idx}>{note.text}</li>
                    ))
                )}
            </ul>
        </>
    );
}