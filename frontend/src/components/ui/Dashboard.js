import React, { useState } from "react";
import Note from "../notes/Note";
import newNote from "../../utils/icons/new-note.svg";
import NewNote from "../notes/NewNote";

const Dashboard = () => {
    const [notes, setNotes] = useState([]);
    const [newNoteEnable, setNewNoteEnable] = useState(false);
    const [highlightedNoteId, setHighlightedNoteId] = useState(null);
    const [editingNote, setEditingNote] = useState(null);

    const addNote = () => {
        setNewNoteEnable(!newNoteEnable);
        if (editingNote) {
            setEditingNote(null); // Clear editing state when opening new note form
        }
    };

    const handleCreateOrUpdateNote = (note) => {
        if (note) {
            if (editingNote) {
                // Update existing note
                setNotes(notes.map(n => n.id === editingNote.id ? note : n));
                setEditingNote(null);
            } else {
                // Create new note
                setNotes([note, ...notes]);
                setHighlightedNoteId(note.id);
            }
        }
        setNewNoteEnable(false); // Close the new note form
    };

    const handleEditNote = (id) => {
        const noteToEdit = notes.find(n => n.id === id);
        setEditingNote(noteToEdit);
        setNewNoteEnable(true); // Open new note form
    };

    const handleDeleteNote = (id) => {
        setNotes(notes.filter(n => n.id !== id));
    };

    return (
        <div className="bg-gray-700 min-h-[calc(100vh-64px)] max-w-[100vw] overflow-x-hidden relative flex flex-col items-center">
            <p className="text-gray-200 text-5xl py-4 font-bold">Sticky Notes</p>
            <div className="flex w-10/12 justify-start">
                <div className="flex gap-2 flex-wrap">
                    {notes.map((note) => (
                        <Note
                            key={note.id}
                            id={note.id} // Pass the note id to Note component
                            initialTitle={note.title}
                            initialDescription={note.content}
                            style={{ backgroundColor: note.color }}
                            isHighlighted={note.id === highlightedNoteId} // Pass highlight status
                            onEdit={handleEditNote} // Handle edit
                            onDelete={handleDeleteNote} // Handle delete
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
                    {newNoteEnable && 
                        <NewNote 
                            onCreate={handleCreateOrUpdateNote}
                            initialTitle={editingNote ? editingNote.title : ''}
                            initialContent={editingNote ? editingNote.content : ''}
                            initialColor={editingNote ? editingNote.color : ''}
                        />
                    }
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
