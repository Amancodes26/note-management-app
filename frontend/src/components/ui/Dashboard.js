import React, { useState } from 'react';
import Note from '../notes/Note';
import newNote from '../../utils/icons/new-note.svg';


const Dashboard = () => {
    const [notes, setNotes] = useState([]);
    const [nextId, setNextId] = useState(1); // Add an ID counter

    const addNote = () => {
        setNotes([...notes, { id: nextId, content: 'New Note' }]);
        setNextId(nextId + 1); // Increment the ID counter
    };

    return (
        <div className="bg-gray-700 min-h-[calc(100vh-64px)] max-w-[100vw] overflow-x-hidden relative flex flex-col items-center">
            <p className="text-gray-200 text-5xl py-4">Sticky Notes</p>
            <div className='flex w-10/12 justify-center'>
                <div className='flex gap-2 flex-wrap'>
                    {notes.map(note => (
                        <Note key={note.id} content={note.content} />
                    ))}
                </div>
                <div 
                    type="button" 
                    className=" fixed right-5" 
                    onClick={addNote}
                >
                    <img src={newNote} alt="New Note" className="w-8 h-8 hover:opacity-50" />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
