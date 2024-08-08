import React, { useState, useEffect } from "react";
import Note from "../notes/Note";
import newNote from "../../utils/icons/new-note.svg";
import NewNote from "../notes/NewNote";
import Button from '@mui/material/Button';
import axios from 'axios';

const colorOptions = ['#fa9fba', '#8AC256', '#97d2fb', '#fd9873', '#B89CC8'];

const Dashboard = () => {
    const [notes, setNotes] = useState([]);
    const [newNoteEnable, setNewNoteEnable] = useState(false);
    const [highlightedNoteId, setHighlightedNoteId] = useState(null);
    const [editingNote, setEditingNote] = useState(null);
    const [selectedColor, setSelectedColor] = useState('');

    useEffect(() => {
        // Fetch notes from backend
        const fetchNotes = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('https://note-management-app-orpin.vercel.app/api/notes', {
                    headers: {
                        'x-auth-token': token,
                    },
                });
                // Assuming response.data contains the notes with `_id`
                const notesWithId = response.data.map(note => ({
                    ...note,
                    id: note._id,
                }));
                setNotes(notesWithId);
            } catch (error) {
                console.error('Error fetching notes:', error);
            }
        };

        fetchNotes();
    }, []);

    const addNote = () => {
        setNewNoteEnable(!newNoteEnable);
        if (editingNote) {
            setEditingNote(null); 
        }
    };

    const handleCreateOrUpdateNote = (note) => {
        if (note) {
            if (editingNote) {
                setNotes(notes.map(n => n.id === editingNote.id ? { ...note, id: editingNote.id, x: editingNote.x, y: editingNote.y } : n));
                setEditingNote(null);
            } else {
                setNotes([{ ...note, id: note._id, x: 50, y: 0 }, ...notes]);
                setHighlightedNoteId(note._id);
            }
        }
        setNewNoteEnable(false); 
    };

    const handleEditNote = (id) => {
        const noteToEdit = notes.find(n => n.id === id);
        setEditingNote(noteToEdit);
        setNewNoteEnable(true); 
    };

    const handleDeleteNote = async (id) => {
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`https://note-management-app-orpin.vercel.app/api/notes/${id}`, {
                headers: {
                    'x-auth-token': token,
                },
            });
            setNotes(prevNotes => prevNotes.filter(n => n.id !== id));//update
        } catch (error) {
            console.error('Error deleting note:', error);
        }
    };

    const handleDragNote = (id, x, y) => {
        setNotes(notes.map(note => note.id === id ? { ...note, x, y } : note));
    };

    const handleColorFilter = (color) => {
        setSelectedColor(color);
        setHighlightedNoteId(null); 
    };

    const clearColorFilter = () => {
        setSelectedColor('');
        setHighlightedNoteId(null); 
    };

    const filteredNotes = selectedColor
        ? notes.filter(note => note.color === selectedColor)
        : notes;

    return (
        <div className="bg-gray-700 h-full max-w-[100vw] overflow-x-auto relative flex flex-col items-center">
            <p className="text-gray-200 text-5xl py-4 font-bold">Sticky Notes</p>

            {/* Color Filter UI */}
            <div className="mb-4">
                <div className="flex space-x-2">
                    {colorOptions.map((color) => (
                        <Button
                            key={color}
                            className={`w-12 h-12 rounded-full transition-transform duration-300 ease-in-out ${
                                selectedColor === color ? 'scale-110' : 'scale-100'
                            } hover:scale-110`}
                            style={{
                                backgroundColor: color,
                                color: '#fff',
                            }}
                            onClick={() => handleColorFilter(color)}
                        />
                    ))}
                    <Button
                        className="w-12 h-12 rounded-full bg-gray-200 text-black transition-transform duration-300 ease-in-out hover:scale-110"
                        onClick={clearColorFilter}
                    >
                        All
                    </Button>
                </div>
            </div>

            <div className="relative w-full h-full">
                {filteredNotes.map((note) => (
                    <Note
                        key={note.id}
                        id={note.id}
                        initialTitle={note.title}
                        initialDescription={note.content}
                        initialX={note.x}
                        initialY={note.y}
                        style={{ backgroundColor: note.color }}
                        isHighlighted={note.id === highlightedNoteId}
                        onEdit={handleEditNote}
                        onDelete={handleDeleteNote}
                        onDrag={handleDragNote}
                    />
                ))}
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
