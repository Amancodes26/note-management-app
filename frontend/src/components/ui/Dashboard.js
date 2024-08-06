import React, { useState } from 'react';
import Note from '../notes/Note';

const Dashboard = () => {
    const [notes, setNotes] = useState([]);
    const [nextId, setNextId] = useState(1); // Add an ID counter

    const addNote = () => {
        setNotes([...notes, { id: nextId, content: 'New Note' }]);
        setNextId(nextId + 1); // Increment the ID counter
    };

    return (
        <div className="bg-gray-700 w-full min-h-[calc(100vh-64px)] max-w-[100vw] overflow-x-hidden">
            <p className="text-gray-200">Sticky Notes</p>
            <button 
                type="button" 
                className="text-white bg-gray-900 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-[40%] text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-700 dark:border-gray-700" 
                onClick={addNote}
            >
                +
            </button>
            <div className='flex gap-2 flex-wrap'>
                {notes.map(note => (
                    <Note key={note.id} content={note.content} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
