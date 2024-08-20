import { useState } from 'react';
import { createNote } from '../../utilities/notes-api'

export default function NoteList({ user }) {
    const [newNote, setNewNote] = useState('');
    const [notes, setNotes] = useState([]);

    function handleChange(evt) {
        setNewNote(evt.target.value);
    }

    const handleAddNote = async (evt) => {
        evt.preventDefault();
        try {
            // const prevNotes = {...notes}
            const userNotes = await createNote({text: newNote})
            setNotes(userNotes)
            setNewNote(''); 

        } catch {
            setNotes({
                ...notes,
                error: 'Submission failed - Try again'
            })
        }
    }

    return (
        <>
            <h1>My Notes</h1>
            <form onSubmit={handleAddNote}>
                <input 
                    type="text" 
                    name="note"
                    value={newNote}
                    onChange={handleChange}
                    placeholder="Enter a new note"
                    required
                />
                <button type="submit">Add Note</button>
            </form>
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