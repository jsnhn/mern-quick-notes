import { useState } from 'react';

export default function SortToggle({ notes, setNotes }) {
    const [sort, setSort] = useState({ direction: 'ascending' });

    const toggleSort = () => {
        const newDirection = sort.direction === 'ascending' ? 'descending' : 'ascending';
        setSort({ direction: newDirection });

        const sortedNotes = [...notes].sort((a, b) => {
            const dateA = new Date(a.createdAt);
            const dateB = new Date(b.createdAt);

            if (dateA < dateB) return newDirection === 'ascending' ? -1 : 1;
            if (dateA > dateB) return newDirection === 'ascending' ? 1 : -1;
            return 0;
        });
        setNotes(sortedNotes); // Pass sorted notes back to NoteList
    };

    return (
        <button onClick={toggleSort}>
            {sort.direction === 'ascending' ? 'Descending' : 'Ascending'}
        </button>
    );
}