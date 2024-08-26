import NewNoteForm from '../../components/NewNoteForm/NewNoteForm'
import NoteList from '../../components/NoteList/NoteList';
import * as itemsAPI from '../../utilities/notes-api'
import { useState, useEffect } from 'react'

export default function NotesPage(){
    const [notes, setNotes] = useState([]);

    useEffect( function () {
        async function getItems() {
            const items = await itemsAPI.getAll()
            setNotes(items)
        }
        getItems()
    }, [])

    return (
        <main>
            <NewNoteForm setNotes={setNotes} />         
            <NoteList notes={notes} setNotes={setNotes} />
        </main>
    )
}