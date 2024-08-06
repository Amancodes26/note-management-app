import React, { useState } from "react";
import Note from "../notes/Note";
import newNote from "../../utils/icons/new-note.svg";
import NewNote from "../notes/NewNote";

const Dashboard = () => {
    const [notes, setNotes] = useState([]);
    const [newNoteEnable, setNewNoteEnable] = useState(false);

    const addNote = () => {
        setNewNoteEnable(!newNoteEnable);
    };

    const handleCreateNote = (note) => {
        if (note) {
            setNotes([...notes, note]);
        }
        setNewNoteEnable(false); // Close the new note form
    };

    return (
        <div className="bg-gray-700 min-h-[calc(100vh-64px)] max-w-[100vw] overflow-x-hidden relative flex flex-col items-center">
            <p className="text-gray-200 text-5xl py-4 font-bold">Sticky Notes</p>
            <div className="flex w-10/12 justify-start">
                <div className="flex gap-2 flex-wrap">
                    {notes.map((note) => (
                        <Note
                            key={note.id}
                            initialTitle={note.title}
                            initialDescription={note.content}
                            style={{ backgroundColor: note.color }}
                        />
                    ))}
                </div>
                <div className="fixed right-5">
                    <div
                        type="button"
                        className="fixed right-5"
                        onClick={addNote}>
                        <img
                            src={newNote}
                            alt="New Note"
                            className={`w-8 h-8 hover:opacity-50 transition-all cursor-pointer ${newNoteEnable ? 'rotate-45' : ''}`}
                        />
                    </div>
                    {newNoteEnable && <NewNote onCreate={handleCreateNote} />}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
