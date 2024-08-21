import { useState } from 'react';
import { createNote } from '../../utilities/notes-api'

export default function NewNoteForm({ setNotes, notes }) {
    const [newNote, setNewNote] = useState('');
    

    function handleChange(evt) {
        setNewNote(evt.target.value);
    }

    const handleAddNote = async (evt) => {
        evt.preventDefault();
        try {
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
    );
}