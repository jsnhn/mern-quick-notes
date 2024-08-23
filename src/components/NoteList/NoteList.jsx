import { deleteNote } from '../../utilities/notes-api'
import SortToggle from '../../components/SortToggle/SortToggle';


export default function NoteList({notes, setNotes}) {

    const handleDelete = async (noteId) => {

    const updatedNotes = await deleteNote(noteId);
    setNotes(updatedNotes);
    }

    return (
        <>
            <SortToggle notes={notes} setNotes={setNotes} />
            <ul>
                {notes.length === 0 ? (
                    <p>No Notes Yet!</p>
                ) : (
                    notes.map((note, idx) => (
                        <li key={idx}>
                            {note.text} <br />
                            <div>
                                {new Date(note.createdAt).toLocaleString()}
                                <button onClick={() => handleDelete(note._id)}>Delete</button> 
                            </div>
                        </li>
                    ))
                )}
            </ul>
        </>

);
// look back at restful api. in your controller how will you know which note to delete
}

//note.createdAt - stores the date and time when the note was created.
// createdAt - comes from mongodb mongoose and field is automatically added if{ timestamps: true } in  schema
// new Date - helos format

