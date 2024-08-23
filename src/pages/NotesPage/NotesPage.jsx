import NewNoteForm from '../../components/NewNoteForm/NewNoteForm'
import NoteList from '../../components/NoteList/NoteList';
import { useState } from 'react'

export default function NotesPage(){
    const [notes, setNotes] = useState([]);

    return (
        <main>
            <NewNoteForm setNotes={setNotes} />         
            <NoteList notes={notes} setNotes={setNotes} />
        </main>
    )
}